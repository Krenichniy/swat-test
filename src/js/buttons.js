//
// в массив добавляй новые значения в одинарные скобки через запятую
//
// в массив modalWindowsArr пиши атрибут окна, которое нужно открыть/закрыть
// в массиве openButtonsArr будут сами записаны атрибуты кнопок открытия
// в массиве closeButtonsArr будут сами записаны атрибуты кнопок закрытия
// 
// создай класс "modal-is-hidden", впиши его во все окна, этот класс
// должен скрывать окно,
//
// gl&hf
//

{
    let modalWindowsArr = [
        'menu-modal', 'menu-buy-modal', 
        'header-products-modal', 'header-how-modal', 'header-milk-modal',
        'product-1-modal', 'product-2-modal', 'product-3-modal',
        'how-read-more-modal',
        'contacts-location-modal', 'contacts-franchise-modal',
    ];
    let openButtonsArr = [];
    let closeButtonsArr = [];

    modalWindowsArr.forEach(element => {
        openButtonsArr.push(element + '-open');
        closeButtonsArr.push(element + '-close');
    })

    for (let i = 0; i < openButtonsArr.length; i++) {
        
        let openButton = document.querySelector('[' + openButtonsArr[i] + ']');
        if (!openButton) {
            continue;
        }
        let closeButton = document.querySelector('[' + closeButtonsArr[i] + ']');
        if (!closeButton) {
            console.log("Уважаемый разработчик, вы добавили кнопку открытия '" + modalWindowsArr[i] + "', но не добавили кнопку закрытия модалки");
            continue;
        }
        let modalWindow = document.querySelector('[' + modalWindowsArr[i] + ']');
        if (!closeButton) {
            console.log("Уважаемый разработчик, вы добавили кнопку открытия и закрытия '" + modalWindowsArr[i] + "', но не добавили модалку");
            continue;
        }

        let fun = function () {
            modalWindow.classList.toggle('modal-is-hidden');
        }

        openButton.addEventListener('click', fun);
        closeButton.addEventListener('click', fun);
    }
    
}