
document.addEventListener('DOMContentLoaded', ()=>{
  const container = document.getElementById('menu-items');
  if(!container) return;
  MENU_ITEMS.forEach(item=>{
    const div = document.createElement('div');
    div.className='menu-item';
    div.innerHTML = `<img src="${item.img}" alt="${item.name_en}" loading="lazy"><h4 class="mi-name">${item.name_en}</h4><p class="mi-desc">${item.desc_en}</p><p class="mi-price">${item.price}</p><button data-id="${item.id}">Order Now</button>`;
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

  document.querySelectorAll('.menu-item button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      addToCart(parseInt(id));
    });
  });
});
