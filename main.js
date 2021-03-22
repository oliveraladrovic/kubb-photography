let links = document.querySelectorAll('.navigation ul li a');
let sections = document.querySelectorAll('section');

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
    document.querySelector('header').style.background = 'rgba(0, 0, 0, 1)';
  } else {
    document.querySelector('header').style.background = 'rgba(0, 0, 0, 0.44)';
  }
});
