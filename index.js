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
try {
    price2 = 30; // จากนั้นใช้ try เพื่อให้ลองทำการ เปลี่ยน price2 เป็น 30 
} catch (err) { // หากมี error ให้เก็บค่าไว้ในตัวแปร err 
    console.log(err);
    document.getElementById('show_const').innerHTML = err.message; // จากนั้นให้เเสดงค่าที่ error โดยเข้าไปใน error เเละ ทำการดึง msg ที่ error ออกมา
}

//************** หากต้องยการเปลี่ยนค่าใน  const สามารถทำได้โดยการทำให้เป็น object {} **************// 

const person = {
    name: "earth",
    city: "CNX"
}

try {
    person.city = "BKK";
    console.log(person)
    document.getElementById('show_object').innerHTML = person.city;
} catch (err) {
    document.getElementById('show_object').innerHTML = err.message;
}

// สังเกตุว่าจะไม่มี error 


//************** Arrow function  **************// 

// function ทั่วไป 
function calculate_a(a, b) {
    let sumation = a + b;
    return (sumation);
}

document.getElementById("function_nor").innerHTML = calculate_a(20, 30);

// Arrow function 
const arrow_function = (a, b) => a + b;
let reult = arrow_function(20, 30)
document.getElementById("function_arrow").innerHTML = reult;

// object with arrow function 

const object_with_arrow = name => ({ name: name, city: "CNX" });
let result = object_with_arrow("Earth");
document.getElementById("object_function_arrow").innerHTML = result.name;
document.getElementById("object_function_arrow2").innerHTML = result.city;

//************** Default Parameter  **************// 

// undfined is if the variable is null it will be ... something that we have set; 


function default_parameter(x, y) {
    if (y === undefined) {
        y = 0;
        let result = x + y;
        return (result);
    } else {
        let result = x + y;
        return (result);
    }
}

let first_x = 20;
let fitst_y;

let result_function = default_parameter(first_x, fitst_y);
document.getElementById("default_param").innerHTML = result_function;

//************** Default Parameter  **************//

function rest_function(x, y, z) {
    let sumation = x + y + z;
    return (sumation);
}

const number_array = [5, 10, 15];
//console.log(rest_function(...number_array));

try {
    // not use rest operator it will get error 
    console.log(rest_function(number_array));
    let result_rest = rest_function(number_array);
    document.getElementById("rest_operator").innerHTML = result_rest;
} catch (err) {
    console.log(err);
    let error_result = err;
    document.getElementById("rest_operator").innerHTML = error_result;
}

// use rest operator

try {
    console.log(rest_function(...number_array));
    let result_rest2 = rest_function(...number_array);
    document.getElementById("rest_operator2").innerHTML = result_rest2;
} catch (err) {
    console.log(err);
}

//************** speard operator  **************//

let array_a = [1,2,3];
let array_b = [4,5,6];

document.getElementById("Speard-array1").innerHTML = array_a;
document.getElementById("Speard-array2").innerHTML = array_b;

array_a.push(...array_b);

document.getElementById("Speard-operator").innerHTML = array_a;

array_c = [...array_a, ...array_b];
document.getElementById("Speard-operator2").innerHTML = array_c;

//************** Template Literals  **************//

const firstname = "Sorrakrit";
const lastname = "Chaiyaworrakamol"

let fullname = `Template literals = my first name is ${firstname} and my lastname is ${lastname}`;
document.getElementById("Template-Literals").innerHTML = fullname;

//************** Destructuring  **************//


