class UI{
    constructor(){
        this.cellar = new Cellar();
    }

    startApp(){
        while (true) {

            const firstChoice = prompt(
                    "Hai 4 opzioni:\n" +
                    "1)Guarda la lista delle bevande\n" +
                    "2)Aggiungi una bevanda\n" +
                    "3)Rimuovi una bevanda\n" +
                    "4)Esci dal programma\n" +
                    "Inserisci il numero dell'operazione"
            );

            if (firstChoice === "1") {
                this.showBeverages();
            } else if (firstChoice === "2") {
                this.insertBeverage();
            } else if (firstChoice === "3") {
                this.deleteBeverage();
            } else if (firstChoice === "4") {
                break;
            } else {
                alert("hai sbagliato ad inserire l'opzione");
            }
        }
    }

    showBeverages(){
        const allBeverages = this.cellar.getAllBeverages();
        alert(allBeverages);
    }

    insertBeverage(){
        const name = prompt('Inserisci il nome');
        const maker = prompt('Inserisci il produttore');
        const vol = parseInt(prompt('Inserisci gradazione alcolica'));
        const type = prompt('Inserisci il tipo');

        const beverage = new Beverage(name, maker, vol, type);
        this.cellar.addBeverage(beverage);
        console.log(this.cellar)
    }
    
    deleteBeverage(){
        const humanIndex = prompt('Inserisci il numero della bevanda da rimuovere');
        const i = humanIndex -1;

        this.cellar.removeBeverage(i);
        console.log(this.cellar)
    }
}