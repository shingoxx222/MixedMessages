function GenerateRandomDay() {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return daysOfWeek[Math.floor(Math.random()*daysOfWeek.length)];
}

function GenerateRandomAdjective() {
    let adjectives = ['beauitiful', 'awesome', 'sad', 'cheerful', 'fine', 'fantastic', 'grief'];
    return adjectives[Math.floor(Math.random()*adjectives.length)];
}

function GenerateRandomWeather() {
    let weathers = ['has sunshines', 'is cloudy', 'rains heavily', 'snows'];
    return weathers[Math.floor(Math.random()*weathers.length)];
}

console.log(GenerateRandomDay() + " " + GenerateRandomAdjective() + " because it " + GenerateRandomWeather() + "!");