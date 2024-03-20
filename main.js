import './tailwind.css'
import './style.css'

window.toggleDarkMode = () => {
    const html = document.getElementById('htmlElement');
    if (html.classList.contains('dark')) {
        html.classList.add('light')
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark')
        html.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    }
}

window.onload = function (event) {
    const themeSetting = localStorage.getItem('theme');
    if (themeSetting) {
        const html = document.getElementById('htmlElement');
        html.classList.add(themeSetting);
    }
};