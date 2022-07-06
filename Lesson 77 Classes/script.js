'use strict';

// class Rectangle {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     calcArea(){
//         return this.height * this.width;
//     }
// }

// class ColoredRegtangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor){
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }
//     showMyProps(){
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRegtangleWithText(25,10, 'hello world', 'red');
// div.showMyProps();
// console.log(div.calcArea());
// const myRect = new Rectangle(10,10);

// const square = myRect.calcArea();

// console.log(square);


class MenuCard { 
    constructor(image, menuType, menuDescr, price){
        this.image = image;
        this.menuType = menuType;
        this.menuDescr = menuDescr;
        this.price = price;
    }
}

const card1 =  new MenuCard('img/tabs/vegy.jpg','Меню "Фитнес"','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);
const card2 =  new MenuCard('img/tabs/elite.jpg','Меню “Премиум”','В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 550);
const card3 =  new MenuCard('img/tabs/post.jpg','Меню "Постное"','Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ', 430);


console.log(card1, card2, card3);
