var imgs = $("header > img");
var last = imgs.length - 1;
var sno = 0;

$("header").on("click",function(){
	slide();
});

function slide(){
	if( $(imgs[sno]).is(":animated") ) return;
$(imgs[sno]).animate({
	"right" : "1500px"
},1000,function(){
	$(this).css({"right":"-1500px"});
});
sno++; //sno = sno +1;
if( sno > last ) sno = 0;
$(imgs[sno]).animate({
	"right" : "0"
},1000);
} 

var timer = setInterval(function(){slide();},2000);

//움찔움찔
$(".go_mom").click(function(){
    $("#s1").css("margin-top","0px");
    $("#s2").css("margin-top","800px");
    $("#s3").css("margin-top","800px");
    $("#s4").css("margin-top","800px");
    $("#s5").css("margin-top","800px");
});
$("#bt1").click(function(){
    $("#s1").css("margin-top","800px");
    $("#s2").css("margin-top","0px");
    $("#s3").css("margin-top","800px");
    $("#s4").css("margin-top","800px");
    $("#s5").css("margin-top","800px");
});
$("#bt2").click(function(){
    $("#s1").css("margin-top","800px");
    $("#s2").css("margin-top","800px");
    $("#s3").css("margin-top","0px");
    $("#s4").css("margin-top","800px");
    $("#s5").css("margin-top","800px");
});
$("#bt3").click(function(){
    $("#s1").css("margin-top","800px");
    $("#s2").css("margin-top","800px");
    $("#s3").css("margin-top","800px");
    $("#s4").css("margin-top","0px");
    $("#s5").css("margin-top","800px");
});
$("#bt4").click(function(){
    $("#s1").css("margin-top","800px");
    $("#s2").css("margin-top","800px");
    $("#s3").css("margin-top","800px");
    $("#s4").css("margin-top","800px");
    $("#s5").css("margin-top","0px");
});

var x = 850;
var slider = document.getElementById("slider");
var slideArray = slider.getElementsByTagName("li");
var slideMax = slideArray.length - 1;
var curSlideNo = 0;
var changeSlide = function(){
for (i = 0; i <= slideMax; i++){
    if (i == curSlideNo) slideArray[i].style.left = 0;
    else slideArray[i].style.left = -x + "px";
}
}
changeSlide();
slider.addEventListener('click',function (){
curSlideNo = curSlideNo+1;
if ( curSlideNo>slideMax) curSlideNo=0;
changeSlide();
},false);