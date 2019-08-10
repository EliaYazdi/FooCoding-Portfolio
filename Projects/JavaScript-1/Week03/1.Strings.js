let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log (myString.length);

//Find a way to remove the commas from the string and replace them with spaces:

myString = myString.replace(/,/ , "");
console.log (myString);