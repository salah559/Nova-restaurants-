
document.addEventListener('DOMContentLoaded', () => {
    // ظهور العنوان بشكل سلس
    const hero = document.querySelector('.hero h2');
    if(hero){ hero.style.opacity = 0; setTimeout(() => { hero.style.transition='opacity 1.5s'; hero.style.opacity=1; }, 500); }

    // النماذج الوهمية
    const reservationForm = document.getElementById('reservation-form');
    if(reservationForm){
        reservationForm.addEventListener('submit', e=>{ e.preventDefault(); document.getElementById('reservation-success').style.display='block'; });
    }
    const contactForm = document.getElementById('contact-form');
    if(contactForm){
        contactForm.addEventListener('submit', e=>{ e.preventDefault(); document.getElementById('contact-success').style.display='block'; });
    }

    // الطلب من قائمة الطعام وهميًا
    const orderButtons = document.querySelectorAll('.menu-item button');
    orderButtons.forEach(btn=>{
        btn.addEventListener('click', ()=>{ alert('Order placed successfully! (Demo)'); });
    });
});
