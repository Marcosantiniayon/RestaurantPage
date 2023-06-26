import createHome from './home';
import createMenu from './menu';
import createContact from './contact';
import createHeader from './header';

createHeader();
loadPage();

function loadPage() {
    changeContent(createHome);
    setActiveTab('homeTab');

    document.getElementById('homeTab').addEventListener('click', () => { changeContent(createHome); setActiveTab('homeTab'); });
    document.getElementById('menuTab').addEventListener('click', () => { changeContent(createMenu); setActiveTab('menuTab'); });
    document.getElementById('contactTab').addEventListener('click', () => { changeContent(createContact); setActiveTab('contactTab'); });
}

function setActiveTab(tabId) {
    // remove 'active' class from all tabs
    const tabs = document.querySelectorAll('#tabs button');
    tabs.forEach(tab => tab.classList.remove('active'));

    // add 'active' class to the current tab
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}


// This function is responsible for the fade out and in effect
function changeContent(newContentFunction) {
    const content = document.getElementById('content');

    // Add the fade out class
    content.classList.add('fade-out');

    // After the transition is done, clear and replace the content, then remove the fade out class
    setTimeout(() => {
        clearContent();
        newContentFunction();
        content.classList.remove('fade-out');
    }, 500);
}

// This function just clears the content
function clearContent() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

document.getElementById('menuTab').addEventListener('click', () => { 
    console.log('menuTab clicked');
    changeContent(createMenu); 
    setActiveTab('menuTab'); 
});
