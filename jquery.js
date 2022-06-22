// JS Vanilla
document.querySelector(".para").addEventListener("click", function () {});

// jQuery
$(".para").on("click", function () {});

// <a href="#" class="lien" mon-attribut="valeur">...

let a = document.querySelector("a.lien");
let valeur = a.attributes("mon-attribut").value();

// <a href="#" class="lien" data-attribut="valeur">...
// <a href="#" class="lien" data-src="./fff">...
let valeur2 = a.data("attribut").value();
let valeur3 = a.data("src").value();
