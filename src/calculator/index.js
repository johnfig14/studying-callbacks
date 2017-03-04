export default {
    add(x, y) {
        const result = x + y;
        return Promise.resolve(result);
    },
    subtract(x, y) {
        const result = x - y;
        return Promise.resolve(result);
    },
    multiply(x, y) {
        const result = x * y;
        return Promise.resolve(result);
    },
    divide(x, y) {
        const result = x / y;
        return Promise.resolve(result);
    }
};


// export default {
//     add(x, y, callback) {
//         const result = x + y;
//         return callback(null, result);
//     },
//     subtract(x, y, callback) {
//         const result = x - y;
//         return callback(null, result);
//     },
//     multiply(x, y, callback) {
//         const result = x * y;
//         return callback(null, result);
//     },
//     divide(x, y, callback) {
//         const result = x / y;
//         return callback(null, result);
//     }
// };




// compute(x, y, callback) {
//     return this.add(x, y, (err, result) => {
//         if(err) return callback(err);

//         return this.multiply(result, 2, (err, result) = > {
//         if(err) return callback(err);
//         return this.divide(result, 10, (err, result) => )
//             if(err) return callback(err);
//             retrun callback(null, result);
//         });
//     });
// }