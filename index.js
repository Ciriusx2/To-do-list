const title=document.getElementById("title");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");


const task=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")) : [];

showall();

function showall(){
    task.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");
        const div2=document.createElement("div");
        div.append(div2);

        const p=document.createElement("p");
        p.innerText=value.title;
        div2.append(p);

        const span=document.createElement("span");
        span.innerText=value.description;
        div2.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deletebtn");

    btn.innerText="-";
    btn.addEventListener("click",()=>{
        removetasks();
        task.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(task));
        showall();
    })
        
    
    div.append(btn);
    container.append(div);
    })
}
function removetasks(){
    task.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    })
}
  
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removetasks();
    task.push({
        title:title.value,
        description:description.value,
    })
    localStorage.setItem("task",JSON.stringify(task));
    showall();
})

