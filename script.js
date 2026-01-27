const btn1 = document.getElementById("view_geoJSON");
const btn2 = document.getElementById("view_portfolio");
const btn3 = document.getElementById("learn_more");

btn1.addEventListener("click", () => {
    // Consulted this resource:
    // https://stackoverflow.com/questions/6303964/javascript-open-a-given-url-in-a-new-tab-by-clicking-a-button
    window.open("./cities.geojson", "_blank")
})

btn2.addEventListener("click", () => {
    window.open("https://samanthakyle.github.io/", "_blank")
})

btn3.addEventListener("click", () => {
    window.open("learnmore.html", "_blank")
})
