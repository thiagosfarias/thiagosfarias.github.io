function agrotools(){
    window.open('https://agrotools.com.br/')
}

function ifma(){
    window.open('https://portal.ifma.edu.br/');
}


const user = document.querySelector('.user');
const info = document.querySelector('.info');
const img = document.querySelector('.profile-pic');

user.addEventListener("mouseenter", e => {
    info.style.display = 'block'
    img.style.width = "8rem"
    img.style.height = "8rem"
    img.style.opacity = "0"
})

user.addEventListener("mouseleave", e => {
    console.log('leave');
    info.style.display = 'none'
    img.style.width = "10rem"
    img.style.height = "10rem"
    img.style.opacity = "1"

})




