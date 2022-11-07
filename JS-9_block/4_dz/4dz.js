function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            console.log(result);
            console.log(url);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function () {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

function displayResult(apiData) {

    const cardBlock = `
        <div class="card">
          <img
            src="${apiData.file}"
            class="card-image"
          />
          <p>${apiData.owner}</p>
        </div>
      `;

    // console.log('end cards', cards);

    div.innerHTML = cardBlock;
}


function click1() {
    //div.innerHTML = form.value;
    if (form.value >= 100 && form.value <= 500 && form2.value >= 100 && form2.value <= 500) {
        alert(form.value);

        useRequest('https://loremflickr.com/json/g/' + form.value + '/' + form2.value + '/all', displayResult);
    } else {
        alert("число вне диапазона от 100 до 500");
    }

};

let form = document.getElementById('val2');
let form2 = document.getElementById('val2');
let div = document.getElementById('apps');
const btnAsync = document.querySelector('.j-btn');


btnAsync.addEventListener('click', click1);