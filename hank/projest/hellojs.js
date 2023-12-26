// var Hii = 'Hi 我是林均展'
// var jslove = 'javascript是我最愛的語言XD'
// var iwish = "我是這樣希望的"
// document.writeln(jslove);
// alert(Hii);
// console.log(iwish);

//document.writeln(thisCount2);
//var thisCount ="2.5"*"2.0";
//var thisCount1 ="2.5"+"2.0";
//var thisCount2 = parseFloat(thisCount1)+2.0;
//alert(thisCount2);

//var x = y =1;
//i=x++;
//j=++y;
//alert(i);
//document.writeln(j);
//console.log(i+","+j);

//var msg =abc("你好嗎?");
//function abc(x){return x+"我收到字串了"}
//document.writeln(msg);


//var mag = ab(8);
//
//function ab(x) {
//    if (x > 10) return "我就結婚";
//    else if (x > 5) return "我再想想看";
//    else return "就算了";
//}
//document.writeln(mag);

//
//for(i=0;i<=50;i++){
//    if(i%2==0)//偶數判別方式
//    if(i%3!=0)
//    {
//    document.writeln(i);
//}
//}
//


//for (i = 0; i <= 50; i++) {
//    if (i % 2 != 0)//奇數判別方式
//
//    {
//        document.writeln(i);
//
//    }
//}


//var i =0
//while (i <= 50) {
//    if(i %2 !=0 )
//        if(i%7==0)
////        if(i%7 == 0)
////            if(i%3 !=0)
////                if(i%5 !=0)
//    
//    document.writeln(i);
//    i++; 
//}



function validateForm()

{

    var username = document.getElementById("username").value;
    alert("你的名字是"+username);
    var email = document.getElementById("email").value;
    alert("你的email是"+email);
     var phone = document.getElementById("phone").value;
    alert("你的phone是"+phone);


}
