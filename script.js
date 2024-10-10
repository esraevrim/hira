document.getElementById("showContentButton").addEventListener("click", function() {
    const contentContainer = document.querySelector(".content-box");
    if (contentContainer.style.display === "none" || contentContainer.style.display === "") {
        contentContainer.style.display = "flex"; // Show the content
    } else {
        contentContainer.style.display = "none"; // Hide the content
    }
});
