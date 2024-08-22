let cart = receipt();

let text = 'Вы заказали';
let delivery = 9000;

for (let key in cart) {
    text += ` ${cart[key].info},`;
    delivery += cart[key]['price'];
}


text = text.slice(0, -1);
console.log(`${text} | Общая стоимость ${delivery} сумм с доставкой (9000)`);



