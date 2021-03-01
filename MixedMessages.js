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

let sentence = {
    _first_word:'',
    /**
     * @param {string} word
     */
    set first_word(value){
        this._first_word = value; 
    },
    _second_word:'',
    /**
     * @param {string} word
     */
    set second_word(value){
        this._second_word = value; 
    },
    _third_word:'',
    /**
     * @param {string} word
     */
    set third_word(value){
        this._third_word = value; 
    },
    space:' ',
    because:' because it ',
    mark: '!',
    fullSentence: function() {
        return this._first_word + this.space + this._second_word + this.because + this._third_word + this.mark;
    }
}

sentence.first_word = GenerateRandomDay();
sentence.second_word = GenerateRandomAdjective();
sentence.third_word = GenerateRandomWeather();

console.log(sentence.fullSentence());