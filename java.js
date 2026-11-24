const selectorInput = document.getElementById("selectorInput");
const highlightBtn = document.getElementById("highlightBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

// Highlight Button
highlightBtn.addEventListener("click", function() {

    // Remove previous highlights
    const previous = document.querySelectorAll(".active-highlight");

    previous.forEach(element => {
        element.classList.remove("active-highlight");
    });

    const selector = selectorInput.value.trim();

    // Check if input is empty
    if (selector === "") {
        message.style.color = "red";
        message.textContent = "Please enter a CSS selector!";
        return;
    }

    try {
        // Find matching elements
        const elements = document.querySelectorAll(selector);

        // Check if elements exist
        if (elements.length === 0) {
            message.style.color = "red";
            message.textContent = "No matching elements found!";
            return;
        }

        // Apply highlight class
        elements.forEach(element => {
            element.classList.add("active-highlight");
        });

        message.style.color = "green";
        message.textContent = elements.length +
            " element(s) highlighted successfully!";

    } catch (error) {
        message.style.color = "red";
        message.textContent = "Invalid CSS selector!";
    }
});


// Reset Button
resetBtn.addEventListener("click", function() {

    const elements = document.querySelectorAll(".active-highlight");

    elements.forEach(element => {
        element.classList.remove("active-highlight");
    });

    selectorInput.value = "";
    message.textContent = "Highlights have been reset.";
    message.style.color = "blue";
});

