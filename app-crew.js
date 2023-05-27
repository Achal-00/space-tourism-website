document.getElementById("crew-1").addEventListener("click", () => {
    document.getElementById("crew-1").style.backgroundColor = "#fff";
    document.getElementById("crew-2").style.backgroundColor = "dimgrey";
    document.getElementById("crew-3").style.backgroundColor = "dimgrey";
    document.getElementById("crew-4").style.backgroundColor = "dimgrey";
    document.querySelector(".crew .left .crew-details .crew-ranking").textContent = "COMMANDER";
    document.querySelector(".crew .left .crew-details .crew-name").textContent = "DOUGLAS HURLEY";
    document.querySelector(".crew .left .crew-details .crew-content").textContent = "Douglas Gerald Hurley is an american engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as a commander of Crew Dragon Demo-2.";
    document.querySelector(".crew .right .crew-image").src = "images/crew/image-douglas-hurley.webp";
});

document.getElementById("crew-2").addEventListener("click", () => {
    document.getElementById("crew-1").style.backgroundColor = "dimgrey";
    document.getElementById("crew-2").style.backgroundColor = "#fff";
    document.getElementById("crew-3").style.backgroundColor = "dimgrey";
    document.getElementById("crew-4").style.backgroundColor = "dimgrey";
    document.querySelector(".crew .left .crew-details .crew-ranking").textContent = "MISSION SPECIALIST";
    document.querySelector(".crew .left .crew-details .crew-name").textContent = "MARK SHUTTLEWORTH";
    document.querySelector(".crew .left .crew-details .crew-content").textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    document.querySelector(".crew .right .crew-image").src = "images/crew/image-mark-shuttleworth.webp";
});

document.getElementById("crew-3").addEventListener("click", () => {
    document.getElementById("crew-1").style.backgroundColor = "dimgrey";
    document.getElementById("crew-2").style.backgroundColor = "dimgrey";
    document.getElementById("crew-3").style.backgroundColor = "#fff";
    document.getElementById("crew-4").style.backgroundColor = "dimgrey";
    document.querySelector(".crew .left .crew-details .crew-ranking").textContent = "PILOT";
    document.querySelector(".crew .left .crew-details .crew-name").textContent = "VICTOR GLOVER";
    document.querySelector(".crew .left .crew-details .crew-content").textContent = "Pilot on the first operational flight of the spaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    document.querySelector(".crew .right .crew-image").src = "images/crew/image-victor-glover.webp";
});

document.getElementById("crew-4").addEventListener("click", () => {
    document.getElementById("crew-1").style.backgroundColor = "dimgrey";
    document.getElementById("crew-2").style.backgroundColor = "dimgrey";
    document.getElementById("crew-3").style.backgroundColor = "dimgrey";
    document.getElementById("crew-4").style.backgroundColor = "#fff";
    document.querySelector(".crew .left .crew-details .crew-ranking").textContent = "FLIGHT ENGINEER";
    document.querySelector(".crew .left .crew-details .crew-name").textContent = "ANOUSHEH ANSARI";
    document.querySelector(".crew .left .crew-details .crew-content").textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    document.querySelector(".crew .right .crew-image").src = "images/crew/image-anousheh-ansari.webp";
});
