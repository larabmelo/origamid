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

const accordionList = document.querySelectorAll('.js-accordion dt')
console.log(accordionList)


