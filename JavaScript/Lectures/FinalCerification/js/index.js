// Создаем переменну счетчик для корзины
let counter = 0; 



// Создаем блок cart
const cartElm = document.createElement('div')
// Класс
    cartElm.classList.add('cart')

    // Создаем h1 с тексотм
    const textElm = document.createElement('h1');
    textElm.textContent = 'Cart Items'
    textElm.classList.add('h1Text')
    cartElm.appendChild(textElm)
    cartElm.style.display = 'none'
// Добавляем его в main
    const mainElm = document.querySelector('.main')
    mainElm.appendChild(cartElm)


// Ловим div с классом content
const contentElm = document.querySelector('.content');

// Из json читаем данные
const data = JSON.parse(dataProducts);
// Через цикл бежим по объектам
data.forEach(element => {

    // Создаем карточку продукта
    const productBox = document.createElement('div');
    // Задаем ей классы
    productBox.classList.add('product__item');
    // Добавляем в нее элементы 


    //Создадим элемент для картинок
    const imsElm = document.createElement('div')
    // Добавим ему класс
        imsElm.classList.add('imgs_Box')

        // Создаем картинку и передаем ей значение 
        const imgElm = document.createElement('img');
        
            // Меняем ее src
            imgElm.setAttribute('src', element.img)
            imgElm.classList.add('img')

                // Добавляем  2 слушателей на появление и исчезание
                    imsElm.addEventListener('mouseover', (e) => {
                        // добавляем кнопку покупки
                        // ловим кнопку
                        const buttonToBuy = imgElm.parentElement.querySelector('.button_buy');
                        buttonToBuy.style.display = 'flex'
                    })
                    imsElm.addEventListener('mouseout', (e) => {
                        // убираем кнопку покупки
                        // ловим кнопку
                        const buttonToBuy = imgElm.parentElement.querySelector('.button_buy');
                        buttonToBuy.style.display = 'none'
                    })
        
            // Добавляем картинку в div
            imsElm.appendChild(imgElm)

        // Кнопка для покупки
        const buttonToBuy = document.createElement('img');
            // Класс + содержимое
            buttonToBuy.classList.add('button_buy');
            buttonToBuy.setAttribute('src', './img/add.png')

            // Добавим к детям большой картинки
            imsElm.appendChild(buttonToBuy)

            // Добавляем в карточку div с картиками
            productBox.appendChild(imsElm) 







    // Создаем элемент, в который будем добавлять информацию
    const infoElm = document.createElement('div');
    
        // Задаем ему класс
        infoElm.classList.add('info__block')
    
    // Создаем в нём элементы

    // Название продукта
    const nameElm = document.createElement('h1');
        // Класс + текст внутри
        nameElm.classList.add('item')
        nameElm.classList.add('info__name')
        nameElm.textContent = element.name;

            // Доабвляем в div info
            infoElm.appendChild(nameElm);

    

    // Информация о продукте
    const discElm = document.createElement('p')
        // Класс + содержимое
        discElm.classList.add('item')
        discElm.classList.add('disc__item')
        discElm.textContent = element.info;

            // Доабвляем в div info
            infoElm.appendChild(discElm);
    


    // Цена товара
    const priceElm = document.createElement('h2');
        // Класс + содержимое
        priceElm.classList.add('item');
        priceElm.innerHTML = `<span class="span">${element.price}</span>`

            // Доабвляем в div info
            infoElm.appendChild(priceElm);

    
    
    // В карточку продукта добавляем информацию
    productBox.appendChild(infoElm)

    // В content добавляем product
    contentElm.appendChild(productBox)
});




// Функция для создания блока cart
function createCart() {
    const cartElm = document.querySelector('.cart')
    cartElm.style.display = 'flex'
}

// Функиця удаления блока cart
function deleteCart() {
    const cartElm = document.querySelector('.cart')
    cartElm.style.display = 'none'
}

// Функция для создания карточки в корзине
function createCard(img, name, price, text) {
    // Ловим блок cart
    const cartElm = document.querySelector('.cart')
    
    // Создаем блок продукта
    const productBox = document.createElement('div');
    productBox.classList.add('product');

    // Создаем крестик для удаления из корзины
    const vectorX = document.createElement('img');
    vectorX.setAttribute('src', './img/Vector.svg')
    vectorX.classList.add('img_vector');
    

    // Создаем блок картинки товара
    const imgElm = document.createElement('img');
    imgElm.setAttribute('src', img);
    imgElm.classList.add('img__elm')

    // Создаем блок для информации о продукте
    const infoProductItem = document.createElement('div');
    infoProductItem.classList.add('info')

    // Создаем парагаф для описания продукта
    const pElm = document.createElement('p');
    pElm.classList.add('pElm')
    pElm.textContent = text;

    // Создаем блок для названия товара
    const nameElm = document.createElement('h1');
    nameElm.classList.add('product__name');
    nameElm.textContent = name;

    // создаем блок для цены товара
    const priceElm = document.createElement('h3');
    priceElm.classList.add('product__price');
    priceElm.classList.add('item');
    priceElm.innerHTML = `
    Price: <span class="span">${price}</span>
    `

    productBox.appendChild(imgElm)
            
    infoProductItem.appendChild(nameElm)
    infoProductItem.appendChild(pElm); 
    infoProductItem.appendChild(priceElm); 

    productBox.appendChild(infoProductItem)
    productBox.appendChild(vectorX)

    if (counter == 0) {
        createCart()
        cartElm.appendChild(productBox)
        counter++
        console.log(counter)
    } else {
        cartElm.appendChild(productBox)
        counter++
        console.log(counter)
    }
    vectorX.addEventListener('click', (e) => {
        if (counter == 1){
            cartElm.removeChild(productBox)
            counter--
            deleteCart()
            console.log(counter)
        } else {
            cartElm.removeChild(productBox)
            counter--
            console.log(counter)
        }
    })
}


// Слушатель для добавления в корзину
const buttonToBuy = document.querySelectorAll('.button_buy')
buttonToBuy.forEach(el => {
    el.addEventListener('click', (e) => {
        console.log("+1")
        const mainElm = el.parentElement.parentElement;
        const name = mainElm.childNodes[1].childNodes[0].textContent
        const img = mainElm.childNodes[0].childNodes[0].src
        const price = mainElm.childNodes[1].childNodes[2].textContent
        const info = mainElm.childNodes[1].childNodes[1].textContent
        createCard(img, name, price, info)
    })
})





