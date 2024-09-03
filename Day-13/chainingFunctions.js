
        const add = (a, b) => a + b;
        const multiply = (sum, factor) => sum * factor;
        const subtract = (product, value) => product - value;

        const result = subtract(multiply(add(2, 3), 4), 5);
        console.log(result); // Output: 15

 