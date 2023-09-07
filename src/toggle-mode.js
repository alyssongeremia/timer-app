let darkMode = true;
const buttonToggleMode = document.getElementById('toggle-mode');

buttonToggleMode.addEventListener('click', (event) => {

    document.documentElement.classList.toggle('light') // ativar e desativar cores

    const mode = darkMode ? 'light' : 'dark'

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

    darkMode = !darkMode
})