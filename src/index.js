import Calculator from'./calculator';

Calculator.add(1, 2)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

Calculator.subtract(10, 5)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

Calculator.multiply(5, 5)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

Calculator.divide(20, 10)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });





// Calculator.subtract(10, 5, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
//     }
// );

// Calculator.multiply(5, 5, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
//     }
// );

// Calculator.divide(10, 20, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
//     }
// );





// import Calculator from './calculator';

// Calculator.add(1, 2)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// Calculator.add(2, 2)
//     .then(result => Calculator.subtract(result, 2))
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => console.error(err));