function solution(...args) {
    let uniqueValues = {};
    
    for (let i = 0; i < args.length; i++) {
        if (uniqueValues[args[i]]) {
            return true;
        }
        uniqueValues[args[i]] = true;
    }
    
    return false;
}
