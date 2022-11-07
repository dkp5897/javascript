// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications

// JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data.

// Note: Converting a string to a native object is called deserialization, while converting a native object to a string so it can be transmitted across the network is called serialization.

// JSON structure:-

const superHeroes = {
    "squadName" : "Super hero squad",
    "homeTown" : "Metro City",
    "formed" : 2016,
    "secretBase" : "Super tower",
    "active" : true,
    "members" : [
      {
        "name" : "Molecule Man",
        "age" : 29,
        "secretIdentity" : "Dan Jukes",
        "powers" : [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name" : "Madame Uppercut",
        "age" : 39,
        "secretIdentity" : "Jane Wilson",
        "powers" : [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name" : "Eternal Flame",
        "age" : 1000000,
        "secretIdentity" : "Unknown",
        "powers" : [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  console.log(superHeroes.homeTown);        //Metro City
  console.log(superHeroes['active']);       //true
  console.log(superHeroes['secretBase']);       //Super tower

  console.log(superHeroes['members'][1]['powers'][2] ); //Superhuman reflexes

// First we have the variable name — superHeroes.
// Inside that we want to access the members property, so we use ["members"].
// members contains an array populated by objects. We want to access the second object inside the array, so we use [1].
// Inside this object, we want to access the powers property, so we use ["powers"].
// Inside the powers property is an array containing the selected hero's superpowers. We want the third one, so we use [2].