//var zoekbutton = document.querySelector('img');
//var zoekveld = document.querySelector('header');
//
//zoekbutton.addEventListener('click', function(){
//    zoekveld.classList.toggle('show-search') /*zet class erbij of haalt er weg*/
//    zoekveld.classList.add('show-search') /*zet class erbij*/
//    zoekveld.classList.remove('show-search') /*haalt class weg*/
//})

var gegevens = document.getElementById('indicatie');
var progressBar = document.querySelector('progress');

window.onscroll = function () {
    progressie()
};

function progressie() {
    var hoogteDocOfBody = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (hoogteDocOfBody / height) * 100;
    if (scrolled > 10) {
        progressBar.classList.add('fixed');
    }
    if (scrolled < 10) {
        progressBar.classList.remove('fixed');
    }
    else if (scrolled > 0 && scrolled < 25) {
        gegevens.classList.add('een');
        gegevens.classList.remove('twee');
        gegevens.classList.remove('drie');
        gegevens.classList.remove('vier');
    }
    else if (scrolled > 26 && scrolled < 50) {
        gegevens.classList.remove('een');
        gegevens.classList.add('twee');
        gegevens.classList.remove('drie');
        gegevens.classList.remove('vier');
    }
    else if (scrolled > 51 && scrolled < 75) {
        gegevens.classList.remove('een');
        gegevens.classList.remove('twee');
        gegevens.classList.add('drie');
        gegevens.classList.remove('vier');
    }
    else if (scrolled > 76 && scrolled < 100)  {
        gegevens.classList.remove('een');
        gegevens.classList.remove('twee');
        gegevens.classList.remove('drie');
        gegevens.classList.add('vier');
    }
    document.querySelector('progress').value = scrolled;
    return scrolled;
};