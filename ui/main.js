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
var counter = document.getElementById('counter');
var count=0;
counter.onclick(function(){
    count=count + 1;
    var spn = document.getElementById('spn');
    spn.innerHTML = count.toString();
});