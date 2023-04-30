let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40, 
    rareCars: 2
}

for (let index = 0; index < Object.keys(statistics).length; index++) {
    const element = Object.keys(statistics)[index];
    if (element[0] == 'r' || statistics[element] % 2 == 1){
        console.log(statistics[element])
    }
}