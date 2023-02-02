const http = require('http');

function syncSleep() {
  const arr = new Array(33599999).fill(1)
  arr.forEach((item) => {
    // 占位
    const a = item
  })
}

async function getResult(){
  return new Promise( resolve => {
    setTimeout( resolve, 3000, 'hello, world');
  })
}

const server = http.createServer(async function (req, res) {
  const url = req.url
  console.log('request was made:', url);

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  // writeHead 优先级更高 header 最终返回
  // Content-Type: text/plain
  // X-Foo: bar


  // 同步会一直阻塞，不能并发，除非使用多进程
  const before = Date.now()
  syncSleep()
  const after = Date.now()
  console.log('time:', after - before)

  // 异步可以进行并发
  // const result = await getResult();

  res.end('hello world');
  console.log('end:', url)
});

server.listen(3012, '127.0.0.1');
console.log('listening on http://localhost:3012')
