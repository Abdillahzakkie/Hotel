import { isCollide } from "../Normal_Js/isCollide";

export function handleEffect () {
    const navbar = document.querySelector('.navbar');
    const ScrollBtn = document.querySelector('.scrollTop');
    const footer = document.querySelector('.footer');

    // Get page offset
    const scrollHeight = window.pageYOffset;

    const show = (elem, style) => elem.classList.add(style);
    const hide = (elem, style) => elem.classList.remove(style);


    // Fixed Navbar
    if(navbar) scrollHeight > 500 ? show(navbar, 'fixed-nav') : hide(navbar, 'fixed-nav');


    // Check if ScrollBtn collides with footer
    const checkScrollCollision = isCollide(ScrollBtn, footer);
    if(ScrollBtn && !(checkScrollCollision)) scrollHeight > 500 
        ? show(ScrollBtn, 'show') : hide(ScrollBtn, 'show');
    else hide(ScrollBtn, 'show');

}