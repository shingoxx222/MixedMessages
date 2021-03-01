function generateRandomDay() {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return daysOfWeek[Math.floor(Math.random()*daysOfWeek.length)];
}

console.log(generateRandomDay());