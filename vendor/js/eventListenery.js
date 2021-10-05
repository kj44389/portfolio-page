(() => {

    // hide menu on X or clicling out of menu
    window.addEventListener("click", (event) => {
        let btn = document.querySelector('#menu-btn');
        let label = document.querySelector('label[for="menu-btn"]');
        let navlist = document.querySelector('.nav-list');

        if (event.target === document.querySelector(".fa-times")) {
            btn.classList.remove('checked');

        }
        else if (event.target !== btn && event.target !== label && event.target !== navlist) {
            btn.classList.remove('checked');

        }
           
       
   }, true)
    
    // show menu
    document.querySelector('label[for="menu-btn"]').addEventListener('click', (event) => {
        if (event.target !== document.querySelector(".fa-times")) {
            document.querySelector('#menu-btn').classList.add('checked')
        }
    })

    
 })();