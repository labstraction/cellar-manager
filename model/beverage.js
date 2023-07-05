class Beverage{
    constructor(name, maker, vol, type){
        this.name = name;
        this.maker = maker;
        this.vol = vol;
        this.type = type;
    }

    toString(){
        const card = 'Nome: ' + this.name + '\n' + 
        'Produttore: ' + this.maker + '\n' +
        'Gradazione alcolica: ' + this.vol + '% \n' +
        'Tipologia: ' + this.type + '\n';

        return card;
    }

}