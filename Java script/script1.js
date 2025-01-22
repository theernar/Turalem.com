// Pop Up Form Open/Close Logic
document.getElementById("openPopup").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("popupForm").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("popupForm")) {
        document.getElementById("popupForm").style.display = "none";
    }
});