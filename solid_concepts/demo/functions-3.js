const calculatePayable = (items) => {
    return items.reduce((a, i) => a + i.price, 0);
}

const calculateTax = (totalPrice, taxPercent) => {
    return totalPrice * (taxPercent / 100);
}

// This fn extends calculateTax
const calculateTaxWithOffset = (totalPrice, taxPercent, offset) => {
    if (offset > totalPrice) throw "Offset must be lower number than totalPrice";

    const taxable = totalPrice - offset;
    return calculateTax(taxable, taxPercent);
}

// Use Higher Order Function to create abstraction
const calculatePayableWithTax = (items, taxFn, taxPercent, offset) => {
    const totalPrice = calculatePayable(items);
    const taxPayable = taxFn(totalPrice, taxPercent, offset);
    return totalPrice + taxPayable;
}

const items = [
    { id: 1, name: "Product A", price: 1 },
    { id: 2, name: "Product B", price: 10 },
    { id: 3, name: "Product C", price: 100 }
];

const payable = calculatePayableWithTax(items, calculateTax, 9);
console.log(`Total payable: $${payable}`); // 120.99

const payableWithOffset = calculatePayableWithTax(items, calculateTaxWithOffset, 9, 20);
console.log(`Total payable with offset: $${payableWithOffset}`); // 119.19


