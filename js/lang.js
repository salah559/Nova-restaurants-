
const translations = {
  en:{
    brand:'Nova Restaurant',
    tagline:'Fresh taste. Cozy place.',
    nav_home:'Home', nav_menu:'Menu', nav_res:'Reservation', nav_contact:'Contact',
    hero_title:'Welcome to Nova Restaurant', hero_sub:'Savor the flavour — order online or book a table.',
    cta_order:'Order Now', cta_book:'Book a Table',
    specials_title:"Chef's Specials", dish1_name:'Grilled Chicken', dish1_desc:'Herb-marinated with roasted vegetables.',
    dish2_name:'Beef Steak', dish2_desc:'Juicy steak with chef sauce.',
    dish3_name:'Vegetable Pasta', dish3_desc:'Seasonal veggies, light sauce.',
    offers_title:'Current Offers', about_title:'About Us', about_text:'Nova Restaurant brings fresh, home-made flavors to the neighborhood. Family-run, passionate chefs.',
    reviews_title:'What customers say', location_title:'Our Location', location_text:'1234 Sahara Street, Algiers (Demo location)',
    footer_phone:'Phone:', footer_email:'Email:',
    menu_title:'Our Menu',
    order_title:'Place Your Order', label_item:'Item', label_name:'Name', label_phone:'Phone', label_address:'Address', label_notes:'Notes', label_website:'Website (for demo client)', btn_submit:'Submit Order', order_success:'Order placed (demo). We\'ll contact you.',
    label_date:'Date', label_time:'Time', label_people:'People', res_title:'Book a Table', res_success:'Reservation submitted (demo).',
    contact_title:'Contact Us', contact_phone:'Phone', contact_email:'Email', contact_address:'Address', contact_success:'Message sent (demo).'
  },
  ar:{
    brand:'نوفا رستوران', tagline:'طعم طازج. أجواء دافئة.',
    nav_home:'الصفحة الرئيسية', nav_menu:'القائمة', nav_res:'الحجز', nav_contact:'تواصل',
    hero_title:'مرحباً بكم في نوفا', hero_sub:'تذوق النكهة — اطلب الآن أو احجز طاولة.',
    cta_order:'اطلب الآن', cta_book:'احجز طاولة',
    specials_title:'أطباق الشيف المميزة', dish1_name:'دجاج مشوي', dish1_desc:'متبل بالأعشاب مع خضار مشوية.',
    dish2_name:'ستيك لحم', dish2_desc:'ستيك طري مع صوص الشيف.',
    dish3_name:'باستا خضار', dish3_desc:'خضار موسمية مع صوص خفيف.',
    offers_title:'العروض الحالية', about_title:'من نحن', about_text:'نوفا تقدم نكهات منزلية طازجة. عائلة تدير المطعم بشغف الطهاة.',
    reviews_title:'آراء الزبائن', location_title:'موقعنا', location_text:'1234 شارع الصحراء، الجزائر (موقع تجريبي)',
    footer_phone:'الهاتف:', footer_email:'البريد:',
    menu_title:'قائمة الطعام',
    order_title:'أكمل طلبك', label_item:'الطبق', label_name:'الاسم', label_phone:'الهاتف', label_address:'المكان', label_notes:'ملاحظات', label_website:'موقع الويب (تجريبي)', btn_submit:'إرسال الطلب', order_success:'تم إرسال الطلب (تجريبي). سنتواصل معك.',
    label_date:'التاريخ', label_time:'الوقت', label_people:'عدد الأشخاص', res_title:'حجز طاولة', res_success:'تم إرسال الحجز (تجريبي).',
    contact_title:'تواصل معنا', contact_phone:'الهاتف', contact_email:'البريد', contact_address:'العنوان', contact_success:'تم الإرسال (تجريبي).'
  }
};

function applyLang(lang){
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = (lang==='ar') ? 'ar' : 'en';
  if(lang==='ar') document.documentElement.dir='rtl'; else document.documentElement.dir='ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) el.innerText = translations[lang][key];
  });
  document.querySelectorAll('#lang-toggle').forEach(btn=> btn.innerText = (lang==='ar') ? 'EN' : 'عربي');
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('nova_lang') || 'en';
  applyLang(saved);
  document.querySelectorAll('#lang-toggle').forEach(btn=> btn.addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-lang')==='ar' ? 'ar':'en';
    const next = cur==='ar' ? 'en' : 'ar';
    applyLang(next);
    localStorage.setItem('nova_lang', next);
    window.dispatchEvent(new Event('nova-lang-changed'));
  }));
});
