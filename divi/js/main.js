var num = new Array();
var i;
var j;
var v = $("#up").children();
$("#go").click(function(){
num[0] = $("#i1:text").val();
        $("#i1:text").val("");         
num[1] = $("#i2:text").val();
        $("#i2:text").val("");
num[2] = $("#i3:text").val();
        $("#i3:text").val("");
num[3] = $("#i4:text").val();
        $("#i4:text").val("");
num[4] = $("#i5:text").val();
        $("#i5:text").val("");
num[5] = $("#i6:text").val();
        $("#i6:text").val("");
num[6] = $("#i7:text").val();
        $("#i7:text").val("");
num[7] = $("#i8:text").val();
        $("#i8:text").val("");
num[8] = $("#i9:text").val();
        $("#i9:text").val("");
num[9] = $("#i10:text").val();
        $("#i10:text").val("");
for(i=0; i<10; i++){
    for(j=i+1; j<10; j++){
        if(num[j] > num[i]){
            a = num[i];
            num[i]=num[j];
            num[j]=a;
        }
        
}
    console.log(num[i]);
    $("#down").append(num[i]);
}
  for(i=0; i<10; i++){
    for(j=i+1; j<10; j++){
        if(num[j] < num[i]){
            a = num[i];
            num[i]=num[j];
            num[j]=a;
        }
        
}
    console.log(num[i]);
    $("#up").append(num[i]);
}  
     });