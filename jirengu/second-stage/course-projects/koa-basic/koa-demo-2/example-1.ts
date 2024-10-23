const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "Hello";
  await next();
  ctx.body += ", Shervin";
});

app.use(async (ctx, next) => {
  ctx.body += " world";
  await next();
});

app.use(async (ctx, next) => {
  ctx.set("Content-Type", "text/html; charset=utf-8");
  await next();
});

app.listen(3000);

// tsx server.ts
