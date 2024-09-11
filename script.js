function additem(){
    let input =document.getElementById('input');
    let ul = document.getElementById("ul");
    let list = document.createElement('li');
    let button = document.createElement('button');
    let update = document.createElement('button');
    let invalid = document.getElementById('invalid');
    button.innerText = "Remove";
    if(input.value.trim()===""){
        invalid.innerText = 'Input not be empty';
        input.innerText = " ";
    }
    else{
        button.classList.add('delete');
        update.classList.add('update');
        list.textContent = input.value;
        ul.appendChild(list);
        update.innerText = "Update";
        list.appendChild(update);
        list.appendChild(button);
        input.value = " ";
        invalid.innerText = " ";
    }
    button.addEventListener('click', function(){
        list.remove();
    })

    update.addEventListener('click',function(){
      let newvalue  =prompt("enter new value to update");
      list.innerText = newvalue;
      list.appendChild(update);
      list.appendChild(button);
    })
    
    list.addEventListener('click', function(){
        list.classList.toggle('li');
    })

    
}
