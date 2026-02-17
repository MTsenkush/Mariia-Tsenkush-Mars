// nav-bar



// Skills

const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "GIT",
    "GitHub",
    "Jira",
    ];

//adding new skills
skills.push("Confluence");

//const skillsSection = document.querySelector("#skills");
const skillsSection = document.getElementById("skills")
//console.log(skillsSection)

const skillsList = skillsSection.querySelector("ul")
//console.log(skillsList)

for (let i=0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    //console.log(skill)
    skillsList.appendChild(skill);
}

//adding new skills through DOM
const newSkill = document.createElement("li");
newSkill.innerText = "Postman";
skillsList.appendChild(newSkill);



// Footer

//If we dont have <footer> in HTML: const footer = document.createElement("footer");
//document.body.appendChild(footer);
// const thisYear=new Date().getFullYear();


const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerText = `© Mariia Tsenkush ${thisYear}`;

footer.appendChild(copyright);