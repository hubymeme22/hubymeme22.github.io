const aboutmeAsciiArt = `
===================================================
           _                 _     __  __      
     /\\   | |               | |   |  \\/  |     
    /  \\  | |__   ___  _   _| |_  | \\  / | ___ 
   / /\\ \\ | '_ \\ / _ \\| | | | __| | |\\/| |/ _ \\
  / ____ \\| |_) | (_) | |_| | |_  | |  | |  __/
 /_/    \\_\\_.__/ \\___/ \\__,_|\\__| |_|  |_|\\___|

===================================================
`;

export default function triggerAboutMe() {
    const asciiArtAbtme = document.getElementById('aboutmeAscii');
    const output = document.getElementById('output');
    
    // output design
    setTimeout(() => { asciiArtAbtme.innerText = aboutmeAsciiArt; }, 1500);
    setTimeout(() => { output.innerHTML = '<b class="green">Name:</b> Hub'; }, 1800);
    setTimeout(() => { output.innerHTML += 'ert F. Espinola I<br/><br/>'; }, 2000);
    
    setTimeout(() => { output.innerHTML += '<b class="yellow">Literally about me:</b>'; }, 2000);
    setTimeout(() => {
        output.innerHTML += `
Currently a Computer Science Student that enjoys studying
and hates cramming. I do love koalas and frogs as much as
I love studying Computer Science. I do enjoy the process
of it, specially if it's analytical rather than
memorization.

My experiences are related to backend programming, specifically
the usage of express js, python flask, and making APIs. I learned
cybersecurity concepts long back then when XSS was way too OP to
be ignored. In my JHS days, I used to write malwares to prank my
brother (which is not illegal right?). I also do love making algorithms
and problem solving related to programming or math--doesn't matter
I love both.

`;
    }, 2000);

    setTimeout(() => {
        output.innerHTML += `<b class="yellow">Education:</b> BSCS | Batangas State University - Alangilan Campus<br/>
<b class="yellow">Programming Language:</b> C++, C, Python, Javascript, Java, PHP<br/>
<b class="yellow">Tech Stack:</b> MERN & LAMP<br/>
<b class="yellow">Frameworks:</b> NodeJS, ExpressJS, Flask<br/><br/>

<button class="classic-button-style">Projects</button>
`;
    }, 2300);
}
