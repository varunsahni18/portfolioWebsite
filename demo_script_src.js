function myFunction() {
    console.log("Testing Click")
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
};