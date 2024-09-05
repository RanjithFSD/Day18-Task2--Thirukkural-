document.addEventListener("DOMContentLoaded", () => {
    const tamilElement = document.getElementById("kural-tamil");
    const englishElement = document.getElementById("kural-english");
    const fetchKuralButton = document.getElementById("fetch-kural");

    // Function to fetch a random Thirukkural
    function fetchRandomThirukkural() {
        const randomId = Math.floor(Math.random() * 1330) + 1; // There are 1330 Kurals

        fetch(`https://api-thirukkural.vercel.app/api?num=${randomId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update the UI with the Kural in Tamil and its English translation
                tamilElement.textContent = data.line1 + " " + data.line2;
                englishElement.textContent = data.eng;
            })
            .catch(error => {
                console.error('Error fetching Thirukkural:', error);
                tamilElement.textContent = 'Failed to load Kural. Please try again.';
                englishElement.textContent = '';
            });
    }

    // Initial fetch when page loads
    fetchRandomThirukkural();

    // Event listener for the button to fetch a new Kural
    fetchKuralButton.addEventListener("click", fetchRandomThirukkural);
});
