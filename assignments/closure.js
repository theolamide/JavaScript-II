// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function Country(nameofcountry){
    const ethnicgroup1 = 'Yoruba'
    const ethnicgroup2 = 'Igbo'
    const ethnicgroup3 = 'Hausa'
    const officiallang = 'English'
    console.log(`${ethnicgroup1}, ${ethnicgroup2}, and ${ethnicgroup3} are the three main ethnic groups in ${nameofcountry} and ${officiallang} is the official language spoken.`);

      function Capitalcity(cityname){
          console.log(`${cityname} is the capital of ${nameofcountry}.`);
      
            function Othercities(Others){
                const othercity1 = 'Ibadan'
                const othercity2 = 'Lagos'
                const othercity3 = 'Kano'
                const othercity4 = 'Enugu'
                console.log(`${Others} of importance include: 1. ${othercity1}: it is the largest city in West Africa. 2. ${othercity2}: it is the commercial nerve center of Africa. 3. ${othercity3}: it is an ancient city of importace to the ${ethnicgroup3} people.`)
            }//closes Othercities
            Othercities('Other cities');
            
      }//closes Capitalcity
      Capitalcity('Abuja');

} //closes Country
Country('Nigeria');

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
