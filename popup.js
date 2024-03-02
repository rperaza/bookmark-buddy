// popup.js

document.addEventListener('DOMContentLoaded', function) {
    // Get the category dropdown element
    const categoryDropdown = document.getElementById('category');

    // Get the form elements
    chrome.storage.sync.get(['categories'], function(result) {
        // If categories exist, populate the dropdown
}