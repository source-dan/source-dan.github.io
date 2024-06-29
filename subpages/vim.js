let editorTextarea = document.getElementById('vim-editor-textarea');
let commandInput = document.getElementById('vim-command-input');
let statusElement = document.getElementById('vim-status');
let mode = 'INSERT'; // initial mode

editorTextarea.addEventListener('input', updateStatus);
editorTextarea.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mode = 'COMMAND';
        commandInput.focus();
        editorTextarea.disabled = true;
    }
});

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // save file to desktop
        let text = editorTextarea.value;
        let blob = new Blob([text], { type: 'text/plain' });
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'file.txt';
        a.click();
        URL.revokeObjectURL(url);

        // reset mode
        mode = 'INSERT';
        editorTextarea.disabled = false;
        commandInput.value = '';
    }
});

function updateStatus() {
    const text = editorTextarea.value;
    const lines = text.split('\n').length;
    const characters = text.length;
    statusElement.textContent = `${lines} lines, ${characters} characters`;
}