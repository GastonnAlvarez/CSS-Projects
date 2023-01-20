// entries: Es un objeto que dentro tiene info del elemento dado
/*
boundingClientReact: Me muestra informacion del objeto que estoy observando en este caso la div.

insersectionRatio: 1, me muestra el threshold.

insersectionReact: 

isIntersection: Si esta en true es porque hay una inserseccion, si no es false, para que cambie su boleano depende del threshold.

target: Representa el elemento que esta observando.
*/
function callback(entries) {
    entries.forEach((entry) => {
        console.log(entry);
    });
}

const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0
}


const observer = new IntersectionObserver(callback, options);
const element = document.querySelector('.element');

observer.observe(element);

// rootMargin: Amplia la visibilidad, si esta en 0, quiere decir que debo ver el elemento. Pero si tengo 10px, del elemento 10px veria el elemento
// threshold: Cada vez que yo observe mi 'element' que es la div, se activa la callback. Como esta en 0, al solo ver el elemento se activa la funcion
// Si le agrego 0.25, estaria diciendo que necesito observar el 25% de mi element para que se active la funcion.


