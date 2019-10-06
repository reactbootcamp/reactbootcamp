const cars = {
    type: 'Mercedes',
    color: 'Silver'
}
let { type, color } = cars
//console.log( type, color) 

const f1Teams = [
    'Mercedes', 'Ferrari', 'Red Bull', 'McLaren', 'Renault', 'Toro Rosso', 'Racing Point', 'Alfa Romeo', 'Haas', 'Williams'
]

console.log(f1Teams);

function logLeaders(first, second, third, ...rest) {
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(...rest);

}
const f1Leaders = [first, second, third, ...rest] = f1Teams;
logLeaders(...f1Leaders)

function calculate( age=33 ) {
    console.log( age );
}

calculate();
calculate(27)

const {age = 33} = {age: 22}
console.log( age );

