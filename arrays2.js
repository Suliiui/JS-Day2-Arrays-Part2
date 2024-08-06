/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
    if (numbers.length % 2 == 0){
       return false;
    }else {
        return true;
    }
  }
//   console.log(isArrayLengthOdd([1, 2, 3,4]))

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
    if (numbers.length % 2 == 0){
        return true;
     }else {
         return false;
     }
  }
//   console.log(isArrayLengthEven([1, 2, 3,4]))

  /**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
const instructors=["Mshary", "Hasan"]
function addLailaToArray(instructors) {
    instructors.push("laila")
    return instructors
  }
//   console.log(addLailaToArray(["Mshary", "Hasan"]))

  /**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
const teams=["Brazil", "Germany", "Italy"]
function eliminateTeam(teams) {
    teams.splice(2)
    return teams
  }
//   console.log(eliminateTeam(["Brazil", "Germany", "Italy"]))

 