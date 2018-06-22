function testFunction(){
    console.log("Testing my function..");
}
function testFunction2(){
    console.log("Testing my function..this should run first??");
}
setTimeout(testFunction, 10000);
setTimeout(testFunction2, 2000);