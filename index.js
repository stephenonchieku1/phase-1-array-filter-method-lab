// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching (drivers, name) {
    return drivers.filter(
        (driverName)=> driverName.toLowerCase() === name.toLowerCase()
    )
  }
console.log(findMatching(drivers, 'BOBBY'));

 function fuzzyMatch(array, name) {
    return array.filter(
       (driverName) => 
        driverName.toLowerCase().indexOf(name.toLowerCase()) === 0 
     )
 }

console.log(fuzzyMatch(drivers, "Sa"));


let driver = [{name:"Bobby",age:10},{name:"queen",age:10}]
function matchName(driver, string) {
    return driver.filter(
        (driver) => {
            
            return driver.name === string
        }
    )
}
console.log(matchName(driver, 'Bobby'));