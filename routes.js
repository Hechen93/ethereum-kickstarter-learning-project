const routes = require("next-routes")(); //Need the 2nd brackets, returns a function -see official docs

routes
  .add("/campaigns/new", "/campaigns/new") //This is the new campaign route, do not override this
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests", "/campaigns/requests/index") //The second argument is where we want to direct the user
  .add("/campaigns/:address/requests/new", "/campaigns/requests/new"); //1st argument is the URL user visits, 2nd is where we direct them

module.exports = routes;
