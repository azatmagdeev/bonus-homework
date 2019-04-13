export function calculateBonus(sales) {
    let total = 0;

    for (const sale of sales) {
        if (sale > 10000){
            total = total + sale - 10000;
        }
    }
    total = total * 0.05;
    return total;
}
