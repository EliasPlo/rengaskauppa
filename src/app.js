document.getElementById('search').addEventListener('click', function () {
    const size = document.getElementById('size').value;
    fetch('/data/renkaat.json')
        .then(response => response.json())
        .then(jsonData => {
            const results = jsonData.renkaat.filter(r => r.size === size);
            const tbody = document.querySelector('#results tbody');
            tbody.innerHTML = '';
            results.forEach(r => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${r.brand}</td>
                    <td>${r.model}</td>
                    <td>${r.price.toFixed(2)} €</td>
                    <td>${r.type}</td>
                    <td>${r.available}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});