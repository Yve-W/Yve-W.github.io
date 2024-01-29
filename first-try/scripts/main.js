let myImage=document.querySelector("img");

myImage.onclick=function(){
    let mysrc=myImage.getAttribute("src");
    if(mysrc==="images/1selfie.jpg"){
        myImage.setAttribute("src","images/2.selfie.jpg");
    }
    else{myImage.setAttribute("src","images/1selfie.jpg");}
}
let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1")
function setUserName(){
    let userName=prompt("if you like,you can tell me your name:");
    if(!userName) setUserName();
    else{
    localStorage.setItem("name",userName);
    myHeading.textContent="Nice to meet you,"+userName;
    }
}
if(!localStorage.getItem("name")){
    setUserName();
}else{
    myHeading.textContent="Nice to meet you,"+localStorage.getItem("name");
}
myButton.onclick=function(){
    setUserName();
}