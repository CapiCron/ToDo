let DB;
let id;

function firstTimeRun(){
    let retreivedDB = localStorage.getItem("DB");
    if(retreivedDB === null || retreivedDB === undefined || retreivedDB == ''){
        DB = [];
        id=1;
    }else{
        DB = JSON.parse(retreivedDB);
        id = DB.length+1;
    }
}

firstTimeRun();

function dev(){
    console.log(conTaskName);
    console.log(conTaskUrgency);
    console.log(conTaskDate);
    console.log(conTaskDescription);
}

function addItemToDB(){
    firstTimeRun()
    let conTaskName = document.getElementById("TaskName").value
    let conTaskUrgency = document.getElementById("TaskUrgency").value
    let conTaskDate = document.getElementById("TaskDate").value
    let conTaskDescription = document.getElementById("TaskDescription").value
    DB.push([
        {
            "id": id,
            "taskName":conTaskName,
            "taskUrgency": conTaskUrgency,
            "taskDate": conTaskDate,
            "taskDescription": conTaskDescription
        }
    ])
    localStorage.setItem("DB",JSON.stringify(DB))
    clearForm();
    ShowDB();
}

function clearForm(){
document.getElementById("TaskName").value = ''
document.getElementById("TaskUrgency").value= ''
document.getElementById("TaskDate").value= ''
document.getElementById("TaskDescription").value= ''

}

function ShowDB(){
 if(!DB.length == 0){


    let varTable = `<table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Urgency</th>
        <th scope="col">Due Date</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>`;
    console.log(DB[0][0].id)
    for (let i = 0; i < DB.length; i++){
        
        varTable += '<tr><th scope="row">' + DB[i][0].id + '</th>';
        varTable += createCell(DB[i][0].taskName)
        varTable += createCell(DB[i][0].taskUrgency)
        varTable += createCell(DB[i][0].taskDate)
        varTable += createCell(DB[i][0].taskDescription)
    }

    document.getElementById("taskOutput").innerHTML = varTable;
}else{
    document.getElementById("taskOutput").innerHTML = "No Tasks!";
}
}

function createCell(entry){
    let cellOpen = '<td>';
    let cellClose = '</td>';
    let string = cellOpen + entry + cellClose;

    return string;


}

function Drop(){
    localStorage.setItem("DB","")

    DB = [];
    ShowDB();
}



