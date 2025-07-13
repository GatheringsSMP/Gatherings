function theme() {
    const toggleTheme = document.querySelector('.themeToggle')
    let el = document.documentElement

    toggleTheme.addEventListener('click', () => {
        if(el.hasAttribute('t-theme')) {
            el.removeAttribute('t-theme')
            localStorage.removeItem('theme')
        } else {
            el.setAttribute('t-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
    })

    if(localStorage.getItem('theme') !== null) {
        el.setAttribute('t-theme', 'dark')
    }
}

theme()