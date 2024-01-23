// navbar functions
const navbar = document.querySelector(".navbar");
const fly_btn = document.getElementById("flying-btn");
const Large_Tablets = window.matchMedia("(max-width: 1024px)");
const Tablet = window.matchMedia("(max-width: 768px)");
const mobile_icon = document.getElementById("mobile-icon");
const mobile_menu = document.getElementById("right");

if (window.innerWidth <= 1024) {
  fly_btn.style.animation = "rotation-show 2s alternate";
  fly_btn.style.right = "10%";
} else {
  // show/hide sign-in menu on click of the button
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("set-shadow");
      fly_btn.style.animation = "rotation-show 2s alternate";
      fly_btn.style.right = "10%";
    }
    if (window.scrollY < 1) {
      fly_btn.style.animation = "rotation-hide 2s alternate";
      fly_btn.style.right = "-10%";

      if (window.scrollY === 0) {
        navbar.classList.remove("set-shadow");
      }
    }
  });
}
// show / hide menu bar in mobile < 768px size
mobile_icon.onclick = function () {
  if (
    mobile_menu.style.display === "none" ||
    mobile_menu.style.display === ""
  ) {
    mobile_menu.style.display = "block";
  } else {
    mobile_menu.style.display = "none";
  }
};

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("set-shadow");
  }
  if (window.scrollY < 3) {
    navbar.classList.remove("set-shadow");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");

  function toggleActiveClass() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      if (
        scrollPosition >= section.offsetTop - 150 &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        navItems.forEach((navItem) => navItem.classList.remove("active"));
        navItems[index].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", toggleActiveClass);
});

AOS.init();
