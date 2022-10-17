// animations for scrolling
const intro = document.getElementById('intro');
const aboutme = document.getElementById('aboutme');
const techstack = document.getElementById('techstack');

const observer = new IntersectionObserver((entries) => {
    const element = entries[0].target;
    console.log(element);

    if (entries[0].isIntersecting) {
        element.classList.remove('remove');
        element.classList.add('insert');
    } else {
        element.classList.remove('insert');
        element.classList.add('remove');
    }
});

// cringe implementation
observer.observe(intro);
observer.observe(aboutme);
observer.observe(techstack);

// animation for text cursor
const tcursor = document.getElementById('text-cursor');
let white = false;
setInterval(() => {
    if (white) {
        tcursor.classList.remove('bg-white');
        tcursor.classList.add('bg-transparent');
        white = false;
    } else {
        tcursor.classList.remove('bg-transparent');
        tcursor.classList.add('bg-white');
        white = true;
    }
}, 500);