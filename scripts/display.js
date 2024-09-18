function displayRow(){
    const Table = document.getElementById("studentList");
    let row;

    for(let i=0;i<students.length;i++){
        let student = students[i];
        row+=`
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.gender}</td>
                <td>${student.g1}</td>
                <td>${student.g2}</td>
                <td>${student.g3}</td>
                <td>${student.gpa()}</td>
            </tr>
        `;
    }
    Table.innerHTML=row;
}

function displayTotals(){
    document.getElementById('total').innerHTML=students.length;    
}