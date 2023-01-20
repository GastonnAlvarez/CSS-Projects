let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach((listElement) => {
    listElement.addEventListener('click', () => {
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        // clientHeight: Me devuelve el alto que tiene un elemento
        // scrollHeight: Me dice el alto que debe tener, este alto que debe tener, esta propiedad me lo calcula dinamicamente.
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
    })
})