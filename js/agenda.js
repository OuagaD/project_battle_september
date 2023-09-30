let bd = JSON.parse(localStorage.getItem("newuser"))
let nameus = document.querySelector(".najs")
nameus.innerText = bd.nom + " " + bd.prenom
let infNom =document.querySelector(".inf_nom")
let infPrenom =document.querySelector(".inf_prenom")
infNom.innerText = bd.nom
infPrenom.innerText =  bd.prenom