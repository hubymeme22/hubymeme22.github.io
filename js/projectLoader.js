/*
    loads all the projects to div project
*/

class Loader {
    constructor(projectDataList=[]) {
        this.projectData = projectDataList;
        if (projectDataList.length > 0)
            this.load();
    }

    addProject(title, definitions, repository) {
        if (definitions.length == 0)
            return console.error('CannotLoad Empty Definition');
        this.projectData.push({ title: title, definitions: definitions, repo: repository });
    }

    load() {
        const projectContainer = document.getElementById('card-holder');
        this.projectData.forEach(project => {
            const projectCard = document.createElement('div');
            const titleContainer = document.createElement('h2');
            const defContainer = document.createElement('div');
            const redirect = document.createElement('button');

            // set css classnames
            projectCard.className = 'project-card';
            defContainer.className = 'defcontainer';

            // sets title and redirection button
            titleContainer.innerText = project.title;
            redirect.innerText = 'visit github';
            redirect.onclick = () => {
                window.location.href = project.repo;
            };

            // sets definition
            const listContainer = document.createElement('ul');
            project.definitions.forEach(def => {
                const definition = document.createElement('li');
                definition.innerText = def;
                listContainer.appendChild(definition);
            });

            // appends definition and load to screen
            defContainer.appendChild(listContainer);
            projectCard.appendChild(titleContainer);
            projectCard.appendChild(defContainer);
            projectCard.appendChild(redirect);

            projectContainer.appendChild(projectCard);
        });
    }
}

const ProjectLoader = new Loader([
    {
        title: "Alumni App Project",
        definitions: [
            "A simple app where BSU alumni can search for jobs",
            "Can act as authenticator for alumni",
            "Works as back-end api developer",
            "tech: PHP, HTML, CSS, JS, MySQL"
        ],
        repo: "https://github.com/hubymeme22/alumni-app-project"
    },
    {
        title: "OPCR System",
        definitions: [
            "A simple system that is used for office performance commitment review form generation",
            "Can act as authenticator for alumni",
            "Works as back-end api developer, and light Front-end backlogs",
            "tech: NodeJS/ExpressJS, ReactJS"
        ],
        repo: "https://github.com/hubymeme22/BSU-OPCR-PMT-BACKEND"
    },
    {
        title: "N0LL_22",
        definitions: [
            "A simple reverse shell program",
            "Handles multiple clients via discord server",
            "tech: python discord API"
        ],
        repo: "https://github.com/hubymeme22/N0LL_22"
    },
    {
        title: "Wordle Battle API",
        definitions: [
            "A simple api that replicates wordle game but supports multiple accounts",
            "Leaderboard and scoreboards",
            "Applied design patterns",
            "tech: python flask"
        ],
        repo: "https://github.com/hubymeme22/wordleBattleAPI-py"
    },
    {
        title: "Tree reduction Algorithm",
        definitions: [
            "A Boolean Decision tree Data Structure with applied reduction algorithm",
            "Reduces the number of nodes for effecient decision making and less memory consumption",
            "tech: C++ language"
        ],
        repo: "https://github.com/hubymeme22/treeReduction"
    },
    {
        title: "Collz Enc",
        definitions: [
            "An Encryption Algorithm made by me, for lightweight but highly effecient with high avalanche effect",
            "tech: C language"
        ],
        repo: "https://github.com/hubymeme22/CollzEnc"
    },
    {
        title: "Student Violation System",
        definitions: [
            "Displays violations of BatStateU Students used in Guidance Office",
            "Works as the lead back-end developer",
            "tech: NodeJS/ExpressJS"
        ],
        repo: "https://github.com/hubymeme22/Student-Violation-System"
    }
]);