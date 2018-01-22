/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/
const profiles = require("./userData");
console.log(profiles.length);

/*
  1.1 Check the type of data returned
  Expected output: [object Array] OR true
  hint: google how to find type of data structures in javascript
*/

console.log(typeof profiles); // check this with Amit
console.log(profiles[0])

/*
  1.2 Log of the size of the data returned
  Expected output: "We just fetched [x] users" where x represents the actual number
*/

var printMsg = `We just fetched ${profiles.length} users`
console.log(printMsg);

/*
  1.3 Get the first five items from the data set
  Expected output: an array with the first 5 items
*/
var firstFiveObjectz = profiles.slice(0,5)
printMsg = `Your first array length is ${firstFiveObjectz.length}`
console.log(printMsg);
console.log(firstFiveObjectz);

/*
  1.4 Remove the first profile from this data while returning it at the same time
  Expected output: a) user by the name of dânia da mota and b) an array of profiles without dânia da mota 
*/
var firstProfile = profiles.shift()
console.log(`Name of the profile deleted is ${firstProfile.name.first}  ${firstProfile.name.last}`);
console.log(`Length of the array noe is ${profiles.length}`);
profiles.unshift(firstProfile)

/*
  1.5 Paginate the api results in sets of variable amounts
  Example: Paginate(profiles, 2, 5)
  Expected output: An array of profiles containing items sliced from page 2 to page 3 containing 5 items
*/



function paginate (array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}


console.log(paginate(profiles,5,2))

