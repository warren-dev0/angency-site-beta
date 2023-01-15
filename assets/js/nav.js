const navbarToogle = document.querySelector('.navbar-toogle');
const navbarContainer = document.querySelector('.navbar-container');

navbarToogle.addEventListener('click', () => {
    const visibility = navbarContainer.getAttribute('data-visible');
    if (visibility === 'false') {
        navbarToogle.setAttribute('aria-expanded', 'true');
        navbarContainer.setAttribute('data-visible', 'true');
    }else if (visibility === 'true') {
        navbarToogle.setAttribute('aria-expanded', 'false');
        navbarContainer.setAttribute('data-visible', 'false');
    }
});