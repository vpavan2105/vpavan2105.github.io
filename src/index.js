const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar-inner");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-btn").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


function openResume(resumeUrl) {
    // Open resume in a new tab
    window.open(resumeUrl, '_blank');

    // Download resume as PDF
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

