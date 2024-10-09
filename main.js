// Define skills array
var skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Git & GitHub"
];
// Render skills into the DOM
var skillsList = document.getElementById("skills-list");
if (skillsList) {
    skills.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}
