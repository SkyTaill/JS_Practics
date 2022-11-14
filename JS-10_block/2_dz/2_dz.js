const btn = document.querySelector('.j-btn-test');
const icon = document.getElementById('icon');


let a = true;

btn.addEventListener('click', () => {
    message = "H" + window.screen.height + " W" + window.screen.width;
    alert(message);

    // icon.remove();

    // if (icon.outerHTML.search("M16")) {
    //     icon.remove();
    //     icon.innerHTML = iconPic2;
    //     console.log("dddd")
    // } else if (icon.outerHTML.search("M1")) {
    //     icon.remove();
    //     icon.innerHTML = iconPic1;
    //     console.log("dddd2")
    // }


});