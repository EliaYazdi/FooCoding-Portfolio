function vehicleType(color, num, age) {
    let type;
    let old;
    if (num === 1) {
        type = 'car';

    } else {
        type = 'motorbike';
    }
    if (age === 0) {
        old = 'new';
    } else {
        old = 'used';
    }

    console.log('a' + '' + color + '' + old + '' + num + '.');
}

vehicleType('blue', 1, 3);