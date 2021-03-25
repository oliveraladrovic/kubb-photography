const links = document.querySelectorAll('.navigation ul li a');
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

window.addEventListener('scroll', (event) => {
  let fromTop = window.scrollY;

  links.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add('dark-back');
  } else {
    header.classList.remove('dark-back');
  }
});

menuButton.addEventListener('click', () => {
  nav.classList.toggle('active-nav');
  if (nav.classList.contains('active-nav')) {
    header.classList.add('dark-back');
  } else {
    header.classList.remove('dark-back');
  }
});

const allLinks = document.querySelectorAll('.deactivate');
allLinks.forEach((a) => {
  a.addEventListener('click', () => {
    nav.classList.remove('active-nav');
    header.classList.remove('dark-back');
  });
});
