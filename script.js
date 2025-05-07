function removetask(index){
    let ele = document.getElementById(index);
    ele.parentNode.removeChild(ele);
}

function add_task(){
    let count = 1;
    let addele = document.querySelector("input");
    let content = addele.value;
    console.log(content);
    let newele = document.createElement("div");
    newele.innerHTML = "<div>" + ":----   " + content + '<button onclick="removetask(' + count + ')">Remove Task</button>' + "</div>";
    newele.setAttribute("id",count);
    let parent = document.querySelector("#todolist");
    parent.appendChild(newele);
    count++;
} 