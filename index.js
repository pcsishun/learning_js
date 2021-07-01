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

//************** Destructuring object  **************//

// เเบบเก่า
let person_detail = {
    name: "Earth",
    skill: "Python, php, js"
}

let name_c = person_detail.name;
let skill = person_detail.skill;
let element_x = `My name is : ${name_c} and skill i have is ${skill}`;

document.getElementById("default_destructuring").innerHTML = element_x;

// เเบบใหม่ 

let player_game = {
    name_g: "Earth",
    skill_g: "Dota, csgo, lol"
};

let {name_g, skill_g}= player_game;
let full_name = `My name is ${name_g} my game skill is ${skill_g}`;

document.getElementById("destructuring").innerHTML = full_name;
//  การใช้งานรูปแบบของ destructuring เป็นการลดขนาดลงของการเรียกใช้ ค่าใน array ออกมา 

//************** Computed Property Name **************// 
// ข้อดีคือสามารถปรับเเก้ไขข้อมูลได้ภายใน object เลย 

let name_menu = "Cake";
let food = {
    [name_menu]:name_menu+"Banana",
    price: 85
}

let result_computed = `${food.Cake} price: ${food.price}`;
document.getElementById("Computed").innerHTML = result_computed;

//************** Shorthand Property & Method **************// 

let name_s = "Earth"; 
let skill_s = "Programer";

let user = {
    name_s, 
    skill_s
};

let result_shorthand1 = `${user.name_s} and skill is: ${user.skill_s}`;
document.getElementById("shorthand1").innerHTML = result_shorthand1;

// นอกเหนือจากนั้นยังสามารถใช้ ร่วมกับ function ได้ด้วยเช่นกัน 

function create_name_skill(name, skill){
    return{
        name,
        skill
    }
};

let result_create_name_skill = create_name_skill(name_s, skill_s);
let result_shorthand2 = `function:: ${result_create_name_skill.name} and skill is : ${result_create_name_skill.skill}`;

document.getElementById("shorthand2").innerHTML = result_shorthand2;

//************** Class JavaScript ES6 ************** //
// รูปเเบบการเขียน js เเบบเดิม 

function User_main(name, age){ // class ต้องเริ่มต้นด้วยตัวพิมพ์ใหญ่ 
    this.name = name // this.name -> เป็นการระบุถึง file property
    this.age = age
}

User_main.prototype.SayHi = function(){
    console.log("Hello = "+this.name + "Age = " +this.age);
    let out_result_e = "Hello = :"+ this.name + "Age = " +this.age;
    return document.getElementById("old-class-js").innerHTML = out_result_e;
}

let user1 = new User_main("Earth", 26);
user1.SayHi();


// รูปเเบบการเขียน js แบบใหม่ 

class User_main_2{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    SayHi(){
        let out_n_result = "Hello ="+this.name+" my age is = "+this.age;
        document.getElementById("new-class-js").innerHTML = out_n_result;
    }
}

let user2 = new User_main_2("Earth", 26);
user2.SayHi();

//************** Inheritance (การสืบทอดคุณสมบัติ) ************** //


class Admin{
    constructor(){
        console.log("Admin constructor is called.")
    }
    isPermission(){
        document.getElementById("Inheritance-admin").innerHTML = "You are login as Admin."
    } 
}

// การสืบทอดของข้อมูลระหว่าง class จะทำการใช้ extends 
class User extends Admin{ // การเขียนลักษณะนี้จะทำให้ Class user ไปดึงคุณสมบัติของ class Admin
    constructor(name_user, age_user){
        super(); // operator super จะทำการเรียกใช้คำสั่งของ class เเม่ที่เราทำการ extends เข้ามา (คือ class Admin)
        this.name_user = name_user, // ค่าตัวนี้เป็นคุณสมบัติใน class ของ user อยู่เเล้ว
        this.age_user = age_user // ค่าตัวนี้เป็นคุณสมบัติใน class ของ user อยู่เเล้ว
    }
    welcomeBack(){
        let result_inheritance = "Welcome back mr "+this.name_user+" now you are "+this.age_user;
        document.getElementById("Inheritance").innerHTML = result_inheritance;
    }

}

let show_result_con = new User("Sorrakrit", 26);
show_result_con.isPermission(); // สังเกตุว่าการใช้ super เรียก คุณสมบัติระหว่าง class Admin เเละ class User เป็นผลให้ เราสามารถใช้งาน method ใน class Admin ได้
show_result_con.welcomeBack();




//************** ************** ************** //
//************** JS for font-end ************** //
//************** ************** ************** //

// This method has coding in alert_js.js with alert_tag.html
// alert("This page test for alert method from js."); 

//************** Array ************** //
// Array = คือการเก็บข้อมูลหลายค่าไว้ในตัวแปร 1 ตัว

let array_aa = [1,2,3,4,5,6,7,8,9,10,11,12,19];

class Math_sum{
    constructor(array_in){
        console.log("math function is running");
        this.array_in = array_in;
    }

    sum_loop(){
        let array_in = this.array_in;
        let sum_array = 0;
        for (let i = 0; i < array_in.length; i++){
            sum_array += array_in[i];
        }

        return sum_array;
    }

    avg_func(){
        let summation_array = this.sum_loop();
        let count_e = this.array_in.length;
        let average = summation_array / count_e;
        let average_deci = average.toFixed(3);

        return average_deci;
    }
}

let result_array_forLoop = new Math_sum(array_aa);
let sum_result = `this is calulate by math class with sum function = ${result_array_forLoop.sum_loop()}`;
let avg_result = `this is calulate by math class with avg function = ${result_array_forLoop.avg_func()}`;
document.getElementById("summation_loop").innerHTML= sum_result;
document.getElementById("avg_class_method").innerHTML = avg_result;


//************** Ternary Operator **************//

// normal if else without ternary operator. 
let avg_resilt_2 = result_array_forLoop.avg_func(); 
let show_the_object;

if (avg_resilt_2 > 8){
    show_the_object = "it more than 8";
    document.getElementById("if-else-Operator").innerHTML = show_the_object;
}else{
    show_the_object = "it less than 8";
    document.getElementById("if-else-Operator").innerHTML = show_the_object;
}

// ternary operator. 

let show_the_object_2;
show_the_object_2 = avg_resilt_2 >7 ? "it more than 7" : "it less than 7"; 
document.getElementById("Ternary-Operator").innerHTML = show_the_object_2;


//************** Switch Case Operator **************//
// Switch คล้ายๆ กับ if เพียงเเต่จำกัดช่องทางไว้เพียงเเค่ 1 element; 

switch (true){
    case (avg_resilt_2 < 0):
        // console.log(avg_resilt_2);
        document.getElementById("switch-case").innerHTML = "your average below 0";
        break;
    case (avg_resilt_2 >= 0 && avg_resilt_2 <= 10):
        // console.log(avg_resilt_2);
        document.getElementById("switch-case").innerHTML = "your are in average";
        break;
    case (avg_resilt_2 > 10):
        // console.log(avg_resilt_2);
        document.getElementById("switch-case").innerHTML = "you are more than average";
        break;
}

//************** Do... while... operator **************//

let sum_i = 0;
let i = 0
while(i <= 100){
    sum_i += i;
    i ++;
}

console.log(sum_i);
document.getElementById("while-loop").innerHTML = sum_i;


