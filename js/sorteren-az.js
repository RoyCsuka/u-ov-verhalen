var knop = document.querySelector('button[value="volgorde"]');
var plaatjeSource = document.querySelector('button[value="volgorde"] img');

knop.addEventListener('click', function(){
    plaatjeSource.src="./img/icons/sort-z-a.svg";
})