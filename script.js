// Sample data for demonstration
const sections = [
    { id: 1, title: 'Section 1', description: 'Description for Section 1' },
    { id: 2, title: 'Section 2', description: 'Description for Section 2' },
    { id: 3, title: 'Section 3', description: 'Description for Section 3' }
];

// Splash Screen and Home Page
document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('splashScreen').classList.add('hidden');
    document.getElementById('homePage').classList.remove('hidden');
    populateLawList();
});

function populateLawList() {
    const lawListElement = document.getElementById('lawList');
    lawListElement.innerHTML = sections.map(section => `
        <li onclick="viewDetails(${section.id})">${section.title}</li>
    `).join('');
}

// Details Page
function viewDetails(id) {
    const section = sections.find(s => s.id === id);
    if (section) {
        document.getElementById('sectionTitle').textContent = section.title;
        document.getElementById('sectionDescription').textContent = section.description;
        
        const currentIndex = sections.indexOf(section);
        
        document.getElementById('prevButton').onclick = () => {
            const prevIndex = (currentIndex > 0) ? currentIndex - 1 : sections.length - 1;
            viewDetails(sections[prevIndex].id);
        };
        
        document.getElementById('nextButton').onclick = () => {
            const nextIndex = (currentIndex < sections.length - 1) ? currentIndex + 1 : 0;
            viewDetails(sections[nextIndex].id);
        };
    }
}

// Admin Panel
document.getElementById('adminForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const newId = sections.length ? sections[sections.length - 1].id + 1 : 1;
    sections.push({ id: newId, title, description });
    alert('Law section added!');
    document.getElementById('adminForm').reset();
});
