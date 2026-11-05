

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResalt = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{3} \d{3}$/

phoneButton.onclick = () =>  {
    if (regExp.test(phoneInput.value)) {
        phoneResalt.innerHTML = 'OK';
        phoneResalt.style.color = 'green';
    }
    else {
        phoneResalt.innerHTML = 'Error';
        phoneResalt.style.color = 'red';
    }
}





const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');


let currentIndex = 0;
let autoInterval;


const hideTabContent = () => {
    tabContentBlocks.forEach((block) => {
        block.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active');
    })
}


const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block';
    tabs[i].classList.add('tab_content_item_active');

    currentIndex = i;
}

hideTabContent()
showTabContent(0)


const startAuto = () => {
    autoInterval = setInterval(() => {
        let nextIndex = currentIndex + 1;
        if (nextIndex === tabs.length) {
            nextIndex = 0;
        }
        hideTabContent();
        showTabContent(nextIndex);
    }, 1000);
};

startAuto();



const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const euroInput = document.querySelector('#eur');

const getCurrency = async () => {
    try {
        const response = await fetch('../data/convertor..json');


        const data = await response.json();

        const convert = (element) => {
            element.oninput = () => {
                if (element.value === '') {
                    somInput.value = '';
                    usdInput.value = '';
                    euroInput.value = '';
                    return;
                }

                if (element.id === 'som') {
                    usdInput.value = (element.value / data.usd).toFixed(2);
                    euroInput.value = (element.value / data.euro).toFixed(2);
                }
                if (element.id === 'usd') {
                    somInput.value = (element.value * data.usd).toFixed(2);
                    euroInput.value = (element.value * data.usd / data.euro).toFixed(2);
                }
                if (element.id === 'eur') {
                    somInput.value = (element.value * data.euro).toFixed(2);
                    usdInput.value = (element.value * data.euro / data.usd).toFixed(2);
                }
            };
        };

        convert(somInput);
        convert(usdInput);
        convert(euroInput);
    } catch (error) {
        console.error('Ошибка загрузки курсов валют:', error);
    }
};

getCurrency();





const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

const MIN_ID = 1
const MAX_ID = 200

let cardId = MIN_ID

const loadCard = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        const data = await response.json()

        const text = data.completed ? 'completed' : 'in progress'
        const color = data.completed ? 'green' : 'red'

        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${color}">${text}</p>
            <span>${data.id}</span>
        `
    } catch (error) {
        console.error('Ошибка загрузки карточки:', error)
        card.innerHTML = '<p style="color: red">Ошибка загрузки данных</p>'
    }
}

btnNext.onclick = () => {
    cardId = cardId === MAX_ID ? MIN_ID : cardId + 1
    loadCard()
}

btnPrev.onclick = () => {
    cardId = cardId === MIN_ID ? MAX_ID : cardId - 1
    loadCard()
}

loadCard()


fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })





const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#search');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');

const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_API_KEY = '291aa3950880603684e43c6cc36aed88'

searchButton.onclick = async () => {
    if (searchInput.value !== '') {
        try {
            const response = await fetch(`${WEATHER_API}?q=${searchInput.value}&units=metric&lang=ru&appid=${WEATHER_API_KEY}`)
            const data = await response.json()

            if (data.name) {
                city.style.color = 'white'
                city.innerHTML = data.name;
                temp.innerHTML = Math.round(data.main.temp) + '&deg;С';
            } else {
                city.innerHTML = 'Город не найден';
                city.style.color = 'red'
                temp.innerHTML = ''
            }
        } catch (error) {
            console.error('Ошибка запроса:', error)
            city.innerHTML = 'Ошибка загрузки данных';
            city.style.color = 'red'
            temp.innerHTML = ''
        }

        searchInput.value = '';
    } else {
        city.innerHTML = 'Введите название города';
        city.style.color = 'red'
        temp.innerHTML = ''
    }
}

