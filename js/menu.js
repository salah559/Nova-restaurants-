
const menuItems = [
    {name:'Grilled Chicken', desc:'Delicious grilled chicken with herbs', price:'$12', img:''},
    {name:'Beef Steak', desc:'Juicy beef steak with sauce', price:'$18', img:''},
    {name:'Vegetable Pasta', desc:'Healthy veggie pasta', price:'$10', img:''},
    {name:'Chocolate Cake', desc:'Rich chocolate dessert', price:'$6', img:''}
];
const menuContainer = document.getElementById('menu-items');
if(menuContainer){
    menuItems.forEach(item=>{
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.innerHTML=`<img src="images/placeholder.jpg" alt="${item.name}"><h3>${item.name}</h3><p>${item.desc}</p><p>${item.price}</p><button>Order Now</button>`;
        menuContainer.appendChild(div);
    });
}
