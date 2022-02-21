const addNoteBtn = document.querySelector('.add');
const removeNotesBtn = document.querySelector('.delete-all');
const deleteNoteBtn = document.getElementsByClassName('delete-note');
const saveNoteBtn = document.querySelector('.save');
const closeNoteBtn = document.querySelector('.cancel');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const errorMsg = document.querySelector('.error');

let selectedValue;
let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex';
}

const closePanel = () => {
    notePanel.style.display = 'none';
    errorMsg.style.visibility = 'hidden';
    textArea.value = '';
    category.selectedIndex = 0;
}


addNoteBtn.addEventListener('click', openPanel);
closeNoteBtn.addEventListener('click', closePanel)