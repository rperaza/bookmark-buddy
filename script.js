// script.js

// Variables to reference UI elements
const bookmarkList = document.getElementById('bookmark-list');
const noteTextarea = document.getElementById('note-textarea');
const bookmarkForm = document.getElementById('bookmark-form');
const categoryForm = document.getElementById('category-form');


// Function to add a bookmark
function addBookmark(title, url) {
    const bookmarkItem = document.createElement('li');
    const bookmarkLink = document.createElement('a');
    bookmarkLink.href = url;
    bookmarkLink.textContent = title;
    
    // Create a delete button for the bookmark
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        bookmarkItem.remove();
    });

    bookmarkItem.appendChild(bookmarkLink);
    bookmarkItem.appendChild(deleteBtn);
    bookmarkList.appendChild(bookmarkItem);
}

// Function to add a category
function addCategory(categoryName) {
    const categoryItem = document.createElement('li');
    categoryItem.textContent = categoryName;
    
    // Create a delete button for the category
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        categoryItem.remove();
    });

    categoryItem.appendChild(deleteBtn);
    categoryList.appendChild(categoryItem);
}

// Function to handle form submission and save a bookmark
function saveBookmark(event) {
    event.preventDefault();
    
    const titleInput = document.getElementById('bookmark-title');
    const urlInput = document.getElementById('bookmark-url');
    
    const title = titleInput.value.trim();
    const url = urlInput.value.trim();
    
    if (title !== '' && url !== '') {
        addBookmark(title, url);
        // Clear the form inputs
        titleInput.value = '';
        urlInput.value = '';
    } else {
        alert('Please enter both a title and a URL.');
    }
}

// Function to handle form submission and add a category
function addCategoryHandler(event) {
    event.preventDefault();
    
    const categoryNameInput = document.getElementById('category-name');
    const categoryName = categoryNameInput.value.trim();
    
    if (categoryName !== '') {
        addCategory(categoryName);
        // Clear the form input
        categoryNameInput.value = '';
    } else {
        alert('Please enter a category name.');
    }
}

// Event listeners
bookmarkForm.addEventListener('submit', saveBookmark);
categoryForm.addEventListener('submit', addCategoryHandler);


