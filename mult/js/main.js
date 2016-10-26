var num =$("#num");
var onum = 0;
var anum;
var snum;
var mnum;
$("#num").html(onum);
$("#plus").click(function(){
    onum+=100;
  $("#num").html(onum);
    if(onum>=400){
        onum=-100;
    }
});
$("#minus").click(function(){
   onum-=100;
    $("#num").html(onum);
    if(onum<=0){
        onum=0;
         $("#num").html(onum);
    }
});