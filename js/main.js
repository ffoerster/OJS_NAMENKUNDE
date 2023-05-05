// create a div on load
const scrollToTop = async () => {
    const div = document.createElement('div');
    div.id = 'scrollToTop';
    document.body.appendChild(div);
}

const scrollToTopEvent = () => {
    document.getElementById('scrollToTop').addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
    window.addEventListener('scroll', () => {
        const div = document.getElementById('scrollToTop');
        if (window.pageYOffset > 0) {
            div.classList.add('is-visible');
        } else {
            div.classList.remove('is-visible');
        }
    });
}

// add event listener
window.addEventListener('load', () => {
    scrollToTop().then(() => {
        scrollToTopEvent();
    });
});

// show scrollToTop once user has reached end of page


// scroll to top on click


