var num =$("#num");
var onum = 0;
var anum;
var snum;
var mnum;
$("#num").html(onum);
snum = setInterval(function(){
    onum+100;
    if(onum>=500){
        onum=0;
    }
       $("#num").html(onum);
                   },3000);
$("#plus").click(function(){
    clearInterval(snum);
    clearInterval(mnum);
    onum+=100;
  $("#num").html(onum);
    if(onum>=400){
        onum=-100;
    }
    anum = setInterval(function(){
    onum+=100;
    if(onum>=500){
        onum=0;
    }
       $("#num").html(onum);
                   },3000);
});
$("#minus").click(function(){
    clearInterval(snum);
    clearInterval(anum);
   onum-=100;
    $("#num").html(onum);
    if(onum<=0){
        onum=0;
         $("#num").html(onum);
    }
    mnum = setInterval(function(){
    onum-=100;
    if(onum<=0){
        onum=0;
    }
         $("#num").html(onum);
                   },3000);
});