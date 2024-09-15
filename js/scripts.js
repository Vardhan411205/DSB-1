document.addEventListener('DOMContentLoaded', () => {
    const selectProductBtns = document.querySelectorAll('.select-product-btn');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Handle "View Details" button click
    selectProductBtns.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            window.location.href = `product.html?category=${category}`;
        });
    });

    // Handle tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Hide all tab contents
            tabContents.forEach(content => content.style.display = 'none');

            // Show the clicked tab content and add active class to the button
            document.getElementById(`tab-content-${tabId}`).style.display = 'block';
            button.classList.add('active');
        });
    });

    // Show the first tab content by default
    tabButtons[0].click();
});
