const Koa = require('koa');
const app = new Koa();

let list = {
  "commentList": [
    { "name": "cam", "content": "It's good idea!", "publishTime": "2015-05-01" },
    { "name": "arcthur", "content": "Not bad.", "publishTime": "2015-05-01" }
  ]
}

let i = 1;
app.use(async ctx => {
  if (ctx.request.originalUrl === '/api') {
    ctx.body = JSON.stringify(list);
  } else if (ctx.request.originalUrl === '/api/submit') {
    list.commentList.push({
      name: 'jack' + i++,
      content: 'this is goods ' + i++,
      publishTime: new Date(),
    })
    ctx.body = JSON.stringify({
      ok: true,
    })
  }

});

app.listen(4000);