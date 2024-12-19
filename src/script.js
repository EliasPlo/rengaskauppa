document.addEventListener('DOMContentLoaded', () => {
    const sizeSelect = document.getElementById('size-select');
    const searchBtn = document.getElementById('search-btn');
    const sortSelect = document.getElementById('sort-select');
    const tireList = document.getElementById('tire-list');

    fetch('/tires.json')
        .then(response => response.json())
        .then(data => {
            const sizes = [...new Set(data.map(tire => tire.size))];
            sizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                sizeSelect.appendChild(option);
            });

            searchBtn.addEventListener('click', () => {
                const selectedSize = sizeSelect.value;
                if (!selectedSize) return;
                const filteredTires = data.filter(tire => tire.size === selectedSize);
                displayTires(filteredTires);
            });

            sortSelect.addEventListener('change', () => {
                const sortedTires = [...currentTires];
                const sortType = sortSelect.value;

                if (sortType === 'brand') {
                    sortedTires.sort((a, b) => a.brand.localeCompare(b.brand));
                } else if (sortType === 'price') {
                    sortedTires.sort((a, b) => a.price - b.price);
                }

                displayTires(sortedTires);
            });
        });

    let currentTires = [];

    function displayTires(tires) {
        currentTires = tires;
        tireList.innerHTML = '';
        tires.forEach(tire => {
            const li = document.createElement('li');
            li.textContent = `${tire.brand} - ${tire.model}: ${tire.price}€`;
            tireList.appendChild(li);
        });
    }
});
