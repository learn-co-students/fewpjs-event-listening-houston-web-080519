
const BASE_URL = 'https://www.horoscopes-and-astrology.com/json'
const horoscopeList = document.getElementById('horoscope-list');
const formSubmit = document.getElementById("main-form");

fetch(BASE_URL)
.then(resp => resp.json())
.then(horoscopes => getAllHoroscopes(horoscopes))

function getAllHoroscopes(horoscopes) {
    addHoroscopeToPage(horoscopes)
    console.log(horoscopes)
}

function addHoroscopeToPage(horoscopes) {
    for(let i = 0; i < horoscopes.titles.length; i++) {
        let titleH = document.createElement('li');
        titleH.innerText = horoscopes.titles[i];

        horoscopeList.append(titleH)

    }
}

formSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    convertUserBirthday(e.target)
})

function convertUserBirthday(data) {
    if(data.year.value!= 2019) {
        data.year.value= 2019
    }
    fetch("http://localhost:3000/signs")
    .then(resp => resp.json())
    .then(signs => function(signs) {
        console.log(signs)
    })
}


document.addEventListener("DOMContentLoaded", function(e) { 
})




