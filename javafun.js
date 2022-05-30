function can_drink(age){
    if (age >= 21){
        console.log("you can drink")
    } else if (17 < age && age < 21) {
        console.log("you can almost drink")
    } else {
        console.log("you can not drink")
    }
}


let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'],
     capFave: 'favorite foods'[0]

     }
  }
}

  
const person = {
    name: 'Jimmy',
    age: 14,
    fav_color: 'red',
    get_info () {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and my favorite color is ${this.fav_color}.`)
      
    }
  }


const { age } = person;
console.log(age)
const robot = {
    energyLevel: 100,
    checkEnergy () {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

  function make_person(name,age,color){
      return {
          name,
          age,
          color
      }

  }

  const bob =  make_person("bob",7,'blue')
 


  let job = {
    citizen: null,
    name: 'bob',
    jobs: {
        police: {
            arrest () {
                console.log("you are under arrest!")
            }
        }
    }

  }

  job.jobs.police.arrest()




  const personFactory = (name,age,color) => {
      return {
          name,
          age,
          color,
          shit () {
            console.log("i shat myself")
          },
          stuff () {
            console.log(`My name is ${name}, my favorite color is ${color}, and I am ${age} years old`)
          }
      }
  }

  const jim = personFactory("jim",7,'red')
  

function fart(num){
    for(let i = 0; i < num; i++){
        console.log('fart')
    }

}

fart(5)