import createHome from './home';
import createMenu from './menu';
import createContact from './contact';
import createHeader from './header';

function loadPage() {
    createHome();
    
    document.getElementById('homeTab').addEventListener('click', () => {
        clearContent();
        createHome();
    });

    document.getElementById('menuTab').addEventListener('click', () => {
        clearContent();
        createMenu();
    });

    document.getElementById('contactTab').addEventListener('click', () => {
        clearContent();
        createContact();
    });
}

function clearContent() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

createHeader();
loadPage();
