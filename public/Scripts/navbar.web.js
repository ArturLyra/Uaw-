const menubtn = document.getElementById("menubutton")
const nav = document.getElementById("navcapca")

menubtn.addEventListener("click",(btn,ev)=>{
    nav.classList.toggle("active")
})