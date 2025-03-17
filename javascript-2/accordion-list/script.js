// tab navigation

function initTabNav() { 

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo');

if(tabMenu.length && tabContent.length) {

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        })
        tabContent[index].classList.add('ativo');
    };
    
    tabMenu.forEach((itemMenu, index) => {
         itemMenu.addEventListener('click', function() {
            activeTab(index);
         })
    });

}
}

initTabNav();

// accordion list

function initAccordion() {

const accordionList = document.querySelectorAll('.js-accordion dt');
const ativoClass = 'ativo';

if(accordionList.length) {
accordionList[0].classList.add(ativoClass);
accordionList[0].nextElementSibling.classList.add(ativoClass);

function activeAccordion() {
    this.classList.toggle(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();