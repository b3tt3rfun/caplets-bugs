function onLoad(){
  log("Connect to http://www.ufl.edu to test modification of response headers...");
}
function onResponse(req, res){
  log();
  if(res.ContentType){
    if (res.ContentType.indexOf("text/html") == 0){
      if (res.Headers.indexOf("X-Ufl-Realserver") != -1){
        var tmp1 = res.Headers.split("X-Ufl-Realserver: ");
        var tmp2 = tmp1[1].split("\r\n");
        res.Headers = tmp1[0] + "X-Ufl-Realserver: 127.0.0.1\r\n" + tmp2[1];
        //res.ReadBody();  // Needed to setup len(jres.Body) != 0
      }
    }
  }
  log();
}
