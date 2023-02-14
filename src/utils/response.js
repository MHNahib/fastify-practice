const {} = require("http-status-codes");
const {
  getReasonPhrase,
} = require("http-status-codes/build/cjs/utils-functions");

const response = (res, code, status, data, message) => {
  if (!message) message = getReasonPhrase(code);

  return res.code(code).send({
    ...data,
  });
};

module.exports = response;
