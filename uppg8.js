

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
    const people = [
        {name: "Fanny", age: 23},
        {name: "Gavin", age: 28},
        {name: "Helen", age: 45},
        {name: "Johan", age: 30},
        {name: "Kasia", age: 35}
    ];

    function skrivUtByAge( ){
        for( person of people ){
            if( person.age > 30 ){
                console.log( person.name );
            }
        }

    }

    skrivUtByAge( people );

}

module.exports = { uppg8 };