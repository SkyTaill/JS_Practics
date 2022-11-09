function localStorageInit() {
    let urlStorg = localStorage.getItem('urlStorg');
    let formStorg = localStorage.getItem('formStorg');
    let formStorg2 = localStorage.getItem('formStorg2');

    if (urlStorg) {
        const cardBlock = `
        <div class="card">
          <img
            src="${urlStorg}"
        
            width="${formStorg}" height="${formStorg2}"
          />
         
        </div>
      `;

        div.innerHTML = cardBlock;
    }
}


function useRequest(url, callback) {

    fetch(url)
        .then((response) => {
            const result = response.url;
            return result;
        })
        .then((data) => {
            if (callback) {
                callback(data);
            }
        })
        .catch(() => { console.log('error') });
};

function displayResult(apiData) {
    localStorage.setItem('urlStorg', apiData);
    localStorage.setItem('formStorg', form.value);
    localStorage.setItem('formStorg2', form2.value);
    const cardBlock = `
        <div class="card">
          <img
            src="${apiData}"
        
            width="${form.value}" height="${form2.value}"
          />
         
        </div>
      `;

    div.innerHTML = cardBlock;
}


function click1() {

    if (form.value >= 100 && form.value <= 500) {
        if (form2.value >= 100 && form2.value <= 500) {

            let randomNumber = form2.value * 2;
            useRequest('https://source.unsplash.com/collection/928423/' + form.value + 'x' + form2.value + '/?sig=' + randomNumber, displayResult);
        } else {
            alert("Высота картинки вне диапазона от 100 до 500");

        }
    } else {
        alert("Ширина картинки вне диапазона от 100 до 500");
    }

};

/*
Формулировка задания не корректная:
Заголовок первого input — «ширина картинки».
Заголовок второго input — «высота картинки».
Заголовок кнопки — «запрос».

это все данные которые мы получаем на вход из тз.

 randomNumber - число которое генерируется с помощью функции Math.floor(Math.random() * numImagesAvailable);
где numImagesAvailable — какое количество фото должно браться из коллекции, а также randomNumber — является аргументом функции при выполнении кнопки "Запрос"

Откуда брать numImagesAvailable не написано (input по тз у нас только 2) и сколько фото грузить тоже не указано явно в задание. -"вывести список картинок на экран" 
/*/

let form = document.getElementById('val1');
let form2 = document.getElementById('val2');
let div = document.getElementById('apps');
const btnAsync = document.querySelector('.j-btn');


btnAsync.addEventListener('click', click1);

localStorageInit();