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

    // Моя попытка
    // //Timer
    // const end = new Date('2022-07-30:00:15'),
    //       days = document.querySelector('#days'),
    //       hours = document.querySelector('#hours'),
    //       minutes = document.querySelector('#minutes'),
    //       seconds = document.querySelector('#seconds');
    


    // function setTime(){
    //     let tdays, thours, tminutes, tseconds, diff;
    //     diff = end - Date.now();
    //     tdays = Math.floor(diff / 86400000);
    //     thours = Math.floor((diff % 86400000) / 3600000);
    //     tminutes = Math.floor(((diff % 86400000) % 3600000) / 60000);
    //     tseconds = Math.floor((((diff % 86400000) % 3600000) % 60000) / 1000); 
        
    //     days.innerHTML = tdays;
    //     hours.innerHTML = thours;
    //     minutes.innerHTML = tminutes;
    //     seconds.innerHTML = tseconds;
    // }

    // const timerId = setInterval(setTime, 1000);

    const deadline = '2022-07-11';

    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / 86400000),
              hours = Math.floor( (t / 3600000) % 24),
              minutes = Math.floor( (t / 60000) % 60),
              seconds = Math.floor( (t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock(){
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //modal window
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalCloseBtn = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal');

    // modalTrigger.forEach( btn => {
    //     btn.addEventListener('click', () => {
    //         modal.classList.add('show');
    //         modal.classList.remove('hide');
    //         document.body.style.overflow = 'hidden';
    //     });
    // });

    // modalCloseBtn.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     document.body.style.overflow = '';
    // });

    // c классом hide
    modalTrigger.forEach( btn => {
        btn.addEventListener('click', openModal);
    });

    function openModal(){
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal(){
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });

    function openModalByScroll(){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }
    }
    const modalTimerId = setTimeout(openModal, 6000);
    window.addEventListener('scroll', openModalByScroll);
});