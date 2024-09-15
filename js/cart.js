// Function to handle "Place Order" button click
document.getElementById('place-order-btn').addEventListener('click', () => {
    const orderConfirmation = document.getElementById('order-confirmation');
    const truck = document.getElementById('truck');
    const thankYouMsg = document.getElementById('thank-you-msg');

    // Show the truck and the order confirmation message
    orderConfirmation.classList.remove('hidden');
    orderConfirmation.style.display = 'block';

    // Trigger the truck animation and then show the "Thank you" message
    setTimeout(() => {
        thankYouMsg.style.display = 'block';
    }, 2000); // Delay the message by 2 seconds (after truck arrives)
});
