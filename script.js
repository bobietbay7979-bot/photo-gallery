function upDate(previewPic) {
    console.log("The upDate event was triggered.");
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("The unDo event was triggered.");

    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
