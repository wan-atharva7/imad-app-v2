var button = document.getElementById('counter');

button.onclick = function(){
//create request
var request= new XMLHttpRequest();
//
request.onreadystatechange=function(){
  if(request.readyState == XMLHttpRequest.DONE)
  {
      //take some action
      if(request.status==200)
      {
            var counter = request.responseText;
            var spn = document.getElementById('spn');
            spn.innerHTML = counter.toString();
      }
  }
};
//make request
request.open('GET','http://wan-atharva7.imad.hasura-app.io/counter',true);
request.send(null);
};