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

        const insertChoice = prompt('Vuoi inserire una birra o un vino');

        if (insertChoice !== 'birra' && insertChoice !== 'vino') {
            alert('non puoi inserire altri tipi di bevande');
            return;
        }

        const name = prompt('Inserisci il nome');
        const maker = prompt('Inserisci il produttore');
        const vol = parseInt(prompt('Inserisci gradazione alcolica'));
        const type = prompt('Inserisci il tipo');

        if (insertChoice === 'birra') {
            const malt = prompt('Inserisci il tipo di malto');
            const beer = new Beer(name, maker, vol, type, malt);
            this.cellar.addBeverage(beer);
        } else {
            const region = prompt('Inserisci la regione');
            const vine = prompt('Inserisci il vitigno');
            const wine = new Wine(name, maker, vol, type, region, vine);
            this.cellar.addBeverage(wine);
        }
    }
    
    deleteBeverage(){
        const humanIndex = prompt('Inserisci il numero della bevanda da rimuovere');
        const i = humanIndex -1;

        this.cellar.removeBeverage(i);
        console.log(this.cellar)
    }
}