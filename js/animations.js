// animations for scrolling
const intro = document.getElementById('intro');
const aboutme = document.getElementById('aboutme');
const techstack = document.getElementById('techstack');
const jeez_arrows = document.getElementsByClassName('arrow-container');

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

for (let i = 0; i < jeez_arrows.length; i++) {
    console.log(i);
    observer.observe(jeez_arrows[i]);
}

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