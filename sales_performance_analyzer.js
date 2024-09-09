// Task 1- Create a Function to Calculate Average Sales
function calculateAverageSales(salesfigures) {
    if (salesfigures.length == 0) return 0;  // this is to handle cases where sales data might be missing or empty to prevent errors.
    const totalSales = salesfigures.reduce((sum, sale) => sum + sale, 0);
    return (totalSales) / (salesfigures.length) ;
}


