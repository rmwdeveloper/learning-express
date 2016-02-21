var fortunes = [
    "Conquer your fears or they will conquer you",
    "Rivers need springs.",
    "Do not fear what you do not know"
];

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};