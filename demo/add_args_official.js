var result = 0

for(var index = 2; index < process.argv.length; index++)
    result += Number(process.argv[index])

console.log(result)
