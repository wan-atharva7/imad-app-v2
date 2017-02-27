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
var submit1 =  document.getElementById('art');
submit.onclick=function(req,res){
  var article = document.getElementById('article').value;
  var request1 = new XMLHttpRequest();
  request1.onreadystatechange=function(){
    if(request1.readyState = XMLHttpRequest.DONE)
    {
        if(request1.status==200)
        {
            var articles = request1.responseText;
            articles = JSON.parse(articles);
            var list1 = '';
            for(varj=0;j<artciles.length;j++){
                list1+='<p>'+articles+'</p>';
            }
            var spn1 = document.getElementById('span1');
            spn1.innerHTML = list;
        }
    }
  };
  request1.open('GET','http://wan-atharva7.imad.hasura-app.io/submit-?name='+name,true)
  
};

var submit =  document.getElementById('btn');
submit.onclick=function(){
  //Make a request to the server and send the name
  var nameInput = document.getElementById('name');
var name = nameInput.value;
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
 
};
//make request
request.open('GET','http://wan-atharva7.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);
};

  //Capture the name and render it as list
  
