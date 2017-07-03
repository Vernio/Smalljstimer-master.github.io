 function countdown()
  {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var hour = today.getHours();
    if(hour<10) hour = "0" + hour;
    var minuts = today.getMinutes();
    if(minuts<10) minuts = "0" + minuts;
    var seconds = today.getSeconds();
    if(seconds<10) seconds = "0" + seconds;

    document.getElementById("clock").innerHTML=
   day+"/"+month+"/"+year+"  "+hour+":"+minuts+":"+seconds;

    setTimeout("countdown()",1000);

  } 