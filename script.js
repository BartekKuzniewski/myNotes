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
		closePanel();
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
            <button class="delete-note">
                <i class="fas fa-times icon"></i>
            </button>
        </div>

        <div class="note-body">
        ${textArea.value}
        </div>
    `;

	cardID++;
	category.selectedValue = 0;
	textArea.value = '';
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
	console.log(selectedValue);
};

addNoteBtn.addEventListener('click', openPanel);
closeNoteBtn.addEventListener('click', closePanel);
saveNoteBtn.addEventListener('click', addNote);
