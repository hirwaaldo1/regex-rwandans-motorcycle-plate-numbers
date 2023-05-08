const regex = /^(r|R)[a-zA-Z] ?\d{3}[a-zA-Z]$/;
// Remember to convert your number to a string if you are using JavaScript. You can use the toString() method.
const plateNumber = "Rc 123x" || "Rc432x" || "rc123x";
const wrongPlateNumber = "fakeNumber" || "yc123x" || "rc123";
regex.test(plateNumber); //true
regex.test(wrongPlateNumber); //false
