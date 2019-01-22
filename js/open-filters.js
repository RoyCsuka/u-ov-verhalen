var filterButton = document.querySelector('section button:first-of-type');
var overlayFilters = document.querySelector('div section form:first-of-type');
var terugButton = document.querySelector('div section form:first-of-type a');

filterButton.addEventListener('click', function(){
    overlayFilters.classList.add('toon-filters') /*zet class erbij of haalt er weg*/
})

terugButton.addEventListener('click', function(){
    overlayFilters.classList.remove('toon-filters') /*haalt class weg*/
})