
document.addEventListener('DOMContentLoaded', ()=>{
  const container = document.getElementById('menu-items');
  if(!container) return;
  MENU_ITEMS.forEach(item=>{
    const div = document.createElement('div');
    div.className='menu-item';
    div.innerHTML = `<img src="${item.img}" alt="${item.name_en}"><h4 class="mi-name">${item.name_en}</h4><p class="mi-desc">${item.desc_en}</p><p class="mi-price">${item.price}</p><button data-id="${item.id}">Order Now</button>`;
    container.appendChild(div);
  });

  function localizeMenu(){
    document.querySelectorAll('.menu-item').forEach(el=>{
      const id = el.querySelector('button').getAttribute('data-id');
      const item = MENU_ITEMS.find(x=>x.id==id);
      if(document.documentElement.getAttribute('data-lang')==='ar'){
        el.querySelector('.mi-name').innerText = item.name_ar;
        el.querySelector('.mi-desc').innerText = item.desc_ar;
      } else {
        el.querySelector('.mi-name').innerText = item.name_en;
        el.querySelector('.mi-desc').innerText = item.desc_en;
      }
    });
  }

  window.addEventListener('nova-lang-changed', localizeMenu);
  localizeMenu();

  // Order modal
  const modal = document.getElementById('order-modal');
  const close = document.getElementById('close-order');
  document.querySelectorAll('.menu-item button').forEach(btn=> btn.addEventListener('click', (e)=>{
    const id = e.target.getAttribute('data-id');
    const item = MENU_ITEMS.find(x=>x.id==id);
    document.getElementById('order-item').value = (document.documentElement.getAttribute('data-lang')==='ar')? item.name_ar: item.name_en;
    modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false');
  }));
  close.addEventListener('click', ()=>{ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); });

  // realistic demo submit
  const form = document.getElementById('order-form');
  form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const name = document.getElementById('order-name').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const addr = document.getElementById('order-address').value.trim();
    if(!name || !phone || !addr){ alert('Please fill name, phone and address.'); return; }
    document.getElementById('order-success').style.display='block';
    console.log('DEMO ORDER', {
      item: document.getElementById('order-item').value,
      name, phone, addr, notes: document.getElementById('order-notes').value, website: document.getElementById('order-website').value
    });
    setTimeout(()=>{ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); document.getElementById('order-success').style.display='none'; form.reset(); }, 2200);
  });
});
