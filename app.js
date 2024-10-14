const btnContainer = document.querySelector('.btn-container');
const sectionCenter = document.querySelector('.section-center');

const allButton = document.createElement('button');
allButton.classList.add('btn', 'btn-outline-dark', 'btn-item');
allButton.setAttribute('data-id', 'All');
allButton.textContent = 'All';

const koreaButton = document.createElement('button');
koreaButton.classList.add('btn', 'btn-outline-dark', 'btn-item');
koreaButton.setAttribute('data-id', 'Korea');
koreaButton.textContent = 'Korea';

const japanButton = document.createElement('button');
japanButton.classList.add('btn', 'btn-outline-dark', 'btn-item');
japanButton.setAttribute('data-id', 'Japan');
japanButton.textContent = 'Japan';

const chinaButton = document.createElement('button');
chinaButton.classList.add('btn', 'btn-outline-dark', 'btn-item');
chinaButton.setAttribute('data-id', 'China');
chinaButton.textContent = 'China';

btnContainer.appendChild(allButton);
btnContainer.appendChild(koreaButton);
btnContainer.appendChild(japanButton);
btnContainer.appendChild(chinaButton);

const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

renderMenu(menu);

const buttons = document.querySelectorAll('.btn-item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-id');
    filterMenu(category);
  });
});

function createButton(text) {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-outline-dark', 'btn-item');
  button.setAttribute('data-id', text);
  button.textContent = text;
  return button;
}

function renderMenu(menuItems) {
  sectionCenter.innerHTML = ''; // Mevcut öğeleri temizle
  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-items', 'col-lg-6', 'col-sm-12');

    const photo = document.createElement('img');
    photo.classList.add('photo');
    photo.setAttribute('src', item.img);
    photo.setAttribute('alt', item.title);

    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');

    const title = document.createElement('h4');
    title.textContent = item.title;
    const price = document.createElement('h4');
    price.classList.add('price');
    price.textContent = item.price.toFixed(2);

    const menuText = document.createElement('div');
    menuText.classList.add('menu-text');
    menuText.textContent = item.desc;

    menuTitle.appendChild(title);
    menuTitle.appendChild(price);
    menuInfo.appendChild(menuTitle);
    menuInfo.appendChild(menuText);
    menuItem.appendChild(photo);
    menuItem.appendChild(menuInfo);
    sectionCenter.appendChild(menuItem);
  });
}

function filterMenu(category) {
  const filteredMenu = category === 'All' ? menu : menu.filter(item => item.category === category);
  renderMenu(filteredMenu);
}