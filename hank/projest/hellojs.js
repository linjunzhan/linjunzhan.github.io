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




function getmerry(monny = "輸入金額") {
    if (monny >= 10) return "我就結婚";
    else if (monny >= 5) return "我在想想看";
    else return "那就算了"
}

var gg = getmerry(10);//if else 用法
//console.log(gg);


function ooo(os, oe) {
    for (i = os; i <= oe; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
} //偶數判別方式


function jjj(js, je) {
    for (var i = js; i <= je; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }

} //奇數判別方式


//ooo(0, 50);//呼叫函數



//var i =0
//while (i <= 50) {
//    if(i %2 !=0 )
//        if(i%7==0)
////        if(i%7 == 0)
////            if(i%3 !=0)
////                if(i%5 !=0)
//    
//    console.log(i);
////    document.writeln(i);
////        alert(i);
//    i++; 
//}


//function showMsg(username){
//    console.log('HI + 'username' +,wlcome to my js function');
//}
//showMsg(username);///未完成



//function isPrime(n)
//{
//    if (n <= 1) 
//    {
//        return false;
//    }
//
//    for (var i = 2; i <= Math.sqrt(n); i++) 
//    {
//        if (n % i === 0) 
//        {
//            return false;
//        }
//    }
//
//    return true;
//}
//
//function main() {
//    for (var i = 2; i <= 50; i++) {
//        if (isPrime(i)) {
//            //      console.log(i);
//            document.writeln(i);
//        }
//    }
//}
//
//main();









//function validateForm()
//
//{
//
//    var username = document.getElementById("username").value;
//    alert("你的名字是"+username);
//    var email = document.getElementById("email").value;
//    alert("你的email是"+email);
//     var phone = document.getElementById("phone").value;
//    alert("你的phone是"+phone);
//
//
//}
