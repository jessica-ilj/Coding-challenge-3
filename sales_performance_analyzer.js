// Task 1- Create a Function to Calculate Average Sales
function calculateAverageSales(salesfigures) {
    if (salesfigures.length == 0) return 0;  // this is to handle cases where sales data might be missing or empty to prevent errors.
    const totalSales = salesfigures.reduce((sum, sale) => sum + sale, 0);
    return (totalSales) / (salesfigures.length) ;
}

//Task 2- Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) {        //Excellent for average sales above $10,000
        return "Excellent";
    } 
    else if (averageSales >= 7000 && averageSales <= 10000) {  //Good for average sales between $7k and $10k
        return "Good";
    } 
    else if (averageSales >= 4000 && averageSales < 7000) {  ///Satisfactory for average sales between $4k and $7k
        return "Satisfactory";
    } 
    else {
        return "Needs Improvement";  //Needs Improvement for average sales below $4,000
    }
};

//Task 3- Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salespersons) {
    return salespersons.reduce((acc, salesperson) => {
        const averageSales = calculateAverageSales(salesperson.sales);

        if (!acc.topPerformer || averageSales > calculateAverageSales(acc.topPerformer.sales)) { //to check if the current salesperson is the top performer
            acc.topPerformer = salesperson;
        }

        if (!acc.bottomPerformer || averageSales < calculateAverageSales(acc.bottomPerformer.sales)) {  // Check if the current salesperson is the bottom performer
            acc.bottomPerformer = salesperson;
        }

        return acc;
    }, { topPerformer: null, bottomPerformer: null });
}
