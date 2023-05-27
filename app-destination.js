document.getElementById("moon-btn").addEventListener("click", () => {
    document.getElementById("moon-btn").style.borderBottom = "3px solid #fff";
    document.getElementById("mars-btn").style.borderBottom = "none";
    document.getElementById("europa-btn").style.borderBottom = "none";
    document.getElementById("titan-btn").style.borderBottom = "none";
    document.getElementById("destination-image").src = "images/destination/image-moon.png";
    document.getElementById("destination-heading").textContent = "MOON";
    document.getElementById("destination-content").textContent = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you've there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    document.getElementById("destination-avg-dist-cont").textContent = "384,400 KM";
    document.getElementById("destination-time-cont").textContent = "3 DAYS";
});

document.getElementById("mars-btn").addEventListener("click", () => {
    document.getElementById("mars-btn").style.borderBottom = "3px solid #fff";
    document.getElementById("moon-btn").style.borderBottom = "none";
    document.getElementById("europa-btn").style.borderBottom = "none";
    document.getElementById("titan-btn").style.borderBottom = "none";
    document.getElementById("destination-image").src = "images/destination/image-mars.png";
    document.getElementById("destination-heading").textContent = "MARS";
    document.getElementById("destination-content").textContent = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
    document.getElementById("destination-avg-dist-cont").textContent = "225 ML KM";
    document.getElementById("destination-time-cont").textContent = "9 MONTHS";
});

document.getElementById("europa-btn").addEventListener("click", () => {
    document.getElementById("europa-btn").style.borderBottom = "3px solid #fff";
    document.getElementById("moon-btn").style.borderBottom = "none";
    document.getElementById("mars-btn").style.borderBottom = "none";
    document.getElementById("titan-btn").style.borderBottom = "none";
    document.getElementById("destination-image").src = "images/destination/image-europa.png";
    document.getElementById("destination-heading").textContent = "EUROPA";
    document.getElementById("destination-content").textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    document.getElementById("destination-avg-dist-cont").textContent = "628 ML KM";
    document.getElementById("destination-time-cont").textContent = "3 YEARS";
});

document.getElementById("titan-btn").addEventListener("click", () => {
    document.getElementById("titan-btn").style.borderBottom = "3px solid #fff";
    document.getElementById("moon-btn").style.borderBottom = "none";
    document.getElementById("mars-btn").style.borderBottom = "none";
    document.getElementById("europa-btn").style.borderBottom = "none";
    document.getElementById("destination-image").src = "images/destination/image-titan.png";
    document.getElementById("destination-heading").textContent = "TITAN";
    document.getElementById("destination-content").textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    document.getElementById("destination-avg-dist-cont").textContent = "1.6 BIL. KM";
    document.getElementById("destination-time-cont").textContent = "7 YEARS";
});
