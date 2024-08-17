const calculatePayable = (items) => {
    return items.reduce((a, i) => a + i.price, 0);
}

const calculateTax = (totalPrice, taxPercent) => {
    return totalPrice * (taxPercent / 100);
}

// Use Higher Order Function to create abstraction
const calculatePayableWithTax = (items, taxPercent) => {
    const totalPrice = calculatePayable(items);
    const taxPayable = calculateTax(totalPrice, taxPercent);
    return totalPrice + taxPayable;
}

const items = [
    { id: 1, name: "Product A", price: 1 },
    { id: 2, name: "Product B", price: 10 },
    { id: 3, name: "Product C", price: 100 }
];

const payable = calculatePayableWithTax(items, 9);
console.log(`Total payable: $${payable}`); // 120.99


