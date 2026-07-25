const maxProduct = (n) => {
    const digits = Array.from(String(n), Number);
    let maxProduct = 0;
    
    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            const product = digits[i] * digits[j];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    
    return maxProduct;
};