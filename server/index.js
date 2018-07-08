let express = require("express");
const app = express();

app.use('/static', express.static(`${__dirname}/static`));

app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.sendFile(`${__dirname}/index.html`);
});
app.get('/api/article',(req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.sendFile(`${__dirname}/article.json`);
})

app.listen(4000,function(){
	console.log("服务器已经开启！")
})