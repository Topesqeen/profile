//grab all lines
let logo = document.querySelector('#logo');
let aboutLink = document.querySelector('#aboutLink');
let skillsLink = document.querySelector('#skillsLink');
let contactLink = document.querySelector('#contactLink');
//grab all section
let main = document.querySelector('#main');
let about = document.querySelector('#about');
let skills = document.querySelector('#skills');
let contact = document.querySelector('#contact');
//grab elements of main section for animation
let mainH1 = document.querySelector('#main h1');
let mainH12 = document.querySelector('#main h1:nth-child(2)');
let mainpara = document.querySelector('#main p');
let mainAnker = document.querySelector('#main a');
//grab elements of about section for animation
let aboutH1 = document.querySelector('#about h1');
let aboutpara = document.querySelector('#about p');
let aboutAnker = document.querySelector('#about a');
//grab elements of skills section for animation
let skillsH1 = document.querySelector('#skills h1');
let skillspara = document.querySelector('#skills p');
let skillsCard = document.querySelector('#skills .skills-card');
//grab elements of contact section for animation
let contactH1 = document.querySelector('#contacts h1');
let contactForm = document.querySelector('#contact form');
let contactAnker = document.querySelector('#contact a');

function handOpacity(opacityOne, opacityZero1, opacityZero2, opacityZero3){
  opacityOne.style.opacity = 1;
  opacityZero1.style.opacity = 0;
  opacityZero2.style.opacity = 0;
  opacityZero3.style.opacity = 0;
}
function handAnimation(){
  for(let i=0; i<arguments.length; i++){
    arguments[i].classList.remove('main-animatio');
    arguments[i].offsetWidth;
    arguments[i].classList.add('main-animatio');
  }
}

logo.addEventListener('click', function(){
  handOpacity(main, about, skills, contact);
  handAnimation(mainH1, mainH12, mainpara, mainAnker);
});

aboutLink.addEventListener('click', function(){
  handOpacity(about, main, skills, contact);
  handAnimation(aboutH1, aboutpara, aboutAnker);
});

skillsLink.addEventListener('click', function(){
  handOpacity(skills, main, about, contact);
  handAnimation(skillsH1, skillspara, skillsAnker);
});

contactLink.addEventListener('click', function(){
  handOpacity(contact, main, about, skills);
  handAnimation(contactH1, contactForm, mainAnker);
});
let modal = document.querySelector('.modal');
let trigger = document.querySelector('.open-modal');
let closeButton = document.querySelector('.close-modal');

function toggleModal(){
  modal.classList.toggle("show-modal");
}
function windowClick(e){
  if (e.target === modal) {
    toggleModal()
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowClick);