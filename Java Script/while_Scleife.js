function calcSum(array) {
    let sum = 0 

    let i= 0;
    while (i < array.length) {
        sum += array [i];
        i++;
    }
    return sum;
    }

    const zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const ergebenisSum = calcSum(zahlenArray)
    console.log("Die Summer betraegt:" + ergebenisSum);
    
