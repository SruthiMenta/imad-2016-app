console.log('Loaded!');
var element=document.getElementById("main-text");


//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+3;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick= function() {
    var interval=setInterval(moveRight,50);
};
var btn=document.getElementById('counter');
btn.onclick= function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};

    


    

