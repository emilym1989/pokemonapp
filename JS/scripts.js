let pokemonList = [
    {
        name: 'Wigglytuff',
        speed: 45,
        weight: '12kg',
        types: ['cute-charm', 'frisk'],
    },
    {
        name: 'Arcanine',
        speed: 95,
        weight: '155kg',
        types: ['flash-fire', 'intimidate', 'justified'],
    },
    {
        name: 'Noctowl',
        speed: 70,
        weight: '40.8kg',
        types: ['insomnia', 'keen-eye', 'tinted-lens'],
    },
    {
        name: 'Cinccino',
        speed: 115,
        weight: '7.5kg',
        types: ['cute-charm', 'skill-link', 'technician'],
    }
]

//iterate over the pokemonList and write Pokemon names with weights

for (let i = 0; i < pokemonList.length; i++) {
    // extract the numeric value of weight (remove 'kg' and convert to a number)
    let weight = parseFloat(pokemonList[i].weight);

    // determine chonkiness based on weight

    let chonkiness;
    if (weight <=10) {
        chonkiness = "not a chonkster";
    } else if (weight > 10 && weight <= 50) {
        chonkiness = "moderately chonky";
    } else{
        chonkiness = "chonk monster";
    }
    
    document.write(`<p>${pokemonList[i].name} (weight: ${pokemonList[i].weight}) - ${chonkiness}</p>`);
}





