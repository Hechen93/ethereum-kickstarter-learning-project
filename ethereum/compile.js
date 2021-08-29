/*Compile once to local file and then use
 */

const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

//Logic to delete build folder (clear it out)

const buildPath = path.resolve(__dirname, "build"); //go to build folder from CWD
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); //Ensure a directory extists, if not, build one

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
