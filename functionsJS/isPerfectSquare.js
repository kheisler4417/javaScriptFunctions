function isPerfectSquare(num) {
    // Take the square root of the number
    const sqrt = Math.sqrt(num);

    // Check if the square root is an integer
    return sqrt % 1 === 0;
  }
