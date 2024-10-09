// Define skills array
const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Git & GitHub"
];

// Render skills into the DOM
const skillsList = document.getElementById("skills-list");

if (skillsList) {
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}
