function go() {
    document.querySelector(".box1").style.backgroundColor="black";
    document.querySelector(".box2").style.backgroundColor="black";
    document.querySelector(".box3").style.backgroundColor="green";
}
function wait() {
    document.querySelector(".box1").style.backgroundColor="black";
    document.querySelector(".box2").style.backgroundColor="yellow";
    document.querySelector(".box3").style.backgroundColor="black";
}
function stop(params) {
    document.querySelector(".box1").style.backgroundColor="red";
    document.querySelector(".box2").style.backgroundColor="black";
    document.querySelector(".box3").style.backgroundColor="black";
}
function logic(){
stop();
setTimeout(wait,4000);
setTimeout(go,5000)
}
setInterval(logic,9000)