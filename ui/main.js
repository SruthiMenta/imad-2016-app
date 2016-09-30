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
var counter=0;
btn.onclick= function(){
    //create an object
    var request=new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onReadyStateChanged=function() {
        if(request.ReadyState===XMLHttpRequest.DONE)
        {
            //take some aciton
            if(request.status==200)
            {
                var counter=request.responseText;
                var span=request.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    }
    
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};

    


    

