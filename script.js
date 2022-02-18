const inner = document.getElementById(`inner`);
const btn = document.getElementById(`btn`);
const basis = [];
const arrayOfIngr1 = [];
const arrayOfIngr2 = [];
const sauce = [];
let price = 0;


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
    if(event.target.classList.contains(`red`)){
        const ingr = ingredients.find(item => item.id ===event.target.id);
        const dat = event.target.dataset.basis;
        const total = document.getElementById(`total`);
        let ingrPrice = ingr.price;
        price -= ingrPrice;
        total.textContent = `Общая сумма заказа: ${price}`;
        if(dat ==="basis"){
            const index = basis.indexOf(ingr);
            if(index === 0){
                basis.shift()
            } else if(index === 1){
                basis.pop();
            }
        }
        if(dat ==="i1"){
            const index = arrayOfIngr1.indexOf(ingr);
            if(index === 0){
                arrayOfIngr1.shift()
            } else if(index === 1){
                arrayOfIngr1.pop();
            }
        }
        if(dat ==="i2"){
            const index = arrayOfIngr2.indexOf(ingr);
            if(index === 0){
                arrayOfIngr2.shift()
            } else if(index === 1){
                arrayOfIngr2.pop();
            }
        }
        if(dat ==="sause"){
            const index = sauce.indexOf(ingr);
            if(index === 0){
                sauce.shift()
            } else if(index === 1){
                sauce.pop();
            }
        }
        ingr.checked = false;
        const id = event.target.id;
        const li = document.getElementById(id);
        li.remove();
        event.target.classList.remove(`red`);
        event.target.classList.add(`black`); 

    } else if(event.target.classList.contains(`black`)){
        const dat = event.target.dataset.basis;
        const ingr = ingredients.find(item => item.id ===event.target.id);
        const total = document.getElementById(`total`);
        let ingrPrice = ingr.price;
        console.log(ingrPrice)
        price = price + ingrPrice;
        total.textContent = `Общая сумма заказа: ${price}`;
        if(dat ==="basis"){
            if(basis.length >= 2){
                return;
            }
            basis.push(ingr)
        }
        if(dat ==="i1"){
            if(arrayOfIngr1.length >= 2){
                return;
            }
            arrayOfIngr1.push(ingr)
        }
        if(dat ==="i2"){
            if(arrayOfIngr2.length >= 2){
                return;
            }
            arrayOfIngr2.push(ingr)
        }
        if(dat ==="sause"){
            if(sauce.length >= 2){
                return;
            }
            sauce.push(ingr)
        }
        ingr.checked = true;
        const li = document.createElement(`LI`);
        const list = document.getElementById(`list`);
        li.textContent = event.target.textContent;
        li.id = ingr.id;
        li.classList.add(`red`);
        list.append(li);
        event.target.classList.remove(`black`);
        event.target.classList.add(`red`); 
    }
}

const enter = (event) => {
        if(basis.length ===2 && arrayOfIngr1.length === 2 && arrayOfIngr2.length === 2 && sauce.length === 2){
            const final = document.createElement(`DIV`);
            final.textContent = `Поздравляем! Вы заказали пиццу!`;
            final.classList.add(`final`);
            document.body.append(final);
        }
}



inner.addEventListener(`click`, handler)
btn.addEventListener(`click`, enter)