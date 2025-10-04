
document.addEventListener('DOMContentLoaded', ()=>{
  let idx=0;
  const slides = document.querySelectorAll('.carousel .slide');
  if(slides.length){
    slides[0].classList.add('active');
    setInterval(()=>{
      slides[idx].classList.remove('active');
      idx = (idx+1)%slides.length;
      setTimeout(() => {
        slides[idx].classList.add('active');
      }, 100);
    },3500);
  }

  const resForm = document.getElementById('reservation-form');
  if(resForm){
    resForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      document.getElementById('reservation-success').style.display='block';
      setTimeout(()=>{ document.getElementById('reservation-success').style.display='none'; resForm.reset(); },2500);
    });
  }

  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      document.getElementById('contact-success').style.display='block';
      setTimeout(()=>{ document.getElementById('contact-success').style.display='none'; contactForm.reset(); },2500);
    });
  }

  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if(mobileMenuToggle && mainNav){
    mobileMenuToggle.addEventListener('click', ()=>{
      mainNav.classList.toggle('active');
      mobileMenuToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', ()=>{
        mainNav.classList.remove('active');
        mobileMenuToggle.textContent = '☰';
      });
    });
  }
});
