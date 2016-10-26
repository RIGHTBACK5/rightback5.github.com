var num1 = $("#num1");
var num2 = $("#num2");
var num3 = $("#num3");
var num4 = $("#num4");
var sign1 = $("#wh1");
var sign2 = $("#wh2");
var fin =$("#final");
var right;
var left;
var nf;
nf = Math.floor(Math.random()*10)+1;
var ns;
ns = Math.floor(Math.random()*10)+1;
var nf2;
nf2 = Math.floor(Math.random()*10)+1;
var ns2;
ns2 = Math.floor(Math.random()*10)+1;
console.log(nf);
console.log(ns);
num1.append(nf);
num2.append(ns);
num3.append(nf2);
num4.append(ns2);
math('+');
    function reset(){
        console.log("sadf");
        ns = Math.floor(Math.random()*10)+1;
        nf = Math.floor(Math.random()*10)+1;
        nf2 = Math.floor(Math.random()*10)+1;
        ns2 = Math.floor(Math.random()*10)+1;
        num1.html(nf);
        num2.html(ns);
        num3.html(nf2);
        num4.html(ns2);
        fin.html("재미있는 숫자놀이! <br/>");
    }
    $("#left").click(function(){
    if(left>right){
        console.log("정답");
        fin.append("정답 <br/>" );
    }
    else{
        console.log("오답");
        fin.append("오답<br/>");
    }
});


    $("#same").click(function(){
    if(left==right){
        console.log("정답");
        fin.append("정답<br/>");
    }
    else{
        console.log("오답");
        fin.append("오답<br/>");
    }
});


    $("#right").click(function(){
    if(right>left){
        console.log("정답");
        fin.append("정답<br/>");
    }
    else{
        console.log("오답");
        fin.append("오답<br/>");
    }
});
function math(sign){
    sign1.html(sign);
    sign2.html(sign);
    switch(sign){
        case"+":
            left=nf+nf2;
            right=ns+ns2;
            break;
        case"-" :
            left=nf2-nf;
            right=ns-ns2;
            break;
        case"×":
            left=nf2*nf;
            right=ns*ns2;
            break;
        case"÷":
            left=nf2/nf;
            right=ns/ns2;
            break;
    }
}
$("#rs").click(reset);