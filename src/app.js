function kabom() {
    alert('KABOOOM!')
}
function init() {
    setTimeout(function () {
        alert('Hello World!')
    }, 500);

    let btn = document.getElementById('click');
    btn.addEventListener('click', kabom);
}

document.addEventListener('DOMContentLoaded', init);