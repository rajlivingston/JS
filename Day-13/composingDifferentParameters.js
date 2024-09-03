
        const compose = (...fns) => (...args) =>
            fns.reduceRight((acc, fn) => Array.isArray(acc) ? fn(...acc) : fn(acc), args);

        const add = (a, b) => a + b;
        const multiply = (sum, factor) => sum * factor;
        const subtract = (product, value) => product - value;

        const composedFunction = compose(subtract, multiply, add);

        const result = composedFunction(2, 3, 4, 5);
        console.log(result); // Output: 15

   