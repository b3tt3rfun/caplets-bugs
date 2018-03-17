function onRequest(req, res){
log();
for(var i=0; i<req.Headers.length;i++){
  if(req.Headers[i].Name.indexOf('User-Agent') == 0){
    // Crash with this line
    req.Headers[i].Value = "Hello";
  }
}
// JS Error here
req.Headers.push({Name:'test',Value:'test'});
log();
}
