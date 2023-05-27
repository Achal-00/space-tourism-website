const newWidth = screen.width;
const tech1 = document.getElementById("tech-1");
const tech2 = document.getElementById("tech-2");
const tech3 = document.getElementById("tech-3");
if (newWidth >= 319 && newWidth <= 1024) {
    document.getElementById("tech-1").addEventListener("click", () => {
        tech1.style.backgroundColor = "#fff";
        tech1.style.color = "#000";
        tech1.style.border = "0.1px solid #fff";
        tech2.style.backgroundColor = "transparent";
        tech2.style.color = "#fff";
        tech2.style.border = "0.1px solid dimgrey";
        tech3.style.backgroundColor = "transparent";
        tech3.style.color = "#fff";
        tech3.style.border = "0.1px solid dimgrey";
        document.querySelector(".technology .tech-wrapper .tech-image").src = "images/technology/image-launch-vehicle-landscape.jpg";
        document.querySelector(".technology .tech-wrapper .tech-head").textContent = "LAUNCH VEHICLE";
        document.querySelector(".technology .tech-wrapper .tech-data").textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    });

    document.getElementById("tech-2").addEventListener("click", () => {
        tech2.style.backgroundColor = "#fff";
        tech2.style.color = "#000";
        tech2.style.border = "0.1px solid #fff";
        tech1.style.backgroundColor = "transparent";
        tech1.style.color = "#fff";
        tech1.style.border = "0.1px solid dimgrey";
        tech3.style.backgroundColor = "transparent";
        tech3.style.color = "#fff";
        tech3.style.border = "0.1px solid dimgrey";
        document.querySelector(".technology .tech-wrapper .tech-image").src = "images/technology/image-spaceport-landscape.jpg";
        document.querySelector(".technology .tech-wrapper .tech-head").textContent = "SPACEPORT";
        document.querySelector(".technology .tech-wrapper .tech-data").textContent = "A spaceport or cosmodrome is a site for launching (or recieving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.";
    });

    document.getElementById("tech-3").addEventListener("click", () => {
        tech3.style.backgroundColor = "#fff";
        tech3.style.color = "#000";
        tech3.style.border = "0.1px solid #fff";
        tech1.style.backgroundColor = "transparent";
        tech1.style.color = "#fff";
        tech1.style.border = "0.1px solid dimgrey";
        tech2.style.backgroundColor = "transparent";
        tech2.style.color = "#fff";
        tech2.style.border = "0.1px solid dimgrey";
        document.querySelector(".technology .tech-wrapper .tech-image").src = "images/technology/image-space-capsule-landscape.jpg";
        document.querySelector(".technology .tech-wrapper .tech-head").textContent = "SPACE CAPSULE";
        document.querySelector(".technology .tech-wrapper .tech-data").textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activites to keep you entertained.";
    });
} else if (newWidth > 1024) {
    document.querySelector(".technology .tech-wrapper .tech-image").src = "images/technology/image-launch-vehicle-portrait.jpg";

    document.getElementById("tech-1").addEventListener("click", () => {
        tech1.style.backgroundColor = "#fff";
        tech1.style.color = "#000";
        tech1.style.border = "0.1px solid #fff";
        tech2.style.backgroundColor = "transparent";
        tech2.style.color = "#fff";
        tech2.style.border = "0.1px solid dimgrey";
        tech3.style.backgroundColor = "transparent";
        tech3.style.color = "#fff";
        tech3.style.border = "0.1px solid dimgrey";
        document.querySelector(".technology .tech-wrapper .tech-image").src = "images/technology/image-launch-vehicle-portrait.jpg";
        document.querySelector(".technology .tech-wrapper .tech-head").textContent = "LAUNCH VEHICLE";
        document.querySelector(".technology .tech-wrapper .tech-data").textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    });

    document.getElementById("tech-2").addEventListener("click", () => {
        tech2.style.backgroundColor = "#fff";
        tech2.style.color = "#000";
        tech2.style.border = "0.1px solid #fff";
        tech1.style.backgroundColor = "transparent";
        tech1.style.color = "#fff";
        tech1.style.border = "0.1px solid dimgrey";
        tech3.style.backgroundColor = "transparent";
        tech3.style.color = "#fff";
        tech3.style.border = "0.1px solid dimgrey";
        document.querySelector(".technology .tech-wrapper .tech-image").src = "images/technology/image-spaceport-portrait.jpg";
        document.querySelector(".technology .tech-wrapper .tech-head").textContent = "SPACEPORT";
        document.querySelector(".technology .tech-wrapper .tech-data").textContent = "A spaceport or cosmodrome is a site for launching (or recieving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.";
    });

    document.getElementById("tech-3").addEventListener("click", () => {
        tech3.style.backgroundColor = "#fff";
        tech3.style.color = "#000";
        tech3.style.border = "0.1px solid #fff";
        tech1.style.backgroundColor = "transparent";
        tech1.style.color = "#fff";
        tech1.style.border = "0.1px solid dimgrey";
        tech2.style.backgroundColor = "transparent";
        tech2.style.color = "#fff";
        tech2.style.border = "0.1px solid dimgrey";
        document.querySelector(".technology .tech-wrapper .tech-image").src = "images/technology/image-space-capsule-portrait.jpg";
        document.querySelector(".technology .tech-wrapper .tech-head").textContent = "SPACE CAPSULE";
        document.querySelector(".technology .tech-wrapper .tech-data").textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activites to keep you entertained.";
    });
} else {
    alert("Something went wrong!!");
}
