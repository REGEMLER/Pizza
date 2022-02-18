const inner = document.getElementById(`inner`);
const btn = document.getElementById(`inner`);

class Ingredient {
    constructor(name,price,id){
        this.name = name,
        this.price = price;
        this.id = id; 
        this.checked = false;
    }
}
const ingr1 = new Ingredient(`Курица`, 100, `1`);
const ingr2 = new Ingredient(`Ветчина`, 200, `2`);
const ingr3 = new Ingredient(`Лук`, 150, `3`);
const ingr4 = new Ingredient(`Кетчуп`, 170, `4`);
const ingr5 = new Ingredient(`Капуста`, 500, `5`);
const ingr6 = new Ingredient(`Сыр`, 50, `6`);
const ingr7 = new Ingredient(`Киви`, 900, `7`);
const ingr8 = new Ingredient(`Сырный`, 60, `8`);
const ingr9 = new Ingredient(`Кефир`, 1000, `9`);
const ingr10 = new Ingredient(`Колбаски`, 400, `10`);
const ingr11 = new Ingredient(`Ананасы`, 600, `11`);
const ingr12 = new Ingredient(`Брянский томатный`, 100, `12`);
const ingr13 = new Ingredient(`Дрожжи`, 250, `13`);
const ingr14 = new Ingredient(`Грибы`, 300, `14`);
const ingr15 = new Ingredient(`Трюфеля`, 670, `15`);
const ingr16 = new Ingredient(`Сицилия`, 360, `16`);
const ingredients = [ingr1, ingr2, ingr3, ingr4, ingr5, ingr6, ingr7, ingr8, ingr9, ingr10, ingr11, ingr12, ingr13, ingr14, ingr15,ingr16];

const handler = (event) => {
    if(event.target.classList.contains(`black`)){
        const li = document.createElement(`LI`);
        const list = document.getElementById(`list`);
        li.textContent = event.target.textContent;
        li.classList.add(`red`);
        list.append(li);
        event.target.classList.toggle(`red`); 
        console.log(`h`)
    }
}
inner.addEventListener(`click`, handler)