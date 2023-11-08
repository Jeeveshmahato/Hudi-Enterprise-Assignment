
function loadContent(sectionId) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    
    const content = `
        <h2>${sectionId}</h2>
        <p>This is the content for the ${sectionId} section.</p>
    `;

    contentDiv.innerHTML = content;
}


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1); // Remove the "#" symbol
        loadContent(sectionId);
    });
});


loadContent('home');
