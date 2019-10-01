

const EXTERNAL_API = 'https://www.horoscopes-and-astrology.com/json'
const OUR_HOROSCOPE_API = 'http://localhost:3000/signs'
const MERCURY_API = 'https://mercuryretrogradeapi.com/'
const horoscopeList = document.getElementById('horoscope-list');
const formSubmit = document.getElementById("main-form");

const taurus_picture = './images/taurus_constellation.png'
const aquaris_picture = ''

// Mercury API & Functions
fetch(MERCURY_API)
.then(resp => resp.json())
.then(data => isMercuryRetro(data))

function isMercuryRetro(data) {
    const retroContainer = document.getElementById('retro');
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
            createHoroscopeElements(sign, usersSign)
            fetch(EXTERNAL_API)
            .then(resp => resp.json())
            .then(horoscopes => getDailyHoroscope(horoscopes, usersSign, sign))
        }
    })
}

function getDailyHoroscope(horoscopes, usersSign, sign) {
    for( var key in horoscopes.dailyhoroscope) {
        if(key == usersSign) {
            let dailyHoroscope = horoscopes.dailyhoroscope[key].split('<a href=', 1);
            let yourSignContainer = document.getElementById('your-sign');
            yourSignContainer.append(dailyHoroscope)

        }
    }
}

function  createHoroscopeElements(sign, usersSign) {
    let horoscopeImageContainer = document.getElementById('constellation-image')
    let horoscopeImage = document.createElement('img')
    horoscopeImage.setAttribute('src', `${usersSign.toLowerCase()}_picture`)

    let horoscopeName = document.createElement('h3')
    horoscopeName.innerText = usersSign
    
    let yourSignContainer = document.getElementById('your-sign');
    yourSignContainer.append(horoscopeName)
    horoscopeImageContainer.append(horoscopeImage)
}

