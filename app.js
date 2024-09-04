const list = document.querySelector("ul");
const input = document.querySelector("input");
const add = document.querySelector("button");

add.addEventListener("click", ()=>{   //click function
    const item = input.value;         //speichert eingabe in variable
    input.value = '';                 // leert das eingabefeld
    
    const listItem = document.createElement("li"); 
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.appendChild(span);  //hängt den span an das li
    span.textContent = item;
    listItem.appendChild(deleteBtn);    //hängt entfernenbutton an li
    deleteBtn.textContent = "Entfernen";
    list.appendChild(listItem);         //hängt li an ul

    deleteBtn.addEventListener("click", ()=>{       // löscht Eintrag
        list.removeChild(listItem);
    });
    input.focus();
    if(item == ""){                             //Wenn String bei Eingabe leer ist, wird der leere Punkt sofort wieder gelöscht
        list.removeChild(listItem);
    }
});
