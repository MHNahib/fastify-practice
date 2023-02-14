const Fastify = require("fastify");
const { StatusCodes } = require("http-status-codes/build/cjs/status-codes");
const baseRoutes = require("./src/routes/basic.routes");
const response = require("./src/utils/response");

const fastify = Fastify({
  logger: true,
});

// port
const port = process.env.PORT || 5000;

// get
fastify.get("/", (req, res) => {
  response(
    res,
    StatusCodes.ACCEPTED,
    true,
    {
      say: "Hello world",
    },
    "Success"
  );
});

fastify.route(baseRoutes);

// listen on port
const startServer = async () => {
  try {
    await fastify.listen({
      port,
    });
    fastify.log.info(`running on ${port}`);
  } catch (err) {
    fastify.log.error("err", err);
    process.exit(1);
  }
};

startServer();
