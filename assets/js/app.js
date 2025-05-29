document.addEventListener('DOMContentLoaded', () => {
    function footerNav() {
        const topNav = document.querySelectorAll('.footer-top-nav');
        topNav.forEach((item) => {
            const title = item.querySelector('.footer-top-nav__title');
            const links = item.querySelector('.footer-top-nav__links');

            if (title && links) {
                title.addEventListener('click', () => {
                    links.classList.toggle('active');
                    title.classList.toggle('active');
                });
            }
        });
    }

    function showAllCar() {
        const showCarButton = document.querySelector('#show-all-car');
        const carBlock = document.querySelector('#car-buy-main')
        if (showCarButton && carBlock) {
            showCarButton.addEventListener('click', () => {
                carBlock.classList.toggle('show-all');

                if (carBlock.classList.contains('show-all')) {
                    showCarButton.textContent = 'Скрыть часть машин';
                } else {
                    showCarButton.textContent = 'Показать все машины';
                }
            });
        }
    }

    function showListCar() {
        const hideCarButton  = document.querySelector('#hide-list-car');
        const spanEl = document.querySelector('#hide-car-span');
        const allCar = document.querySelector('#car-choice')

        if (hideCarButton && allCar) {
            hideCarButton.addEventListener('click', () => {
                allCar.classList.toggle('hide-car');
                if (allCar.classList.contains('hide-car')) {
                    spanEl.textContent = 'Показать список машин';
                } else {
                    spanEl.textContent = 'Свернуть список машин';
                }

                hideCarButton.classList.toggle('active');
            });
        }
    }

    footerNav();
    showAllCar();
    showListCar();
});