function toggleContent(id) {
    var content = document.getElementById(id);
    var button = content.previousElementSibling;

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = button.textContent.replace("➕", "➖");
    } else {
        content.style.display = "none";
        button.textContent = button.textContent.replace("➖", "➕");
    }
}
