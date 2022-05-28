import Koa from 'koa';
import logger from 'koa-logger';
import koaBody from 'koa-body';
import Router from 'koa-router';

const PORT = 3000;

const app = new Koa();

app.use(logger());

app.use(koaBody());

app.use( async (ctx, next) => {
  console.log('######## REQUEST ########');
  console.log('BODY', ctx.request.body);
  console.log('PARAMS', ctx.request.query);
  console.log('HEADERS', ctx.request.headers);
  console.log('Files', ctx.request.files); // files access
  console.log('######################');
  await next();
});

const router = new Router();


router.get('/', (ctx, next) => {
  ctx.body = { message: "Hello world with a beatiful CD from service 2!" };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT)
})

