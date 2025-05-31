

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    const numbers = [2, 3, 4, 2, 45, 23, 19, 40];
    // let arrayLength = number.length;

    function sort(x){

        for( let i = 0; i < x.length; i++ ){
            if( x[i] % 2 == 0 ){
                console.log( x[i], "jämt" );
            }else{
                console.log( x[i], "udda" );
            }
        }
    }

    sort( numbers );

  
}

module.exports = { uppg9 };