/*
    This file loads the interface based on which button
    is being clicked
*/

// hides intro and shows the projects
document.getElementById('redirect-project').onclick = () => {
    const introDiv = document.getElementById('intro');
    const projDiv  = document.getElementById('projects');

    introDiv.style.animation = 'fade-out 1s forwards';
    setTimeout(() => {
        introDiv.hidden = true;
    }, 400);

    setTimeout(() => {
        projDiv.hidden = false;
        projDiv.style.animation = 'fade-in 1s forwards';
    }, 500);
};

// hides projects and shows the intro
document.getElementById('redirect-intro').onclick = () => {
    const introDiv = document.getElementById('intro');
    const projDiv  = document.getElementById('projects');

    projDiv.style.animation = 'fade-out 1s forwards';
    setTimeout(() => {
        projDiv.hidden = true;
    }, 400);

    setTimeout(() => {
        introDiv.hidden = false;
        introDiv.style.animation = 'fade-in 1s forwards';
    }, 500);
};