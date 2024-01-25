// Create close button and to each item
const myList=document.getElementsByTagName("LI")
for (let i=0; i<myList.length; i++){
    const span=document.createElement("SPAN");
    const txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

// Click on a close button to hide the current items
const close=document.getElementsByClassName("close");
for (let i=0; i<close.length; i++){
    close[i].onclick=function(){
        const div=this.parentElement;
        div.style.display="none";
    }
}

// Add checked symbol when clicking
const list=document.querySelector('ul');
list.addEventListener('click',function(ev){
    if (ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }
},false);

// Create a new list item when clicking on add button
function newElement(){
    const li=document.createElement("li");
    const inputValue=document.getElementById("myInput").value;
    const t=document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue===''){
        alert("You must do something!")
    } else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value="";

    const span=document.createElement("SPAN");
    const txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i=0; i<close.length; i++){
        close[i].onclick=function(){
            const div=this.parentElement;
            div.style.display="none";
        }
    }
}
