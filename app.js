//movimento do card
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector(".title");
const album = document.querySelector(".album img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const player = document.querySelector(".player");

container.addEventListener("mousemove", e =>{
    console.log(e.pageX, e.pageY)
    let xAxis = (window.innerWidth / 2 - e.pageX)/22;
    let yAxis = (window.innerWidth / 2 - e.pageY)/22;
    card.style.transform = `rotateY(${yAxis}deg) rotate(${xAxis}deg)`;
});

//moveimentando por dentro
container.addEventListener("mouseenter", e => {
    card.style.transition = "all 0.5s ease"
    card.style.transition = 'none';
    //popout
    title.style.transform = "translateZ(120px)";
    album.style.transform = "translateZ(170px)";
    description.style.transform = "translateZ(105px)";
    purchase.style.transform = "translateZ(55px)";
    player.style.transform = "translateZ(80px)";
})


//moviemntando por fora
container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.9s ease"
    card.style.transform = ` rotateY(0deg) rotateX(0deg)`
    //popback
    title.style.transform = "translateZ(0px)";
    album.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    player.style.transform = "translateZ(0px)";
})

