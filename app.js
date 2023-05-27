const url = window.location.href;
const width = screen.width;
const result = url.substring(url.lastIndexOf('/') + 1);
if (width >= 319 && width <= 480) {
    document.getElementById("hamburger-menu").addEventListener("click", () => {
        document.getElementById("main-nav").classList.toggle("hide-show");
        if (document.getElementById("main-nav").classList.contains("hide-show")) {
            document.getElementById("hamburger-menu").style.backgroundImage = "url('images/shared/icon-close.svg')";
            let items = document.querySelector("#main-nav").children;
            Array.from(items).forEach(function (child) {
                child.style.display = "block";
            });
        } else {
            document.getElementById("hamburger-menu").style.backgroundImage = "url('images/shared/icon-hamburger.svg')";
            let items = document.querySelector("#main-nav").children;
            Array.from(items).forEach(function (child) {
                child.style.display = "none";
            });
        }
    });

    switch (result) {
        case "index.html":
            document.getElementById("home").style.borderRight = "3px solid #fff";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/home/background-home-mobile.jpg')";
            break;
        case "destination.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderRight = "3px solid #fff";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/destination/background-destination-mobile.jpg')";
            break;
        case "crew.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderRight = "3px solid #fff";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/crew/background-crew-mobile.jpg')";
            break;
        case "technology.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderRight = "3px solid #fff";
            document.getElementById("body").style.backgroundImage = "url('images/technology/background-technology-mobile.jpg')";
            break;
    }


} else if (width >= 481 && width <= 1023) {

    switch (result) {
        case "index.html":
            document.getElementById("home").style.borderBottom = "3px solid #fff";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/home/background-home-tablet.jpg')";
            break;
        case "destination.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "3px solid #fff";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/destination/background-destination-tablet.jpg')";
            break;
        case "crew.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "3px solid #fff";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/crew/background-crew-tablet.jpg')";
            break;
        case "technology.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "3px solid #fff";
            document.getElementById("body").style.backgroundImage = "url('images/technology/background-technology-tablet.jpg')";
            break;
    }

} else if (width >= 1024 && width <= 1599) {

    switch (result) {
        case "index.html":
            document.getElementById("home").style.borderBottom = "3px solid #fff";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/home/background-home-desktop.jpg')";
            break;
        case "destination.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "3px solid #fff";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/destination/background-destination-desktop.jpg')";
            break;
        case "crew.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "3px solid #fff";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/crew/background-crew-desktop.jpg')";
            break;
        case "technology.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "3px solid #fff";
            document.getElementById("body").style.backgroundImage = "url('images/technology/background-technology-desktop.jpg')";
            break;
    }

} else if (width > 1600) {

    switch (result) {
        case "index.html":
            document.getElementById("home").style.borderBottom = "3px solid #fff";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/home/background-home-desktop.jpg')";
            break;
        case "destination.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "3px solid #fff";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/destination/background-destination-desktop.jpg')";
            break;
        case "crew.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "3px solid #fff";
            document.getElementById("technology").style.borderBottom = "none";
            document.getElementById("body").style.backgroundImage = "url('images/crew/background-crew-desktop.jpg')";
            break;
        case "technology.html":
            document.getElementById("home").style.borderBottom = "none";
            document.getElementById("destination").style.borderBottom = "none";
            document.getElementById("crew").style.borderBottom = "none";
            document.getElementById("technology").style.borderBottom = "3px solid #fff";
            document.getElementById("body").style.backgroundImage = "url('images/technology/background-technology-desktop.jpg')";
            break;
    }

} else {
    alert("screen size is too small");
}

document.getElementById("explore-btn").addEventListener("click", () => {
    let newUrl = url.slice(0, url.lastIndexOf('/'));
    location.replace(newUrl + "/destination.html");
});
