var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
for(let i = 0; i < officeItems.length; i++){
    console.log(officeItems.length)
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male"){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is NOT old enough to watch Mad Max dont let HIM in");
     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is NOT old enough to watch Mad Max dont let HER in");
     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male"){
     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " IS old enough to watch Mad Max let HIM in");
     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female")
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is old enough to watch Mad Max let HER in");
}
