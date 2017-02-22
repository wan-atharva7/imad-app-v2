var button = document.getElementById('counter');

button.onclick = function(){
var request= new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request.readyState == XMLHttpRequest.DONE)
  {
      if(request.status==200)
      {
            var counter = request.responseText;
            var spn = document.getElementById('spn');
            spn.innerHTML = count.toString();
      }
  }
};
request.open('GET','http://wan-atharva7.imad.hasura-app.io/counter',true);
request.send(null);
};