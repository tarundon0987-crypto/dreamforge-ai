const http=require('http'),fs=require('fs'),path=require('path');
const PORT=process.env.PORT||3000;
const html=fs.readFileSync(path.join(__dirname,'public','index.html'),'utf8');
const server=http.createServer((req,res)=>{
 if(req.method==='GET'&&(req.url==='/'||req.url==='/index.html')){
   res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'}); return res.end(html);
 }
 if(req.method==='POST'&&req.url==='/api/generate'){
   let body='';req.on('data',c=>body+=c);req.on('end',()=>{
     try{const x=JSON.parse(body||'{}'); if(!x.prompt)return send(res,400,{error:'Prompt is required'});
       // DEMO BACKEND. Replace this block with your video-provider API call.
       send(res,200,{demo:true,videoUrl:null,message:'Demo job completed. Connect your video model API here.'});
     }catch(e){send(res,400,{error:'Invalid JSON'})}
   });return;
 }
 res.writeHead(404,{'Content-Type':'application/json'});res.end(JSON.stringify({error:'Not found'}));
});
function send(res,status,obj){res.writeHead(status,{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});res.end(JSON.stringify(obj))}
server.listen(PORT,()=>console.log(`DreamForge AI running at http://localhost:${PORT}`));
