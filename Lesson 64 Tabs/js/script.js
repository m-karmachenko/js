window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();
    // Тупой вариант
    // tabs.forEach((tab) => {
    //     tab.addEventListener('click', (event) => {

    //         tabs.forEach((i) => {
    //             i.classList.remove('tabheader__item_active');
    //         });
    //         event.target.classList.add('tabheader__item_active');
    //     });
    // });
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach( (tab,i) => {
                if (target == tab){
                    console.log(target);
                    console.log(tab);
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

});