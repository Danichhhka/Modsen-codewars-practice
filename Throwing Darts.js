function scoreThrows(radii) {
    if (radii.length === 0) {
        return 0;
    }

    let totalScore = 0;
    let allLessThanFive = true;

    for (let i = 0; i < radii.length; i++) {
        if (radii[i] > 10) {
            totalScore += 0;
        } else if (radii[i] >= 5 && radii[i] <= 10) {
            totalScore += 5;
        } else if (radii[i] < 5) {
            totalScore += 10;
        }

        if (radii[i] >= 5) {
            allLessThanFive = false;
        }
    }

    if (allLessThanFive) {
        totalScore += 100;
    }

    return totalScore;
}
