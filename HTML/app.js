const editor = document.getElementById('editor');

const titleInput = document.getElementById('docTitle');

const docList = document.getElementById('docList');

const statusText = document.getElementById('status');

const newDocBtn = document.getElementById('newDocBtn');



let documents = JSON.parse(localStorage.getItem('documents')) || [];

let activeDocId = null;

let saveTimer;



/* ---------- STORAGE ---------- */

function saveStorage() {

  localStorage.setItem('documents', JSON.stringify(documents));

}



/* ---------- UI ---------- */

function renderDocList() {

  docList.innerHTML = '';

  documents.forEach(doc => {

    const div = document.createElement('div');

    div.className = 'doc-item' + (doc.id === activeDocId ? ' active' : '');

    div.textContent = doc.title || 'Untitled';

    div.onclick = () => loadDocument(doc.id);

    docList.appendChild(div);

  });

}



/* ---------- DOCUMENT LOGIC ---------- */

function createDocument() {

  const doc = {

    id: Date.now(),

    title: 'Untitled document',

    content: ''

  };



  documents.unshift(doc);

  saveStorage();

  loadDocument(doc.id);

}



function loadDocument(id) {

  const doc = documents.find(d => d.id === id);

  if (!doc) return;



  activeDocId = id;

  titleInput.value = doc.title;

  editor.innerHTML = doc.content;



  renderDocList();

}



/* ---------- AUTOSAVE ---------- */

function autoSave() {

  if (!activeDocId) return;



  statusText.textContent = 'Saving...';

  clearTimeout(saveTimer);



  saveTimer = setTimeout(() => {

    const doc = documents.find(d => d.id === activeDocId);

    if (!doc) return;



    doc.title = titleInput.value;

    doc.content = editor.innerHTML;

    saveStorage();



    statusText.textContent = 'Saved';

    renderDocList();

  }, 400);

}



/* ---------- EVENTS ---------- */

editor.addEventListener('input', autoSave);

titleInput.addEventListener('input', autoSave);

newDocBtn.addEventListener('click', createDocument);



/* ---------- INIT ---------- */

if (documents.length > 0) {

  loadDocument(documents[0].id);

} else {

  createDocument();

}

