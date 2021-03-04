// mo
const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')


container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY)  /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(150px)'
    description.style.transform = 'translateZ(120px)'
    sizes.style.transform = 'translateZ(100px)'
    purchase.style.transform = 'translateZ(75px)'
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)' 
});

container.addEventListener('mouseleave', e => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    card.style.transition = 'all 0.5s ease';
    title.style.transform = 'translateZ(0px)'
    description.style.transform = 'translateZ(0px)'
    sizes.style.transform = 'translateZ(0px)'
    purchase.style.transform = 'translateZ(0px)'
    sneaker.style.transform = 'translateZ(0px) rotate(0deg)'
});





