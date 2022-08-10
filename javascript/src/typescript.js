// boolean ##################################################
var isCool = true;
// number ###################################################
var age = 18;
// string ###################################################
var myName = "Fulano de tal";
// array ####################################################
var fruits = ["maça", "banana", "uva"];
var pets = ["XU", "PUFF"];
// tuples ###################################################
var tuples = ['backet', 10];
tuples = ['oxee', 5];
// object ###################################################
var wizard = {
    name: "John",
    age: 19
};
// enum #####################################################
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName1 = Size[2]; // Medium
var sizeName2 = Size.Small; // 1
// none or undefined ########################################
var none1 = undefined;
var none2 = null;
// void #####################################################
var myFunction = function () { return console.log("não retorna nada!"); };
var functionReturn = function () { return "ola mundo!"; };
// never (funcoes que não podem retornar nada) #############
var error = function () { throw Error("Ops..."); };
// any (not use) ###########################################
var whatever = "Ola mundo!";
var fightRobotArmy1 = function (robots) {
    console.log("FIGHT!!!", robots.type);
};
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT!!!", robots.count);
};
var fightRobotArmy3 = function (robots) {
    console.log("FIGHT!!!", robots.magic);
};
fightRobotArmy1({ count: 1, type: 'robot', magic: 'froo' });
fightRobotArmy2({ count: 2, type: 'robot', magic: 'less' });
fightRobotArmy3({ count: 3, type: 'robot', magic: 'aaaa' });
var dog = {};
console.log(dog.count);
var fightDogArmy = function (robots) {
    console.log("FIGHT!!!", robots.type);
};
fightDogArmy({ count: 1, type: 'dog' });
fightDogArmy({ count: 1, type: 'dog', magic: 'fruu' });
// Function ###################################################
var multiply = function (a, b) {
    return a * b;
};
// Class ######################################################
var Animal = /** @class */ (function () {
    function Animal(sound, name) {
        this.sing = 'lalalala';
        this.name = "";
        this.sing = sound;
        this.name = name;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("Lion", "RAAAWWWR");
lion.name;
lion.greet();
// Union ######################################################
var confused = "Ola mundo!";
confused = 23;
