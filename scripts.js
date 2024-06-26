function zegar() {
    var data = new Date();
    var godzina = data.getHours();
    var min = data.getMinutes();
    var sek = data.getSeconds();
    var terazjest = "" + godzina +
        ((min < 10) ? ":0" : ":") + min +
        ((sek < 10) ? ":0" : ":") + sek;
    document.getElementById("f1").czas.value = terazjest;
    setTimeout("zegar()", 1000);
}
zegar();

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let backToTopBtn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
