class UI{
    constructor(){

        const data = Storage.loadData();
        if (data !== null) {
            this.cellar = Cellar.fromDbObject(data);
        } else {
            this.cellar = new Cellar();
        }
        
    }

    startApp(){
        while (true) {

            const firstChoice = prompt(
                    "Ciao utente la nostra cantina ha a disposizine " + this.cellar.beverageCount + 
                    " bevande.\n" + 
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

        const insertChoice = prompt('Vuoi inserire una birra o un vino');

        if (insertChoice !== 'birra' && insertChoice !== 'vino') {
            alert('non puoi inserire altri tipi di bevande');
            return;
        }

        const name = prompt('Inserisci il nome');
        const maker = prompt('Inserisci il produttore');
        const vol = parseInt(prompt('Inserisci gradazione alcolica'));
        const type = prompt('Inserisci il tipo');
        const dop = prompt('Inserisci la data (gg/mm/yyyy)');

        if (insertChoice === 'birra') {
            const malt = prompt('Inserisci il tipo di malto');
            const beer = new Beer(name, maker, vol, type, dop, malt);
            this.cellar.addBeverage(beer);
        } else {
            const region = prompt('Inserisci la regione');
            const vine = prompt('Inserisci il vitigno');
            const wine = new Wine(name, maker, vol, type,dop, region, vine);
            this.cellar.addBeverage(wine);
        }
        Storage.saveData(this.cellar.beverageArray);
    }
    
    deleteBeverage(){
        const humanIndex = prompt('Inserisci il numero della bevanda da rimuovere');
        const i = humanIndex -1;

        this.cellar.removeBeverage(i);

        Storage.saveData(this.cellar.beverageArray);
    }



}