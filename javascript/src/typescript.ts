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

// never (funcoes que nunca finaliza - loop) #############
let error = (): never => {throw Error("Ops...");}

// any (not use) ###########################################
let whatever: any = "Ola mundo!";

// interface (parece um struct ou model) ###################
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}
let fightRobotArmy = (robots: RobotArmy) => {
    console.log("FIGHT!!!", robots.type);
}
fightRobotArmy({count: 1, type: 'robot', magic: 'froo'});

// Type #####################################################
type MyNumber = number | undefined
const idade: MyNumber = 10;

// Type Assertion (sobrescreve outro type) evite usar ########
interface CatArmy {
    count: number,
    type: string,
    magic?: string // Optional
}
let cat = {
    count: 22,
    type: 'cat'
} as CatArmy;
let fightDogArmy = (robots: CatArmy = cat) => {
    console.log("FIGHT!!!", robots.type);
}

// Function ###################################################
type Multiply = (x: number, b: number) => number;
const multiply: Multiply = (x: number, y: number): number => {
    return x * y;
}

// Union ######################################################
let confused: string | number = "Ola mundo!";
confused = 23;

