document.addEventListener('DOMContentLoaded', () => {
    const colorRadios = document.querySelectorAll('input[name="color"]');
    const materialRadios = document.querySelectorAll('input[name="material"]');
    const productImage = document.getElementById('product-image');

    function updateImage() {
        let newImage = '';

        // Check selected color
        colorRadios.forEach(radio => {
            if (radio.checked) {
                newImage = radio.getAttribute('data-image');
            }
        });

        // Check selected material
        materialRadios.forEach(radio => {
            if (radio.checked) {
                newImage = radio.getAttribute('data-image');
            }
        });

        // Update the product image
        if (newImage) {
            productImage.src = newImage;
        }
    }

    // Attach change event to radio buttons
    colorRadios.forEach(radio => radio.addEventListener('change', updateImage));
    materialRadios.forEach(radio => radio.addEventListener('change', updateImage));
});
