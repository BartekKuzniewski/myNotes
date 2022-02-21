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
let cardID = 1;

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	errorMsg.style.visibility = 'hidden';
	textArea.value = '';
	category.selectedIndex = 0;
};

const addNote = () => {
	if (
		textArea.value !== '' &&
		category.options[category.selectedIndex].value !== 0
	) {
		createNote();
		errorMsg.style.visibility = 'hidden';
	} else {
		errorMsg.style.visibility = 'visible';
	}
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);
	noteArea.appendChild(newNote);
	newNote.innerHTML = `
        <div class="note-header">
            <h3 class="note-title">${selectedValue} #${cardID}</h3>
            <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class= "fas fa-times icon"></i>
            </button>
        </div>

        <div class="note-body">
        ${textArea.value}
        </div>
    `;

	cardID++;
	textArea.value = '';
	category.selectedIndex = 0;
    notePanel.style.display = 'none';
	checkColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72, 255, 0)';
			break;
		case 'Praca':
			note.style.backgroundColor = 'rgb(255, 243, 0)';
			break;
		case 'Inne':
			note.style.backgroundColor = 'rgb(0, 170, 255)';
			break;
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = '';
};

addNoteBtn.addEventListener('click', openPanel);
closeNoteBtn.addEventListener('click', closePanel);
saveNoteBtn.addEventListener('click', addNote);
removeNotesBtn.addEventListener('click', deleteAllNotes);
