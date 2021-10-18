let addBtn = document.getElementById('addBtn');
let toDoList = document.getElementById('toDoList');
let inputText = document.getElementById('inputText');


addBtn.addEventListener('click', function() {
    var list = document.createElement('ul')
    list.innerText = inputText.value;
    toDoList.appendChild(list);
    inputText.value = '';
        list.addEventListener('click', function() {
            // list.style.textDecoration = 'line-through';
            list.className = 'line-through';
            setTimeout(() => {
                list.className = 'fade-out'
            }, 500);
            setTimeout(() => {
                toDoList.removeChild(list);
            }, 1000);
        })
})