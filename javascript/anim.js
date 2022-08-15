//Variables globales

const btnIntro = document.getElementById('btnIntro');
const bienvenue = document.getElementsByClassName('paragrapheBienvenue')

//Au chargement de la page Affiche les éléments en décalés

window.addEventListener('load',() =>
{
    bienvenue[0].classList.add('showP')
    btnIntro.classList.add('showB')
});

//Au clique du bouton suivant transition de la page d'intro

btnIntro.addEventListener('click',()=>
{
    const pageIntro = document.getElementsByClassName('intro');
    pageIntro[0].classList.add('introHide');
    console.log('yo');
});


