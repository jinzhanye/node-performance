const KoaServer = require('koa');
const app = new KoaServer();

app.use(async ctx => {
  console.log('收到请求');
  ctx.body = await getResult();
  console.log('已响应');
});

// chrome不同的tab打开同一个url的时候，每个tab会等待前面一个tab执行完才会执行。不能并发，而 firefox 不会有这个问题

async function getResult(){
  return new Promise( resolve => {
    setTimeout( resolve, 3000, {
      data: 'hello, world'
    });
  })
}

app.listen(3011, () => {
  console.log('listening on http://localhost:3011')
});

