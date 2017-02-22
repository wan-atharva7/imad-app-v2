console.log('Loaded!');
var img =  document.getElementById('madi');
var marginLeft =0;
function moveRight(){
    marginLeft+=1;
    img.style.marginLeft= marginLeft+'px';
}
img.onclick= function(){
    var interval= setInterval(moveRight,10);
};

var button = document.getElementById('counter');
button.onclick = function(){
var request= XMLHttpRequest();
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