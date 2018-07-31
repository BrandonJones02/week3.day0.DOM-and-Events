function onClick() {
    alert("You have been spotted")
    document.querySelector("img").src = "assets/rengar.png"
}

document.addEventListener('click', onClick);