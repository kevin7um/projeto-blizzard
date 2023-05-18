const filterBtn = document.querySelectorAll('.js-filter-games li');
const tabPane = document.querySelectorAll('.tab-pane-games');

filterBtn.forEach((filter, index) => {
    filter.addEventListener('click', event => {
        event.preventDefault();

        filterBtn.forEach(item => {
            item.classList.remove('active')
        });

        tabPane.forEach(tab => {
            tab.classList.remove('active')
        });

        tabPane[index].classList.add('active');

        filter.classList.add('active');
    })
})