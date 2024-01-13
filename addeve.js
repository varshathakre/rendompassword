// document.getElementById("btn").addEventListener("click",mydisplay);

// function mydisplay()
// {
//     alert("welcome to cybrom");
// }


document.getElementById("btn").addEventListener("click",mypwd);
function mypwd()
{
    let mypass="";
    // alert("hii");
   
    let str1="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str2="0123456789";
    let str3="!@#$%^&*";
    let str4="abcdefghijklmnopqrstuvwxyz";
    let str5="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  
    let mylen1=str1.length;
    let mylen2=str2.length;
    let mylen3=str3.length;
    let mylen4=str4.length;
    let mylen5=str5.length;
    let myno;
    // for(var i=1;i<=8;i++)
    // {
    //     myno=Math.floor(Math.random()*mylen);
    //     mypass+=str.charAt(myno);
    // }
    for(var i=1;i<=1;i++)
    {
        myno=Math.floor(Math.random()*mylen1);
        mypass+=str1.charAt(myno);
    }
    for(var i=1;i<=1;i++)
    {
        myno=Math.floor(Math.random()*mylen2);
        mypass+=str2.charAt(myno);
    }
    for(var i=1;i<=1;i++)
    {
        myno=Math.floor(Math.random()*mylen3);
        mypass+=str3.charAt(myno);
    }
    for(var i=1;i<=5;i++)
    {
        myno=Math.floor(Math.random()*mylen4);
        mypass+=str4.charAt(myno);
    }
    document.getElementById("demo").innerHTML=mypass;
}