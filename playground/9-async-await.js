const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                return reject('Number must be positive');
            }
            resolve(a + b)
        }, 2000);
    })
};

const doWork = async () => {
    const sum = await add(1, 99);
    const sum1 = await add(sum, 1);
    const sum2 = await add(sum1, -1);
    return sum2;
};

doWork().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});