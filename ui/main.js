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


//change the contents of a list

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit =  document.getElementById('btn');
submit.onclick=function(){
  //Make a request to the server and send the name
  var request= new XMLHttpRequest();
//
request.onreadystatechange=function(){
  if(request.readyState == XMLHttpRequest.DONE)
  {
      //take some action
      if(request.status==200)
      {
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for(var i=0;i<names.length;i++){
                list+='<li>'+names[i]+'</li>';
            }
            var ul = document.getElementById('ulist');
            ul.innerHTML = list;
      }
  }
};
//make request
request.open('GET','http://wan-atharva7.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);
};

  //Capture the name and render it as list
  
