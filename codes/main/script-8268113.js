document.querySelector('.hamburger-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

document.getElementById("search-btn").addEventListener("click", function() {
    var searchTerm = document.getElementById("search-box").value;
    alert("Searching for: " + searchTerm);
    // You can replace the alert with your search functionality
});
