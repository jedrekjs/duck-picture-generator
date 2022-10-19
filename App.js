var imgContainer = document.getElementById("duck-img");
async function getImg(){
    return await fetch("https://thawing-crag-96552.herokuapp.com/https://random-d.uk/api/random")
        .then((res) => res.json())
        .then((data) => data.url)
}

async function changeImg(){
    const imgSrc = await getImg();
    imgContainer.src = imgSrc;
}

window.onload = changeImg();