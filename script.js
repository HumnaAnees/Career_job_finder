document.getElementById('searchBtn').addEventListener('click', function () {
    const company = document.getElementById('companySearch').value;
    const distance = document.getElementById('distanceFilter').value;
    
    if (company === "" || distance === "") {
        alert("Please fill in both fields!");
    } else {
        alert(`Searching for "${company}" within ${distance} miles...`);
    }
});

