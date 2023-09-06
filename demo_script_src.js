let isGalleryView = true;
function myFunction() {
    console.log("Testing Click")
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIV2");

    const button = document.getElementById("viewToggleBtn");

    if (isGalleryView) {
        // Switch to Slider View
        button.innerText = "Slider View";
        button.style.marginTop = "10px";
      } else {
        // Switch back to Gallery View
        button.innerText = "Gallery View";
        button.style.marginTop = "50px";
      }
  
      // Toggle the view state
      isGalleryView = !isGalleryView;


    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
};

