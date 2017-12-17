var fortunesCookies = [
    'you will gain 100 mmr today',
    'you will have a peasant surprise',
    'myes',
    'you will lose 100 mmr today',
    'you will meet a sloth today'
];

exports.getFortune = function(){
    var randomFortune = fortunesCookies[Math.floor(Math.random() * fortunesCookies.length)];
    return randomFortune;
}