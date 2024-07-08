function pyramid(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let subarray = new Array(i).fill(1);
        result.push(subarray);
    }
    return result;
}
