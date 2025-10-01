
document.addEventListener('DOMContentLoaded', ()=>{
  let idx=0;
  const slides = document.querySelectorAll('.carousel .slide');
  if(slides.length){
    slides.forEach(s=> s.style.display='none');
    slides[0].style.display='inline-block';
    setInterval(()=>{
      slides.forEach(s=> s.style.display='none');
      slides[idx].style.display='inline-block';
      idx = (idx+1)%slides.length;
    },3000);
  }

  const resForm = document.getElementById('reservation-form');
  if(resForm){
    resForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      document.getElementById('reservation-success').style.display='block';
      setTimeout(()=>{ document.getElementById('reservation-success').style.display='none'; resForm.reset(); },2000);
    });
  }

  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      document.getElementById('contact-success').style.display='block';
      setTimeout(()=>{ document.getElementById('contact-success').style.display='none'; contactForm.reset(); },2000);
    });
  }
});
