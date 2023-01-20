const slider = document.getElementById('slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

console.log(document.querySelectorAll('.slider__section')[0]);

function Next() {
    let sliderSectionFirts = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirts);
        slider.style.marginLeft = '-100%';
    }, 500);
}
function Prev() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}


let next = setInterval(() => {
    Next();
}, 5000)

btnRight.addEventListener('click', () => {
    Next();
})
btnLeft.addEventListener('click', () => {
    Prev();
})
