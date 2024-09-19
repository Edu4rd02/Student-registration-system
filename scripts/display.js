//Here the program creates a new row for each student in the list
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
                <td>
                    <button class="btn btn-sm btn-outline-danger" onclick=removeElement(${i})>
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
        `;
    }
    Table.innerHTML=row;
}

//This function displays the total students that are registered on the web
function displayTotals(){
    document.getElementById('total').innerHTML=students.length;
}

//This function receives student id that will be remove from the registry
function removeElement(id){
    students.splice(id,1);

    displayRow();
    displayTotals();
}