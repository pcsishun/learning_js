// ************** ตัวแปร const let var: ************** //
// var : การกำหนดว่าทำให้ตัวแปรนั้นถูกมองเห็นเป็น goble 

var title = "Learning JS"
document.getElementById('title').innerHTML = title;
 
//************** let ค่าของตัวแปลสามารถถูเปลี่ยนค่าได้ **************//

let price = 20; // ประกาศตัวแรกเป็น 20
price = 30; // ต่อมาเปลี่ยนเป็น 30 

document.getElementById('show_let').innerHTML = price;

//************** const ค่าของ const จะไม่สามารถเปลี่ยนค่าได้ หากเปลี่ยนจะเกิด error; **************//
// ใช้ try and catch เพิ่อดักจับ error 

const price2 = 20; // สร้างตัวแปร const ขึ้นมา 
try{ 
    price2 = 30; // จากนั้นใช้ try เพื่อให้ลองทำการ เปลี่ยน price2 เป็น 30 
}
catch(err){ // หากมี error ให้เก็บค่าไว้ในตัวแปร err 
    console.log(err);
    document.getElementById('show_const').innerHTML = err.message; // จากนั้นให้เเสดงค่าที่ error โดยเข้าไปใน error เเละ ทำการดึง msg ที่ error ออกมา
}

//************** หากต้องยการเปลี่ยนค่าใน  const สามารถทำได้โดยการทำให้เป็น object {} **************// 

const person = {
    name: "earth",
    city: "CNX"
}

try{
    person.city = "BKK"; 
    console.log(person)
    document.getElementById('show_object').innerHTML = person.city;
}
catch(err){
    document.getElementById('show_object').innerHTML = err.message;
}

 // สังเกตุว่าจะไม่มี error 


 //************** Arrow function  **************// 
 
 // function ทั่วไป 
function calculate_a(a, b){
    let sumation = a + b;
    return (sumation);
}

document.getElementById("function_nor").innerHTML = calculate_a(20, 30);

// Arrow function 
const arrow_function = (a, b) => a+b;
let reult = arrow_function(20, 30)
document.getElementById("function_arrow").innerHTML = reult;

// object with arrow function 

const object_with_arrow = name => ({name:name, city:"CNX"});
let result = object_with_arrow("Earth");
document.getElementById("object_function_arrow").innerHTML = result.name;
document.getElementById("object_function_arrow2").innerHTML = result.city;

 //************** Default Parameter  **************// 
