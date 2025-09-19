
button.addEventListener('click', function() {
    if (input.value !== '') {
        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('ul');
        const li = document.createElement('li');
        const deletebutton = document.createElement('button');
        li.textContent = input.value;
        deletebutton.textContent = 'X';
        li.append(deletebutton);
        list.append(li);
    }
    deleteButton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
});
});
