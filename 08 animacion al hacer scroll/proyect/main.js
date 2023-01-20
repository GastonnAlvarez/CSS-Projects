const heroFigure = document.querySelectorAll('.hero__figure');

function triggerAnimation(entries) {
    entries.forEach((entry)=>{
        const img = entry.target.querySelector('img');
        console.log(entry.isIntersecting);

        img.classList.toggle('unset', entry.isIntersecting);
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
}

const observer = new IntersectionObserver(triggerAnimation, options);

heroFigure.forEach((img) => {
    observer.observe(img);
});