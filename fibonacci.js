let fibonacci = [1, 1]

for (let i = 0; i < 100; i++)  {
        
    let number = fibonacci[i] + fibonacci[i+1]

    fibonacci.push(number)

}

console.log(fibonacci)