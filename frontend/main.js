const aboutDiv = document.getElementById("aboutDiv");
const experienceDiv = document.getElementById("experienceDiv");
const projectsDiv = document.getElementById("projectsDiv");

document.getElementById('#gotoAbout').addEventListener("click", () => {
    aboutDiv.style.boxShadow = "5px 5px 8px 10px #554464b6";
    experienceDiv.style.boxShadow = "none";
    projectsDiv.style.boxShadow = "none";
});

document.getElementById('#gotoExperience').addEventListener("click", () => {
    aboutDiv.style.boxShadow = "none";
    experienceDiv.style.boxShadow = "5px 5px 8px 10px #554464b6";
    projectsDiv.style.boxShadow = "none";
});

document.getElementById('#gotoProjects').addEventListener("click", () => {
    aboutDiv.style.boxShadow = "none";
    experienceDiv.style.boxShadow = "none";
    projectsDiv.style.boxShadow = "5px 5px 8px 10px #554464b6";    
});
