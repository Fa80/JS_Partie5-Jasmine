var languagesArrayCreation = function () {
  var languages = ["Html","CSS", "Java", "PHP"];
  return languages;
  // 2ème methode
  //var nombers = [];
  //nombres.push(0,1,2,3,4,5)
  //return  nombres;
}

var numbersArrayCreation = function () {
  var numbers = [0,1,2,3,4,5];
    return numbers;
}

var ElementReplacement = function (languages) {
  languages[2] = 'Javascript';
    return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push("Ruby","Python"); //La fonction push nous permet d'ajouter un élément à la fin d'un tableau.
  return languages;

}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1); // La fonction unshift nous permet de rajouter un élément au début d'un tableau.
  return numbers;

}

var deleteArrayFirstElement = function (languages) {
  languages.shift(); // La fonction shift nous permet de supprimer un élément au début d'un tableau.
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop(); // La fonction pop nous permet de supprimer le dernier élément d'un tableau.
  return languages;
}

var stringToArray = function (socialMediaInString) {
  var reseau = socialMediaInString.split(','); // La fonction split nous permet de convertir les chaines de caractère en tableau.
  return reseau;
}

var arrayToString = function (languages) {
  var languages = languages.toString();// La fonction toString nous permet de convertir  un tableau en chaines de caractère et retourber le resultat.
  return languages;

}

var arraySort = function (socialMedia) {
  socialMedia = socialMedia.sort(); // La fonction sort permet de trier un tableau par ordre alphabetique.
  return socialMedia;
}

var arrayInvert = function (languages){
    var languages = languages.reverse(); // La fonction reverse permet d'inverser les éléments d'un tableau.
    return languages;
}
