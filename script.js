document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('festivalForm');
    const festivalsList = document.getElementById('festivalsList');

    // Load existing festivals from localStorage
    loadFestivals();

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const festival = {
            name: document.getElementById('name').value,
            date: document.getElementById('date').value,
            location: document.getElementById('location').value,
            significance: document.getElementById('significance').value,
            traditions: document.getElementById('traditions').value,
            food: document.getElementById('food').value,
            celebrations: document.getElementById('celebrations').value
        };

        // Save to localStorage
        saveFestival(festival);

        // Clear form
        form.reset();

        // Reload festivals list
        loadFestivals();
    });

    function saveFestival(festival) {
        let festivals = JSON.parse(localStorage.getItem('indianFestivals')) || [];
        festivals.push(festival);
        localStorage.setItem('indianFestivals', JSON.stringify(festivals));
    }

    function loadFestivals() {
        const festivals = JSON.parse(localStorage.getItem('indianFestivals')) || [];
        festivalsList.innerHTML = '';

        if (festivals.length === 0) {
            festivalsList.innerHTML = '<p>No festivals collected yet.</p>';
            return;
        }

        festivals.forEach(festival => {
            const festivalDiv = document.createElement('div');
            festivalDiv.className = 'festival-item';
            festivalDiv.innerHTML = `
                <h3>${festival.name}</h3>
                <p><strong>Date:</strong> ${festival.date}</p>
                <p><strong>Location:</strong> ${festival.location}</p>
                <p><strong>Significance:</strong> ${festival.significance}</p>
                <p><strong>Traditions:</strong> ${festival.traditions}</p>
                <p><strong>Food:</strong> ${festival.food}</p>
                <p><strong>Celebrations:</strong> ${festival.celebrations}</p>
            `;
            festivalsList.appendChild(festivalDiv);
        });
    }
});
