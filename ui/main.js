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