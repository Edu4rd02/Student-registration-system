function displayRow(){
    const Table = document.getElementById("studentList");
    let row="";

    for(let i=0;i<students.length;i++){
        let student = students[i];
        row+=`
            <tr>
                <td>${i+1}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.gender}</td>
                <td>${student.email}</td>
                <td>${student.g1}</td>
                <td>${student.g2}</td>
                <td>${student.g3}</td>
                <td>${student.gpa()}</td>
                <td><button onclick=removeElement(${i})>Delete</button></td>
            </tr>
        `;
    }
    Table.innerHTML=row;
}

function displayTotals(){
    document.getElementById('total').innerHTML=students.length;
}

function removeElement(id){
    students.splice(id,1);

    displayRow();
}