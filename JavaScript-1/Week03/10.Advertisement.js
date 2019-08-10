let vehicleList = ['motorbike', 'caravan', 'bike'];

let newList = "";

for (let i = 0; i < vehicleList.length; i++) {
  newList += vehicleList[i] + "s" + "," + "";
}

newList += "" + "and trollys"

console.log("Amazing Joe's Garage, we service" + " " + newList);