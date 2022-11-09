
function useRequest(url, callback) {

    fetch(url)
        .then((response) => {
            //  console.log('response', response);
            const result = response.json();
            // console.log('result', result);
            return result;
        })
        .then((data) => {
            // Объект результата в формате JSON
            console.log(data);
            if (callback) {
                callback(data);
            }
        })
        .catch(() => { console.log('error') });
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

    div.innerHTML = cardBlock;
}


function click1() {

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