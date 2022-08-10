// boolean ##################################################
let isCool: boolean = true;

// number ###################################################
let age: number = 18;

// string ###################################################
let myName: string = "Fulano de tal";

// array ####################################################
let fruits: string[] = ["maça", "banana", "uva"];
let pets: Array<string> = ["XU", "PUFF"];

// tuples ###################################################
let tuples: [string, number] = ['backet', 10];
tuples = ['oxee', 5];

// object ###################################################
let wizard: object = {
    name: "John",
    age: 19
}

// enum #####################################################
enum Size { Small = 1, Medium = 2, Large = 3};
let sizeName1: string = Size[2]; // Medium
let sizeName2: number = Size.Small; // 1

// none or undefined ########################################
let none1: undefined = undefined;
let none2: null = null;

// void #####################################################
let myFunction = (): void => console.log("não retorna nada!");
let functionReturn = (): string => "ola mundo!";

// never (funcoes que não podem retornar nada) #############
let error = (): never => {throw Error("Ops...");}

// any (not use) ###########################################
let whatever: any = "Ola mundo!";

// interface ou type (parece um struct ou model) ###########
interface RobotArmy1 {
    count: number,
    type: string,
    magic: string
}
type RobotArmy2 = {
    count: number,
    type: string,
    magic: string
}
let fightRobotArmy1 = (robots: RobotArmy1) => {
    console.log("FIGHT!!!", robots.type);
}
let fightRobotArmy2 = (robots: RobotArmy2) => {
    console.log("FIGHT!!!", robots.count);
}
let fightRobotArmy3 = (robots: { count: number, type: string, magic: string }) => {
    console.log("FIGHT!!!", robots.magic);
}
fightRobotArmy1({count: 1, type: 'robot', magic: 'froo'});
fightRobotArmy2({count: 2, type: 'robot', magic: 'less'});
fightRobotArmy3({count: 3, type: 'robot', magic: 'aaaa'});

// Type Assertion (sobrescreve outro type) evite usar ########
interface CatArmy {
    count: number,
    type: string,
    magic: string
}
let dog = {} as CatArmy;
console.log(dog.count);

// Optional attribute #########################################
interface DogArmy {
    count: number,
    type: string,
    magic?: string // Opcional
}
let fightDogArmy = (robots: DogArmy) => {
    console.log("FIGHT!!!", robots.type);
}
fightDogArmy({count: 1, type: 'dog'});
fightDogArmy({count: 1, type: 'dog', magic: 'fruu'});

// Interface with Generics ###################################
interface APICall<Response> {
    data: Response;
}

// Function ###################################################
const multiply = (a: number, b: number): number => {
    return a * b;
}

// Class ######################################################
class Animal /* extends Primate implements DogArmy */ {
    private sing: string = 'lalalala';
    public name: string = "";

    constructor(sound: string, name: string) {
        this.sing = sound;
        this.name = name
    }

    greet(): string {
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal("Lion", "RAAAWWWR");
lion.name
lion.greet();

// Union ######################################################
let confused: string | number = "Ola mundo!";
confused = 23;

