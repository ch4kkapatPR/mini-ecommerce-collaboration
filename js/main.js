document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('searchInput');
    const loader = document.getElementById('loader'); 
    let allProducts = [];

    loader.classList.add('active');

    // Fetch products from JSON
    fetch('js/products.json')
        .then(response => response.json())
        .then(data => {
            allProducts = data;
            displayProducts(allProducts);
        })
        .catch(error => {
            productList.innerHTML = 'Failed to load products.';
            console.error('Fetch error:', error);
        })
        .finally(() => {
            loader.classList.remove('active');
        });

    function displayProducts(products) {
        productList.innerHTML = ''; // Clear previous list
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
               <p>ราคา: ${Number(product.price).toLocaleString()} บาท</p>
            `;
            productList.appendChild(card);
        });
    }

    // Inefficient Search without typing
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.trim().toLowerCase(); {
            if (searchInput.value == "")
                return products;
        }
        const filteredProducts = allProducts.filter(product => {
            // Simple search, not very efficient
            return product.name.toLowerCase().includes(searchTerm);
        });
        displayProducts(filteredProducts);
    });
});s
