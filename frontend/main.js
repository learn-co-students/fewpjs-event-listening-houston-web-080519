
const EXTERNAL_API = 'https://www.horoscopes-and-astrology.com/json'
const OUR_HOROSCOPE_API = 'http://localhost:3000/signs'
const MERCURY_API = 'https://mercuryretrogradeapi.com/'
const horoscopeList = document.getElementById('horoscope-list');
const formSubmit = document.getElementById("horoscope-form");


document.addEventListener("DOMContentLoaded", function(e) {
})

// Mercury API & Functions
fetch(MERCURY_API)
.then(resp => resp.json())
.then(data => isMercuryRetro(data))

function isMercuryRetro(data) {
    const retroContainer = document.getElementById('container-5-retrograde');
    if(data.is_retrograde == true) {
        let yes = document.createElement('p');
        yes.innerText = "YES!"
        retroContainer.append(yes);
    } else {
        let no = document.createElement('p');
        no.innerText = "NO!"
        retroContainer.append(no);
    }
}
// Horoscope API's and functions
fetch(EXTERNAL_API)
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
    document.getElementById('horoscope-form').reset()
})

function convertUserBirthday(data) {
    if(data.year.value!= 2019) {
        data.year.value= 2019
    } 
    const usersBirthday = new Date(`${data.year.value}-${data.month.value}-${data.day.value}`)
    var cutOff = new Date('Tue Jan 19 2019 18:00:00 GMT-0600')
    if(usersBirthday <= cutOff) {
        usersBirthday.setFullYear(2020)
    }
    fetch(OUR_HOROSCOPE_API)
    .then(resp => resp.json())
    .then(signs => checkDates(signs, usersBirthday))
}

function checkDates(signs, usersBirthday) {
    signs.forEach(sign => {
        var startDate = new Date(`${sign.start_date}`);
        var endDate = new Date(`${sign.end_date}`);

        startDate.toDateString();
        endDate.toDateString();
        usersBirthday.toDateString();
        if(usersBirthday >= startDate && usersBirthday <= endDate) {
            let usersSign = sign.title;
            clearContainers()
            createHoroscopeImage(usersSign)
            addHoroscopeInfo(usersSign)
            fetch(EXTERNAL_API)
            .then(resp => resp.json())
            .then(horoscopes => getDailyHoroscope(horoscopes, usersSign, sign))
        }
    })
}

function getDailyHoroscope(horoscopes, usersSign) {
    for( var key in horoscopes.dailyhoroscope) {
        if(key == usersSign) {
            let horoscopeQuote = "Daily Horoscope: " + horoscopes.dailyhoroscope[key].split('<a href=', 1);
            let yourSignContainer = document.getElementById('content-container');
            
            let horoscopeDates = document.createElement('p')
            horoscopeDates.innerText = horoscopes.dates[key];

            yourSignContainer.append(horoscopeDates)
            yourSignContainer.append(horoscopeQuote)
        }
    }
}

function clearContainers() {
    let imageContainer = document.getElementById('container-9-zodiac-image')
    let titleContainer = document.getElementById('title-container')
    let contentContainer = document.getElementById('content-container')

    let containerArray = [imageContainer, titleContainer, contentContainer]
    containerArray.forEach(container => {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
    })
}

function  createHoroscopeImage(usersSign) {
    let imageContainer = document.getElementById('container-9-zodiac-image')
    let horoscopeImage = document.createElement('img')
    horoscopeImage.setAttribute('src', `./images/${usersSign.toLowerCase()}_constellation.png`)
    horoscopeImage.width = '250'
    horoscopeImage.heigh = '250'
    imageContainer.append(horoscopeImage)
}


function addHoroscopeInfo(usersSign) {
    let titleContainer = document.getElementById('title-container')
    let horoscopeTitle = document.createElement('h3')
    horoscopeTitle.innerText = "Your Sign: " + usersSign

    titleContainer.append(horoscopeTitle)
}