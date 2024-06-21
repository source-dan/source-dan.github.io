// script.js

const output = document.getElementById('output');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

let commandHistory = [];
let currentCommand = '';
let cwd = '~/';

// Add a prompt to load the help command when the website loads
input.value = 'help';
executeCommand();

submit.addEventListener('click', executeCommand);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    executeCommand();
  }
});

function executeCommand() {
  const command = input.value.trim();
  if (command !== '') {
    commandHistory.push(command);
    currentCommand = command;
    output.innerHTML += `<span class="prompt">$</span> <span class="command">${command}</span>\n`;
    executeCommandLogic(command);
    input.value = '';
  }
}

function executeCommandLogic(command) {
  switch (command) {
    case 'ls':
      output.innerHTML += '<span class="file">socials.txt</span>\n<span class="file">file2.txt</span>\n<span class="file">about.txt</span>\n<span class="folder">folder1/</span>\n';
      break;
    case 'cd':
      cwd = '~/';
      output.innerHTML += `<span class="output">Changed directory to ${cwd}</span>\n`;
      break;
    case 'cd folder1':
      cwd = '~/folder1';
      output.innerHTML += `<span class="output">Changed directory to ${cwd}</span>\n`;
      break;
    case 'echo hello':
      output.innerHTML += '<span class="output">hello</span>\n';
      break;
    case 'echo about.txt':
      output.innerHTML += '<span class="output">17 Year Old Software Development Student</span>\n';
      output.innerHTML += '<span class="output">German</span>\n';
      output.innerHTML += '<span class="output">Linux & BSD Enthusiast</span>\n';
      output.innerHTML += '<span class="output">Open Source Advocate</span>\n';
      break;
    case 'echo socials.txt':
      output.innerHTML += '<span class="output">Discord: source-danux</span>\n';
      break;
    case 'neofetch':
      output.innerHTML += '<span class="output">         /_/\  \n';
      output.innerHTML += '<span class="output">  ( o.o ) \n';
      output.innerHTML += '<span class="output">   > ^ <\n';
      output.innerHTML += '<span class="output">---------------\n';
      output.innerHTML += '<span class="output">OS: Linux\n';
      output.innerHTML += '<span class="output">Host: source-danux\n';
      output.innerHTML += '<span class="output">Kernel: 5.10.0-8-amd64\n';
      output.innerHTML += '<span class="output">WM: dwm\n';
      output.innerHTML += '<span class="output">Uptime: 1 hour 30 minutes\n';
      output.innerHTML += '<span class="output">Packages: 1500\n';
      output.innerHTML += '<span class="output">Shell: zsh 5.9\n';
      output.innerHTML += '<span class="output">Resolution: 1920x1080\n';
      output.innerHTML += '<span class="output">---------------\n';
      break;
    case 'help':
      output.innerHTML += '<span class="output">Available commands:</span>\n';
      output.innerHTML += '<span class="output">  ls: List files and directories in the current directory</span>\n';
      output.innerHTML += '<span class="output">  cd: Change directory</span>\n';
      output.innerHTML += '<span class="output">  cd &lt;directory&gt;: Change directory to the specified directory</span>\n';
      output.innerHTML += '<span class="output">  echo &lt;message&gt;: Print the specified message to the console</span>\n';
      output.innerHTML += '<span class="output">  neofetch: Display system information</span>\n';
      output.innerHTML += '<span class="output">  help: Display this help message</span>\n';
      output.innerHTML += '<span class="output">  pwd: Print the current working directory</span>\n';
      output.innerHTML += '<span class="output">  mkdir: Create a new directory</span>\n';
      output.innerHTML += '<span class="output">  touch: Create a new file</span>\n';
      output.innerHTML += '<span class="output">  clear: Clear the console output</span>\n';
      break;
    case 'pwd':
      output.innerHTML += `<span class="output">${cwd}</span>\n`;
      break;
    case 'clear':
      output.innerHTML = '';
      break;
    default:
      if (command.startsWith('mkdir ')) {
        const dirName =command.substring(6);
        output.innerHTML += `<span class="output">Created directory ${dirName}</span>\n`;
      } else if (command.startsWith('touch ')) {
        const fileName = command.substring(6);
        output.innerHTML += `<span class="output">Created file ${fileName}</span>\n`;
      } else {
        output.innerHTML += '<span class="output">Unknown command. Type "help" for available commands.</span>\n';
      }
      break;
  }
}