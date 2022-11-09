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
    if (form.value >= 0 && form.value <= 10) {
        alert(form.value);

        useRequest('https://loremflickr.com/json/g/320/240/limit=' + form.value, displayResult);
    } else {
        alert("число вне диапазона от 1 до 10");
    }

};

let form = document.getElementById('uname');
let div = document.getElementById('apps');
const btnAsync = document.querySelector('.j-btn');


btnAsync.addEventListener('click', click1);