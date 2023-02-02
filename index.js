const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log('收到请求');
  ctx.body = await getResult();
  console.log('已响应');
});

app.listen(3000);

async function getResult(){
  return new Promise( resolve => {
    setTimeout( resolve, 5000, {
      data: 'hello, world'
    });
  })
}
