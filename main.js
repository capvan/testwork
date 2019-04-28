
/*Загрузка XML*/
const loadButton = document.querySelector('#loadButton');
// const result = document.querySelector('#result');

loadButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'Viygotskiyi_viy_L._Psihologiya_Iskusstva.xml');
    xhr.send();
    xhr.addEventListener('load', () => {
        if (xhr.status >= 400) {
            alert('Что-то пошло не так');
        } else {
            alert(xhr.responseXML);
            // result.innerHTML = xhr.responseXML; 
        }
    }); 
} );