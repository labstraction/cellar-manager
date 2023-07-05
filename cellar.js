class Cellar {
    constructor(){
        this.beverageArray=[];
    }

    getAllBeverages() {
        let allBeveragesString = '';
        
        for (let i = 0; i < this.beverageArray.length; i++) {
            const element = this.beverageArray[i];
            const humanIndex = i+1;
            allBeveragesString += humanIndex + ') ' + element.toString();
            allBeveragesString += '-----------------------';
        }
        return allBeveragesString;
    }

    addBeverage(beverage) {
        this.beverageArray.push(beverage);

    }

    removeBeverage(i) {
        this.beverageArray.splice(i, 1);

    }
}
