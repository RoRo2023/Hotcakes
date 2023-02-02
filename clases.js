class Hotcakes{
    tazas_harina = null;
    huevos = 1;
    tazas_leche = null;
    cucharadas_azucar = null;
    tazas_mantequilla = null;
    #ingrediente_especial = "";

    constructor( tazas_harina, huevos, tazas_leche, cucharadas_azucar, tazas_mantequilla, ingrediente_especial){
        this.tazas_harina = tazas_harina;
        this.huevos = huevos;
        this.tazas_leche = tazas_leche;
        this.cucharadas_azucar = cucharadas_azucar;
        this.tazas_mantequilla = tazas_mantequilla;
        this.#ingrediente_especial = ingrediente_especial;
    }

    añadir_ingredientes(){
        mezcla = this.tazas_harina+
        this.huevos +
        this.tazas_leche +
        this.cucharadas_azucar +
        this.tazas_mantequilla;
        this.#toque_especial;
    }

    #toque_especial(){
        console.log("Se añadió el ingrediente especial")
    }

    cocinar(){

    }


}

class Chocolate extends Hotcakes{
    chocolate = null;

    constructor(
        tazas_harina, 
        huevos, 
        tazas_leche, 
        cucharadas_azucar, 
        tazas_mantequilla, 
        chocolate
    ){
        super(tazas_harina, huevos, tazas_leche, cucharadas_azucar, tazas_mantequilla);
        this.chocolate = chocolate;
    }
}

class Vegano extends Hotcakes{
    tazas_lecheVegana = null;
    huevos_veganos = 1;

    constructor(
        tazas_harina, cucharadas_azucar, tazas_mantequilla, tazas_lecheVegana, huevos_veganos
    ){
        super(tazas_harina, cucharadas_azucar, tazas_mantequilla);
        this.tazas_lecheVegana = tazas_lecheVegana;
        this.huevos_veganos = huevos_veganos;
    }
    
    //Polimorfismo
    añadir_ingredientes(){
        const mezcla = this.tazas_harina+
        this.huevos +
        this.tazas_leche +
        this.cucharadas_azucar +
        this.tazas_mantequilla;
    }

}

const hotcakeChocolate = new Chocolate (2, 2, 1, 2, 1, 2);
const hotcake = new Hotcakes (2, 2, 1, 1, 2);
const hotcakeVegano = new Vegano (2,2,1,1,2);
