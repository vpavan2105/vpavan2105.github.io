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
    window.open(resumeUrl, '_blank');

    link.href = resumeUrl;
    link.id="resume-link-2"
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

