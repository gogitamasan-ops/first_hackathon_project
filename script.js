const learnButton = document.getElementById("learnButton");
const message = document.getElementById("message");

learnButton.addEventListener("click", function () {
    message.textContent =
        "Welcome! Our team is working to turn innovative ideas into reality.";

    learnButton.textContent = "Project Explored";
});