// Déclaration de la variable countDownDate, variable a portée limitée à celle du  block ou elle est déclarée
let countDownDate = new Date("June 1, 2025 08:00:00")

let x = setInterval(function() {
// Ici sera déclaré toutes les variables pour le countdown
let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000*60*60*24));
let hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60));
let minutes = Math.floor(distance % (1000*60*60) / (1000*60));
let seconds = Math.floor(distance % (1000*60) / (1000));
// Vérification dans la console que les variables fonctionnent correctement
// console.log(days, hours, minutes, seconds)

// Ce qui se trouve dans #id-time_countdown va venir ici cette partie de l'html sera créer via la js
document.querySelector("#time_countdown").innerHTML = `
    <div class="time-box">
        <div class="time-box-inner">
            <span class="time-number">
                <span class="digit">${days}</span>
            </span>
            <span class="time-name">Jours</span>
        </div>
    </div>
    <div class="time-box">
        <div class="time-box-inner">
            <span class="time-number">
                <span class="digit">${hours}</span>
            </span>
            <span class="time-name">H</span>
        </div>
    </div>
    <div class="time-box">
        <div class="time-box-inner">
            <span class="time-number">
                <span class="digit">${minutes}</span>
            </span>
            <span class="time-name">Minutes</span>
        </div>
    </div>
    <div class="time-box">
        <div class="time-box-inner">
            <span class="time-number">
                <span class="digit">${seconds}</span>
            </span>
            <span class="time-name">Secondes</span>
        </div>
    </div>

`

}, 1000);