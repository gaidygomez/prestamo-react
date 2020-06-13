export function calcularTotal(quantity, dateTerm) {
    
    let tax

    if (quantity <= 1000) {
        tax = quantity * 0.25
    } else if ((quantity > 1000) && (quantity <= 5000)) {
        tax = quantity * 0.20
    } else if ((quantity > 5000) && (quantity <= 10000)) {
        tax = quantity * 0.15
    } else {
        tax = quantity * 0.10
    }

    let totalTax

    switch (dateTerm) {
        case 3:
            totalTax = tax * .05
            break;
        case 6:
            totalTax = tax * .10
            break;
        case 12:
            totalTax = tax * .15
            break;
        case 24:
            totalTax = tax * .20
            break;
        default:
            break;
    }

    return quantity+tax+totalTax    
}