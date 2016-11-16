$("#go").click(function(){
    var sc=0;
    var two = new Array();
    var eig = new Array();
    var asc = new Array();
    $("#sixty").empty();
    $("#eig").empty();
    $("#two").empty();
    $("#sixteen").empty();
    $("#asc").empty();
    var input = $("#ten").val();
    input = parseFloat(input);
    var input2 = $("#ten").val();
    input2 = parseFloat(input2);
     var input3 = $("#ten").val();
     input3 = parseFloat(input3);
     var input4 = $("#ten").val();
    input4 = parseFloat(input4);
    var input5 = $("#ten").val();
    while(input!=0){
        eig.push(parseInt(input%8));
        input = parseInt(input/8);
    }
    for(i=eig.length; i>=0;i--){
       $("#eig").append(eig[i]);
    }
    two=[];
    while(input2!=0){
        two.push(parseInt(input2%2));
        input2 = parseInt(input2/2);
    }
    for(i=two.length; i>=0;i--){
       $("#two").append(two[i]);
    }
    var dec = input3;
    var hex=dec.toString(16);
    $("#sixteen").append(hex);
    var ssc = input4;
    var fin;
    for(i=0; ;i++){
         if(ssc<60){
            ssc*=0.01;
            fin=ssc+sc;
            break;
        }
        ssc-=60;
        sc+=1;
    }
    $("#sixty").append(fin);
    $("#asc").append(input5.charCodeAt(0));
});
$("#re").click(function(){
   $("#sixty").html("60진수:");
    $("#eig").html("8진수:");
    $("#two").html("2진수:");
    $("#sixteen").html("16진수:");
    $("#asc").html("아스키 코드:");
});