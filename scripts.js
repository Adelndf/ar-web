document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".nav__left").classList.toggle("active");
});


document.querySelectorAll(".nav__itemLink").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".nav__left").classList.toggle("active");
    });
});
  