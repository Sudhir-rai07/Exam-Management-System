export const questionDifficulty = (rating: number)  => {
    switch (rating) {
        case 1:
            return "Easy";
        case 2:
            return "Medium";
        case 3:
            return "Hard";
        case 4:
            return "Very Hard";
        case 5:
            return "Extremely Hard";
        default:
            return "";
    }
}