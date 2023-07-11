const date = new Date();
const year = date.getFullYear();

const footerCopyrightYear = document.querySelector(".footer--copyright-year");

footerCopyrightYear.insertAdjacentHTML("beforeEnd", `<span>${year}</span>`);