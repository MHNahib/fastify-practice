const Fastify = require("fastify");

const fastify = Fastify({
  logger: true,
});

// port
const port = process.env.PORT || 5000;

// get
fastify.get("/", (req, res) => {
  res.send({
    say: "Hello world",
  });
});

// listen on port
const startServer = async () => {
  try {
    await fastify.listen({
      port,
    });
  } catch (err) {
    fastify.log.error("err", err);
    process.exit(1);
  }
};

startServer();
