//Multiplication Table

var a = []
for(let number=1; number<10; number++){
    for(let i = 1; i < 10; i++) {

        // multiply i with number
        const result = i * number;

        // display the result
        a[i] = i+'*'+number+"="+result
    }
    console.log(a[1]);
    console.log(a[2]);
    console.log(a[3]);
    console.log(a[4]);
    console.log(a[5]);
    console.log(a[6]);
    console.log(a[7]);
    console.log(a[8]);
    console.log(a[9]);
}