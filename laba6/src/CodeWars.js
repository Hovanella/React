function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i < Math.round(Math.sqrt(number))+1; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Лаба была сдана с помощью кода сверху . Посмотрим , сможете ли вы повторить .