const PORT: number = +(process.env.PORT || 8081);
const NODE_ENV: string = process.env.NODE_ENV ?? "development";

const server = Bun.serve({
  port: PORT,
  fetch() {
    return new Response("Hello World bitch!");
  },
});

console.log(`[${NODE_ENV}] Listening on port ${server.port}`);
