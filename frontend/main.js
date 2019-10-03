
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
    console.log(horoscopes)
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
            .then(horoscopes =>  {
                attachHoroscopeEventListeners(horoscopes)
                getDailyHoroscope(horoscopes, usersSign, sign)
             })
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

// main.js code for event listener for the constellation icons
fetch(EXTERNAL_API)
   .then(resp => resp.json())
   .then(horoscopes => {
       attachHoroscopeEventListeners(horoscopes)
   })
function attachHoroscopeEventListeners(horoscopes) {
   var icons = document.querySelectorAll(".constellationIcon")
   for(let i = 0; i < icons.length; i++) {
       icons[i].addEventListener('click', function() {
           console.log(this.id)
           let thisSign = this.id
           clearContainers()
           getDailyHoroscope(horoscopes, thisSign)
       })
   }
}
// End of event listener code

// Code for the stars background
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
// End of stars background code
 
