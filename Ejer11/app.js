const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const products = productList.getElementsByClassName('product-item');

function filterProducts(searchTerm) {
    const term = searchTerm.toLowerCase();

    Array.from(products).forEach(product => {
        const text = product.textContent.toLowerCase();
        if (text.includes(term)) {
            product.computedStyleMap.display = '';

            if (term) {
                const regex = new RegExp(`(${term})`, 'gi');
                product.innerHTML = product.textContent.replace(
                    regex,
                    '<span style="background-color: #fff3cd">$1</span>'
                );
            }
        }else{
            product.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', (e) => {
    filterProducts(e.target.value);
});