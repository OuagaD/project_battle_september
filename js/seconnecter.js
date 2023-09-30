let formconx = document.querySelector(".fmsecon")
formconx.addEventListener("submit", (e)=>{
    e.preventDefault();
    let dataconx = JSON.parse(localStorage.getItem("bduser"))
    let tabuser
    dataconx.forEach(user => {
        if(document.querySelector("#idcx").value === user.email && document.querySelector("#mtcx").value === user.mtpss){
            tabuser = user
        }
    })
    if(typeof tabuser !== "undefined"){
        localStorage.setItem("newuser", JSON.stringify(tabuser))
        window.location.replace("./agenda.html")
    }else{
        window.location.reload()
    }
}
)