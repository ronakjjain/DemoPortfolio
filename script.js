const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu_button");

menuBtn.addEventListener("click", () => {
    const visible = menu.getAttribute('data-visible');

    if (visible === 'false') {
        menu.setAttribute('data-visible', true);
        menuBtn.setAttribute('aria-expanded', true);
    } else if (visible === 'true') {
        menu.setAttribute('data-visible', false);
        menuBtn.setAttribute('aria-expanded', false);
    }
});