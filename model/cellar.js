class Cellar {

    constructor(beverageArray = []){
        this.beverageArray=beverageArray;
    }

    get beverageCount(){
        const count = this.beverageArray.length;
        return count;
    }

    getAllBeverages() {
        let allBeveragesString = '';
        
        for (let i = 0; i < this.beverageArray.length; i++) {
            const element = this.beverageArray[i];
            const humanIndex = i+1;
            allBeveragesString += humanIndex + ') ' + element.toString();
            allBeveragesString += '-----------------------\n';
        }
        return allBeveragesString;
    }

    addBeverage(beverage) {
        this.beverageArray.push(beverage);

    }

    removeBeverage(i) {
        this.beverageArray.splice(i, 1);
    }

    static fromDbObject(data){

        const tempArray = [];

        for (const gO of data) {

            if (gO.region) {
                const wine = new Wine(gO.name, gO.maker, gO.vol, gO.type, gO._dop, gO.region, gO.vine);
                tempArray.push(wine);
            } else {
                const beer = new Beer(gO.name, gO.maker, gO.vol, gO.type, gO._dop, gO.malt);
                tempArray.push(beer);
            }
            
        }

        const newCellar = new Cellar(tempArray);

        return newCellar;

    }
}
