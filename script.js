const clear = document.querySelector(".clear");

/*let btnCross = document.querySelectorAll(".remove-item");
const listItems = document.querySelectorAll("li");


let newList = document.createElement("li");
let newP = document.createElement("p");
let newB = document.createElement("button");
let newBA = document.createElement("button");
const free = document.querySelectorAll("i");
let paraG = document.querySelectorAll("p");

const header = document.querySelector("h2");*/
const ul = document.querySelector(".list-items");
const input = document.querySelector("input");
const btnAdd = document.querySelector("#item-2");
let linkTag = document.createElement("link");
linkTag.rel="stylesheet";
linkTag.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css";
linkTag.integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==";
linkTag.crossOrigin="anonymous";
linkTag.referrerPolicy="no-referrer";

btnAdd.addEventListener("click",()=>{
    if(input.value===""){
       alert("add item");
    }
    else{
        let li = document.createElement("li");
    let paraG=document.createElement("p");
    let inner =document.createElement("button");
    let icon = document.createElement("i");
      let removeItem = document.createElement("button");
      paraG.className ="sell";
      inner.className="inner";
      inner.textContent="Pending.."
      removeItem.className = "remove-item";
      icon.className="fa-solid fa-xmark";
      paraG.textContent=input.value;
     removeItem.appendChild(icon);
    
     li.appendChild(paraG);
     li.appendChild(inner);
     li.appendChild(removeItem);
     ul.appendChild(li);
     saveData();
       }   
})
ul.addEventListener("click",(e)=>{
  let paraG= document.createElement("P");
  paraG.className="sell";
  if(e.target.classList.contains("inner")){
    e.target.textContent="Complete";
    alert(`please remove selected item`);
  }
  else if(e.target.classList.contains("remove-item")){
    e.target.parentElement.remove();
    saveData();
  }

})
 clearList=()=>{
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
}
clear.addEventListener("click",()=>{
    clearList();
});
saveData=()=>{
  localStorage.setItem("data",ul.innerHTML)
}
showTask=()=>{
  ul.innerHTML=localStorage.getItem("data")
}
showTask()
