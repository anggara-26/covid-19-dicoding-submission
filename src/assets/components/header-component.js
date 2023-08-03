import img from '../img/covid-19-logo.jpg';

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="flex items-center justify-between w-full h-14 shadow bg-blue-400 sticky top-0">
                <div class="">
                    <img src="${img}" alt="covid-info-logo" class="h-14">
                </div>
                <div class="mr-4 text-white">
                    <div class="hover:underline cursor-pointer">What is Covid-19?</div>
                </div>
            </header>
        `
    }
}

window.customElements.define('header-component', HeaderComponent);