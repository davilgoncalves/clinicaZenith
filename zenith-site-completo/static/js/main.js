const header = document.querySelector(".site-header");
const menuToggle = document.querySelector("#menuToggle");
const navigation = document.querySelector("#navigation");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

function updateHeader() {
  header.classList.toggle("is-island", window.scrollY > 70);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

function closeMenu() {
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}
menuToggle.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
navLinks.forEach(link => link.addEventListener("click", () => closeMenu()));
document.addEventListener("click", event => {
  if (!header.contains(event.target)) closeMenu();
});

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle(
      "active", link.getAttribute("href") === `#${entry.target.id}`
    ));
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

const targets = document.querySelectorAll(
  ".section-kicker,.intro-grid>*,.value-card,.section-heading>*,.specialty-card,.team-panel,.contact-grid>*,.contact-main .reveal"
);
targets.forEach((element, index) => {
  element.classList.add("reveal");
  if (element.matches(".value-card,.specialty-card")) element.style.transitionDelay = `${(index % 3) * 90}ms`;
});
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: "0px 0px -35px 0px" });
targets.forEach(target => revealObserver.observe(target));
window.addEventListener("resize", () => { if (innerWidth > 700) closeMenu(); });
