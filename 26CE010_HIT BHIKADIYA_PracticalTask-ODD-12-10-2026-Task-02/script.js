function calculateOrder() {
    const unitPrice = Number(document.getElementById("unitPrice").value);
    const quantity = Number(document.getElementById("quantity").value);
    const customerType = document.getElementById("customerType").value;
    
    // S5 fixed: multiplied unitPrice by quantity instead of adding
    const subtotal = unitPrice * quantity;
    const rate = getRate(customerType);
    const discount = calculateDiscount(subtotal, rate);
    
    // S6 fixed: changed 0.15 (15%) to 0.05 (5%)
    const serviceCharge = subtotal * 0.05;
    const payable = calculateTotal(subtotal, discount, serviceCharge);
    
    document.getElementById("result").textContent = "Subtotal: ₹" + subtotal + " | Discount: ₹" + discount + " | Service: ₹" + serviceCharge + " | Payable: ₹" + payable;
    document.getElementById("breakdown").textContent = buildBreakdown(unitPrice, quantity);
}

function calculateDiscount(amount, percentage) {
    // TODO M6: Replace the return value with the discount formula.
    return (amount * percentage) / 100;
}

function getRate(type) {
    // TODO D1: Use if / else if / else. Student=10, Staff=5, Visitor=0.
    if (type === "Student") {
        return 10;
    } else if (type === "Staff") {
        return 5;
    } else {
        return 0;
    }
}

function calculateTotal(subtotal, discount, serviceCharge) {
    // TODO D2: Return the amount after discount plus service charge.
    return subtotal - discount + serviceCharge;
}

function buildBreakdown(unitPrice, quantity) {
    // TODO D3: Use a for loop from item 1 to quantity. Show running subtotal (unitPrice * item number).
    let breakdownText = "";
    for (let i = 1; i <= quantity; i++) {
        const runningCost = unitPrice * i;
        breakdownText += "Item " + i + ": Running Cost = ₹" + runningCost + "\n";
    }
    return breakdownText.trim();
}
