const asciiArt = `
__                      __
.-'  \`'.._...-----..._..-'\`  '-.
/                                \\
|  ,   ,'                '.   ,  |
\\  '-/                    \\-'  /
'._|          _           |_.'
|    /\\   / \\    /\\    |
|    \\/   | |    \\/    |
\\        \\"/         /
'.    =='^'==     .'
\`'------------'\`
`;

const asciiArtContainer = document.getElementById('ascii-art');
const aboutme = document.getElementById('aboutme');

const sections = [
    document.getElementById('introduction'),
    document.getElementById('about-me')
];

asciiArtContainer.innerText = asciiArt;
aboutme.onclick = () => {
    const aboutme = sections[1];
    sections.forEach(element => {
        if (element != aboutme)
            element.hidden = true;
        else
            element.hidden = false;
    });
}