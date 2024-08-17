const calculatePayableWithTax = (items, taxPercent) => {
    const totalPrice = items.reduce((a, i) => a + i.price, 0);
    const taxable = totalPrice * (taxPercent / 100);
    return totalPrice + taxable;
}

const items = [
    {id: 1, name: "Product A", price:1},
    {id: 2, name: "Product B", price:10},
    {id: 3, name: "Product C", price:100}
];

const payable = calculatePayableWithTax(items, 9);
console.log(`Total payable: ${payable}`);