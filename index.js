const start=document.querySelector('#start')


let intervalid;
let statChangingColor=function(){
    if (!intervalid) {
        intervalid=setInterval(() => {
            document.body.style.backgroundColor=randmColor()
        }, 1000);
    }
   
}

const randmColor=function(){
    let color='#';
    const hex="123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
start.addEventListener('click',statChangingColor)

///////////////////// end ky lai
const end=document.querySelector('#end')

const stopChangingColor=function(){
clearInterval(intervalid)
intervalid=null
}

end.addEventListener('click',stopChangingColor)

