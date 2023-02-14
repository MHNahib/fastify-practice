const { StatusCodes } = require("http-status-codes");
const response = require("../utils/response");

const routes = {
  method: "GET",
  url: "/base",
  handler: (req, res) => {
    response(
      res,
      StatusCodes.ACCEPTED,
      true,
      {
        say: "GET",
      },
      "Success"
    );
  },
  method: "POST",
  url: "/base",
  handler: (req, res) => {
    response(
      res,
      StatusCodes.ACCEPTED,
      true,
      {
        say: "POST",
      },
      "Success"
    );
  },
};

module.exports = routes;
