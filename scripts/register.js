const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputGender = document.getElementById("txtGender");
const inputG1 = document.getElementById("txtGrade1");
const inputG2 = document.getElementById("txtGrade2");
const inputG3 = document.getElementById("txtGrade3");
const registerBtn = document.getElementById("btnRegister");
const total = document.getElementById("total");


let students=[];

//Object
let school={
    name:"FCITEC",
    address:{
        street:"No name",
        number:"333"
    },
    hour:{
        open:"8:00 am",
        close:"4:00 pm"
    }
}

//Object Constructor
function Student(name,age,gender,g1,g2,g3){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.g1 = g1;
    this.g2 = g2;
    this.g3 = g3;
    //Now we use this for calculating Average
    this.gpa = function(){
        //Display the sum of the grades on the console
        let sum=0;

        sum=(Number(this.g1)+Number(this.g2)+Number(this.g3))/3;
        return(sum.toFixed(2));
    }
}

function register(){
    let newStudent = new Student(inputName.value,inputAge.value,inputGender.value,inputG1.value,inputG2.value,inputG3.value);
    students.push(newStudent);  
    console.log(newStudent);
    displayTotals();
    displayRow();
}

function init(){
    registerBtn.addEventListener('click',register);

    let student1 = new Student("Test",23,"Male",87,88,89);
    let student2 = new Student("Test 2",24,"Male",86,90,92);
    students.push(student1,student2);
    displayRow();
}


window.onload=init; //Wait to render o charge the elements in the HTML