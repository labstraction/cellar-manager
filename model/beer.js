class Beer extends Beverage{

    constructor(name, maker, vol, type, malt){
        super(name, maker, vol, type);
        this.malt = malt;    
    }

    toString(){
        return 'Birra:\n'+ super.toString() +
        'Malto: ' + this.malt + '\n';
    }

}