const nav = document.querySelector('nav');
const name = nav.querySelector('.name');
const github = nav.querySelector('.github');
const logo = nav.querySelector('img');
window.addEventListener('scroll', () => {
  if(window.scrollY > 90) {
    nav.classList.add('nav-sticked');
    name.classList.remove('hide')
    github.classList.add('hide')
    logo.classList.add('down')
  }else{
    nav.classList.remove('nav-sticked');
    name.classList.add('hide')
    github.classList.remove('hide')
    logo.classList.remove('down')
  }
});
