const themeBtn = document.querySelector('.theme-btn')
const point = document.querySelector('.point')
const bulb = document.querySelector('.down-part')

themeBtn.addEventListener('click', function (){
    document.body.classList.toggle('dark-mode')
    themeBtn.classList.toggle('dark-mode')
    point.classList.toggle('dark-mode')
    bulb.classList.toggle('dark-mode')
})

const sunX = window.innerWidth / 2 - 60;
const sunY = window.innerHeight / 2 - 60;

const sun = document.querySelector('.sun')

sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;

class Planet {
    constructor(speed, theta, radius, element) {
        this.speed = speed;
        this.theta = theta;
        this.radius = radius;
        this.element = element
    }
}

const mercury = new Planet(0.002, 0, 100, document.querySelector('.mercury'))
const venus = new Planet(0.002, 0.7, 140, document.querySelector('.venus'))
const earth = new Planet(0.002, 1.5, 160, document.querySelector('.earth'))
const mars = new Planet(0.002, 1.9, 175, document.querySelector('.mars'))
const jupiter = new Planet(0.002, 2.7, 200, document.querySelector('.jupiter'))
const saturn = new Planet(0.002, 3.3, 200, document.querySelector('.saturn'))
const uranus = new Planet(0.002, 4, 190, document.querySelector('.uranus'))
const neptune = new Planet(0.002, 5, 190, document.querySelector('.neptune'))

function rotation (Planet) {
    Planet.theta += Planet.speed
    Planet.element.style.left = `${Math.cos(Planet.theta) * Planet.radius + sunX + 60}px`
    Planet.element.style.top = `${Math.sin(Planet.theta) * Planet.radius + sunY + 60}px`
}
const planetsData = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]

setInterval(() => {
    planetsData.forEach(rotation)
}, 20)