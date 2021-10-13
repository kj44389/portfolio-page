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


    //on scroll fill progress bar
    document.querySelector('.container').addEventListener('scroll', (event) => {

        let scrollHeight = document.querySelector('.container').scrollHeight;
        let scrollPos = document.querySelector('.container').scrollTop;

        let value = (scrollPos / (scrollHeight - window.innerHeight)).toFixed(2) * 100;
        let points = document.querySelectorAll('.scroll-point');
        if (value >= 0 && value <= 18) {
            points[0].classList.add('point-active')
            points[1].classList.remove('point-active');
        }
        else if (value >= 19 && value <= 43) {
            points[1].classList.add('point-active')
            points[2].classList.remove('point-active');
        }
        else if (value >= 44 && value <= 78) {
            points[2].classList.add('point-active')
            points[3].classList.remove('point-active');
        }
        else if (value >= 79 && value <= 98) {
            points[3].classList.add('point-active')
            points[4].classList.remove('point-active');
        }
        else if (value >= 99 && value <= 100) {
            points[4].classList.add('point-active')
        }

        document.documentElement.style.setProperty('--scroll-height',value+"%")

    })

    
 })();