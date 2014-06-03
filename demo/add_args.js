var sum = 0;

process.argv.forEach(function(val, index, array) {
    if (index >= 2)
        sum += Number(val);
});

console.log(sum);
