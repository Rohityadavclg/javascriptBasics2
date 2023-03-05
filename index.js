console.log("chaliye shuru karte he");
// const rectangle=
// {
//     b1:1,
//     b2:2,
//     draw: function ()  {
//         console.log('draw');
//     }
// };
// console.log(rectangle);
// console.log(rectangle.draw());

function createRectangle(O,P)//factory function 
{
    return rectangle=//ya fir sidhe return kar do
    {
      //  b1:b1,
        //b2:b2, ya
        //b1,b2,
        b1:O,
        b2:P,
        draw: function ()  {
            console.log('draw');
        }
    };
   // return rectangle; ya to yaha se return kar do 
};
// rectangle.b1; to access the function take the function 
//name with draw operator
// rectangle.b2;
// rectangle.draw();
// let rectangleObject1=createRectangle(5,4);
// let rectangleObject2=createRectangle(5,4);
// let rectangleObject3=createRectangle(5,4);
// console.log(rectangleObject1);
// console.log(rectangleObject2);
// console.log(rectangleObject3);
//camelcase->numberOfStudent
//constructor function-> pascal Notation->First letter is Capital
function Rect(l,b) {
    //this-> only show the empty object
    this.len=l;
    this.bred=b;
    this.draw=function()
    {
        console.log('Draw');
    }
};
//object creation using constructor object
//let rectObj=new Rect(4,5);
 //dyanmic name of object to add into object 
//rectObj.color='yellow';
//using constuctor object to delete
//console.log(rectObj);
//delete rectObj.color;
//console.log(rectObj);
//console.log(typeof(rectObj));
//console.log(rectObj.constructor);
//console.log(Rect.constructor);
// let Rectangle1 =new Function(//baktick character is ` `
//     'len','bre',
//    ` this.len=len;
//     this.bre=bre;
//     this.draw=function()
//     {
//     console.log('Draw'); 
//     }`);// first paramerter and second parameter and third one using baktick character
//     let rect=new Rectangle1(2,3);
//     rect.len;
//     Rectangle1.name
//     console.log(rect);

// let a=10;
// let b=a;
// ++a;
// console.log(a); //value is 11
// console.log(b); // value is 10
// let a={value:10};
// let b=a;
// a.value++;
// console.log(a.value);//value is 11
//console.log(b.value);//value is 11
// for primitive types ============
// let a=10;
// function inc(a) {
//     a++;
// }
// console.log(a);
// for reference type of value ============
// let a={value:10}
// function inc(a) {
//     a.value++;
// }
// console.log(a);
let rect={
    len:2,
    breadth:3
};
// for(let key in rect)// iretatoin in object
// {
//     //key are reflated through key variable
//     // value are reflated through rect[value]
//     console.log(key,rect[key]);
// }
//it is used in object variable 
// for(let key of Object.entries(rect) )
//  {
//     console.log(key);
//  }
// if ('len' in rect ) {
//     console.log('present');
// } else {
//     console.log('absent');
// }
// first way of cloning ==============
let src={
    a:10,
    b:20,
    c:30
};
// let dest={};
// for(let key in src)
// {
//     dest[key]=src[key];
// }
// console.log(dest);
//second way of cloning===================
// let src2={value:34};
// let dest=Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest);
//third way of cloning 
let dest={...src};
console.log(dest);











 

 