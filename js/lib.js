export function calculateBonus(sales) {
    let total = 0;
    const bonusedSale = 10000;
    const bonus = 0.05;

    for (const sale of sales) {
        if (sale > bonusedSale){
            total = total + sale - bonusedSale;
        }
    }
    total = total * bonus;
    return total;
}
