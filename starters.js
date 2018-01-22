/* 
  Here are two profile objects 
  Your challenge is to write a function called `createConversationStarters`
  that will parse these objects and match up common attributes,
  The expected output of this function can be an array or string that says something like:
  `You both live in mumbai
  she is from the Marathi community as well`
  Hint: you can use using object access syntax, 
  basic conditionals and array manipulation to solve this challenge
*/

const me = {
  name: "Amit",
  neverMarried: true,
  age: 42,
  education: "Masters - Management",
  community: "Marathi",
  gender: "He",
  bio:
    "I am putting up this profile on behalf of my Son. He has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Veg"
};

const partner = {
  name: "Savita",
  neverMarried: false,
  age: 41,
  education: "Masters - Marketing",
  community: "Marathi",
  gender: "She",
  bio:
    "I am putting up this profile on behalf of my daughter. She has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Non-Veg"
};

/* 
  Start writing function here
*/



function createConvStar (){
   var conversationStarters = []
  
   if (hasCity()){
      conversationStarters.push(getCity())   
   }

   if (hasCommunity()){
    conversationStarters.push(getCommunity())
   }

   console.log(conversationStarters)
}

function hasCity(){
  if (getCity().length>0){
      return true
  }
  return false
}

function hasCommunity(){
  if (getCommunity().length>0){
      return true
  }
  return false
}

function getCity (){
  if (me.city == partner.city && me.city === partner.city) {
     let matchingCityName  =   me.location.city.charAt(0).toUpperCase()
     matchingCityName += me.location.city.slice(1,(me.location.city.length))
     return `You both live in ${matchingCityName}`
  }

  return ""
}


function getCommunity (){
  if (me.community == partner.community) {
     let matchingCommunity  =   me.community.charAt(0).toUpperCase()
     matchingCommunity += me.community.slice(1,(me.community.length))
     return `${partner.gender} is from the ${matchingCommunity} community as well`
  }

  return "" 
}

createConvStar()


