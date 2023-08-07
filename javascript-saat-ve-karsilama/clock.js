let userName = prompt ("isminizi giriniz") 
let myName = document.querySelector("#myName")

myName.innerHTML = `${userName}`

function clockShowTime(){
    let date = new Date();
    let days =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    myClock.innerHTML= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getDay()]}` ;
}
setInterval(clockShowTime,1000);