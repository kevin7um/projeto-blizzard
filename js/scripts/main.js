// Modal ------------------------------------

const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close-modal');
const overlay = document.querySelector('.overlay');
const html = document.documentElement;

btnOpenModal.addEventListener('click', event => {
  event.preventDefault();

  html.classList.toggle('modal-opened');
});

btnCloseModal.addEventListener('click', () => {
  html.classList.remove('modal-opened');
});

overlay.addEventListener('click', () => {
  html.classList.remove('modal-opened');
});

// Dropdown -----------------------------------

const btnMenuDropdown = document.querySelectorAll('.js-dropdown-menu');
const menu = document.querySelectorAll('.menu')

btnMenuDropdown.forEach((btn, index) => {
  btn.addEventListener('click', event => {
    event.preventDefault();

    menu.forEach(item => {
      item.classList.remove('active');
      item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
        
        btnMenuDropdown.forEach(btnmenu => {
          btnmenu.classList.remove('active')
        });
      });
    });

    btnMenuDropdown.forEach(btnmenu => {
      btnmenu.classList.remove('active');
    });

    btn.classList.add('active');
    
    menu[index].classList.add('active');
  })
});

// Menu Mobile -----------------------------------

const btnMenuOpen = document.querySelector('.js-btn-mobile');
const overlayMobile = document.querySelector('.overlay-mobile');

btnMenuOpen.addEventListener('click', () => {
  document.documentElement.classList.toggle('menuOpened');
});

overlayMobile.addEventListener('click', () => {
  document.documentElement.classList.toggle('menuOpened');
})

// Dropdown Menu Mobile -------------------------

const btnDropdownMobile = document.querySelectorAll('.js-dropdown-menu-mobile');
const areaMenuMoblie = document.querySelectorAll('.js-area-menu-mobile');

btnDropdownMobile.forEach( (btn, index) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    areaMenuMoblie.forEach(item => {
      item.classList.remove('active');
      item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
      })
    })

    areaMenuMoblie[index].classList.add('active');   
  })
});