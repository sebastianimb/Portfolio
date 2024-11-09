const liData = document.querySelectorAll("#aside-data li");
const titleBody = document.querySelector(".container-data-body .title h1");
const resumeBody = document.querySelector(".container-data-body .body-resume");
const studyBody = document.querySelector(".container-data-body .body-study");
const HobbyBody = document.querySelector(".container-data-body .body-hobby");
console.log(HobbyBody);
liData.forEach((item, index) => {
  item.addEventListener("click", function () {
    liData.forEach((i) => {
      i.classList.remove("active");
      console.log(i.id);
      if (this.id === "resumen") {
        titleBody.textContent = "Resumen";
        resumeBody.style.display = "flex";
        studyBody.style.display = "none";
        HobbyBody.style.display = "none";
      }
      if (i.id === "firts-dot" && this.id === "estudios") {
        titleBody.textContent = "Estudios";
        i.classList.add("active");
        resumeBody.style.display = "none";
        studyBody.style.display = "flex";
        HobbyBody.style.display = "none";
      }
      if (i.id === "second-dot" && this.id === "pasatiempos") {
        i.classList.add("active");
        titleBody.textContent = "Pasatiempos";
        resumeBody.style.display = "none";
        studyBody.style.display = "none";
        HobbyBody.style.display = "flex";
      }
    });
    this.classList.add("active");
  });
});
