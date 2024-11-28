//Method-1: at()
var arr = [10,20,30,40,50,60,70];
console.log(arr.at(2));
console.log(arr.at(-2));
console.log(arr.at(20));
console.log(arr.at());


//Method-2: unshift()
var arr = [10,20,30,40,50,60,70];
var res = arr.unshift(11,22,33,44,55,66);
console.log(arr);
console.log(res);
var res1 = arr.unshift();
console.log(arr);
console.log(res1);


//Method-3: shift()
var arr =[11,22,33,44,55,66];
var res = arr.shift(3);
console.log(arr);
console.log(res);

//Method-4: push();
var arr = [12,13,14,15,16,17];
var res = arr.push()
console.log(arr);
console.log(res);

//Method-5: pop()
var arr = [11,12,13,14,15,16,17]
var res = arr.pop();
console.log(arr);
console.log(res);


//Method-6: fill()
var arr = [10,20,30,40,50,60];
console.log(arr.fill(0));

var arr = [10,20,30,40,50,60];
console.log(arr.fill(0,2,3));

var arr = [10,20,30,40,50,60];
console.log(arr.fill(0,-5,-10));


//Method-7: Slice()
var arr = [10,20,30,40,50,60];
console.log(arr.slice())

var arr = [10,20,30,40,50,60];
console.log(arr.slice(2))

var arr = [10,20,30,40,50,60];
console.log(arr.slice(2,4));


var arr = [10,20,30,40,50,60];
console.log(arr.slice(2,10));

var arr = [10,20,30,40,50,60];
console.log(arr.slice(-10,-2));

var arr = [10,20,30,40,50,60];
console.log(arr.slice(-1,-2));



//Method-8 : Splice()
var arr = [11,22,33,44,55,66,77];
var res = arr.splice();
console.log(arr);
console.log(res);

var arr = [11,22,33,44,55,66,77];
var res = arr.splice(2,4);
console.log(arr);
console.log(res);

var arr = [11,22,33,44,55,66,77];
var res = arr.splice(2,4, 54,67,92,98,101,32);
console.log(arr);
console.log(res);

var arr = [11,22,33,44,55,66,77];
var res = arr.splice(2);
console.log(arr);
console.log(res);

//Method-9: indexof();
var arr = [11,22,33,11,44,55,11,66,77,11];
console.log(arr.indexOf(11));

var arr = [11,22,33,11,44,55,11,66,77,11];
console.log(arr.indexOf(99));

//Method-10: concat()
var arr = [10,20,30,40,50,60];
console.log(arr.concat(11,22,33,[99,88,77,66], [12,13,14,15]));
console.log(arr);


var arr = [10,20,30,40,50,60];
var res=arr.concat();
console.log(res);


//Method-11: join()
var arr = [11,12,13,14,15,16,17,18];
console.log(arr.join());
console.log(arr.join("?"));
console.log(arr.join("e"));

//Method-12: isArray()

var arr = [1,2,3,4,5];
console.log(Array.isArray(arr));

var arr = "12345";
console.log(Array.isArray(arr));