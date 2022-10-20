const imgContainer = document.getElementById("duck-img");
const toggleButton = document.getElementById("toggle-button");
const loader = document.getElementById("loader-container");

async function getImg(){
    return await fetch("https://thawing-crag-96552.herokuapp.com/https://random-d.uk/api/random")
        .then((res) => res.json())
        .then((data) => data.url)
}

async function changeImg(){
    toggleButton.disabled = true;
    imgContainer.style.opacity = 0.2;
    loader.style.display = "block";
    const imgSrc = await getImg();
    imgContainer.src = imgSrc;
    toggleButton.disabled = false;
    imgContainer.style.opacity = 1;
    loader.style.display = "none";
}


window.onload = changeImg();