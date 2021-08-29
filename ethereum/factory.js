import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xee3e71f8020138d22f651A536BCB4E2E26941172"
);

export default instance;
