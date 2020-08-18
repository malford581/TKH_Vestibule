let names = [
    "Westly Snipes",
    "Nicholas Cage",
    "Sean Carter",
    "Sean Combs",
    "Michael Jordan",
    "Patrick Ewing",
  ];
  let firstName = [];
  let lastName = [];
  
  for (let i = 0; i < names.length; i++) {
    let currName = names[i].split(" ");
    firstName[i] = currName[0];
    lastName[i] = currName[1];
  }
  
  for (let i = 0; i < names.length; i++) {
    console.log(`${i+1}) First Name: ${firstName[i]}\t Last Name: ${lastName[i]} \n`);
  }