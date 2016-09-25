console.log('Loaded!');
alert('hi');
var img=document.getELementById('madi');
var marginleft=0;
function moveright(){
    marginleft+=5;
    img.style.marginLeft=marginleft +'px';
}
img.onclick=function(){
    var interval=setinterval(moveright,50);
};