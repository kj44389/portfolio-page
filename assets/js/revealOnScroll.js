class scrollReveal {
    constructor() {}
    reveal({
        element: element,
        delay: delay = 300,
        duration: duration = 300,
        easing: easing = ' ease-in-out',
        distance: distance = 200,
        origin: origin = 'left',
        interval: interval = 0,
    }) {
        const el = document.querySelectorAll(element);
        let observer = new IntersectionObserver(this.execute,{
            root: document.querySelector('.container'),
            rootMargin: '0px',
            threshold: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
        });
        let i = 0;
        el.forEach((tmp) => {
            tmp.dataset.transform = tmp.style.transform;
            this.prepare(tmp, delay, duration, easing, distance, origin, interval, i++);
            observer.observe(tmp);
        });
    }

    execute(entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.transform = entry.target.dataset.transform;
                entry.target.style.webkitTransform = entry.target.dataset.transform;
                entry.target.style.opacity = 1;
                entry.target.style.visibility = 'visible';
                observer.unobserve(entry.target);
                delete entry.target.dataset.transform;
            }
        });
    }

    prepare(el, delay, duration, easing, distance, origin, interval, i) {
        delay += (interval*i);
        el.style.transition = `all ${duration}ms ${easing} ${delay}ms`;
        el.style.webkitTransition = `all ${duration}ms ${easing} ${delay}ms`;
        el.style.opacity = 0;
        el.style.visibility = 'hidden';

        switch (origin) {
            case 'left':
                el.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,-${distance},0,0,1) translateX(-50%)`;
                el.style.webkitTransform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,-${distance},0,0,1) translateX(-50%)`;
                break;
            case 'right':
                el.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distance},0,0,1) translateX(50%)`;
                el.style.webkitTransform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distance},0,0,1) translateX(50%)`;
                break;
            case 'top':
                el.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,${distance},0,1) translateY(50%)`;
                el.style.webkitTransform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,${distance},0,1) translateY(50%)`;
                break;
            case 'bottom':
                el.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-${distance},0,1) translateY(-50%)`;
                el.style.webkitTransform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-${distance},0,1) translateY(-50%)`;
                break;
        }
    }
}
;(() => {
         document.addEventListener('DOMContentLoaded', () => {
                  // SCROLL REVEAL
                  window.sr = new scrollReveal()
                  //about me
                  sr.reveal({element: '.about-me-headline', delay : 300, duration : 400, distance : 50, origin: 'top'})
                  sr.reveal({element: '.about-me-text', delay : 400, duration : 400, distance : 50, origin: 'left'})
                  sr.reveal({element: '.about-me-image', delay : 300, duration : 400, distance : 50, origin: 'left'})
                  //skills
                  sr.reveal({element: '.skills-header', delay : 200, duration : 400, distance : 50, origin: 'top'})
                  sr.reveal({element: '.skills-level-header', delay : 300, duration : 400, distance : 50, origin: 'top'})
                  sr.reveal({element: '.skill', delay : 400, duration : 400, distance : 50, origin: 'left', interval: 60})
                  //projects
                  sr.reveal({element: '.projects-header', delay : 200, duration : 400, distance : 50, origin: 'top'})
                  sr.reveal({element: '.project', delay : 400, duration : 400, distance : 50, origin: 'left', interval: 60})
                  //contact
                  sr.reveal({element: '.contact-header', delay : 200, duration : 400, distance : 50, origin: 'top'})
                  sr.reveal({element: '.form-inputs', delay : 400, duration : 400, distance : 50, origin: 'left'})
                  sr.reveal({element: '.input-group > label', delay : 400, duration : 400, distance : 50, origin: 'left'})
                  sr.reveal({element: '#form-submit', delay : 400, duration : 400, distance : 50, origin: 'left'})
         })
})()
