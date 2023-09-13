// var myElement = document.querySelector(".headroom");
// var headroom  = new Headroom(myElement);
// headroom.init();

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('mobile-menu--open');
}

document.querySelector('.mobile-menu-trigger').addEventListener("click", toggleMobileMenu);

function toggleThemeMenu() {
    const themeMenu = document.querySelector('.theme-menu');
    themeMenu.classList.toggle('theme-menu--open');
    themeMenu.toggleAttribute('inert');
}

document.querySelector('.theme-menu-trigger').addEventListener("click", toggleThemeMenu);

class ThemeSwitcher {
    constructor() {
        // define some state variables
        this.activeTheme = 'default'
        this.hasLocalStorage = typeof Storage !== 'undefined'

        // get all the theme buttons from before
        this.themeSelectBtns = document.querySelectorAll('button[data-theme-id]')
        this.init()
    }

    init() {
        // determine if there is a preferred theme
        const systemPreference = this.getSystemPreference()
        const storedPreference = this.getStoredPreference()

        // explicit choices overrule system defaults
        if (storedPreference) {
            this.activeTheme = storedPreference
        } else if (systemPreference) {
            this.activeTheme = systemPreference
        }

        // when clicked, get the theme id and pass it to a function
        Array.from(this.themeSelectBtns).forEach((btn) => {
            const id = btn.dataset.themeId
            btn.addEventListener('click', () => this.setTheme(id))
        })
    }

    getSystemPreference() {
        // check if the system default is set to darkmode
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
        return false
    }

    getStoredPreference() {
        // check if the user has selected a theme before
        if (this.hasLocalStorage) {
            return localStorage.getItem("theme")
        }
        return false
    }

    setTheme(id) {
        // set the theme id on the <html> element...
        this.activeTheme = id
        document.documentElement.setAttribute('data-theme', id)
    
        // and save the selection in localStorage for later
        if (this.hasLocalStorage) {
            localStorage.setItem("theme", id)
            console.log('stored theme')
        }
    }
}

// this whole thing only makes sense if custom properties are supported -
// so let's check for that before initializing our switcher.
if (window.CSS && CSS.supports('color', 'var(--fake-var)')) {
    new ThemeSwitcher()
}