const menuItems = [
    { name: 'Nasi Ayam', price: 17000 },
    { name: 'Nasi Lele', price: 17000 },
    { name: 'Nasi BeBek', price: 20000 },
    { name: 'Es Teh', price: 5000 },
    { name: 'Es Jeruk', price: 7000 }
];

menuItems.forEach(item => {
    item.priceFormatted = item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
});

console.log(menuItems);

console.log(menuItems);


let total = 0;

function populateMenu() {
    const menuList = document.getElementById('menuList');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="item-name">${item.name}</span> <span class="item-price">Rp${item.price.toFixed(2)}</span>`;
        li.addEventListener('click', () => addItem(item.name, item.price));
        menuList.appendChild(li);
    });
}

function addItem(name, price) {
    const itemList = document.getElementById('itemList');
    const li = document.createElement('li');
    li.innerHTML = `<span class="item-name">${name}</span> <span class="item-price">Rp${price.toFixed(2)}</span>`;
    itemList.appendChild(li);

    total += price;
    document.getElementById('total').textContent = total.toFixed(2);
}

function calculateChange() {
    const payment = parseFloat(document.getElementById('payment').value);

    if (payment && payment >= total) {
        const change = payment - total;
        document.getElementById('change').textContent = change.toFixed(2);
    } else {
        alert('Insufficient payment amount.');
    }
}

function clearAll() {
    document.getElementById('itemList').innerHTML = '';
    total = 0;
    document.getElementById('total').textContent = '0';
    document.getElementById('change').textContent = '0';
    document.getElementById('payment').value = '';
}

document.getElementById('calculateChange').addEventListener('click', calculateChange);
document.getElementById('clearAll').addEventListener('click', clearAll);
window.onload = populateMenu;
