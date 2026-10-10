import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const port=Number(process.env.PORT)||4173;
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.json':'application/json','.md':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end();return}if(name==='/')name='/index.html';const p=path.resolve(root,'.'+name);if(!p.startsWith(root+path.sep)){res.writeHead(403);res.end();return}fs.readFile(p,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return}res.writeHead(200,{'Content-Type':types[path.extname(p)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);});}).listen(port,'127.0.0.1',()=>console.log(`Maison preview http://127.0.0.1:${port}`));
