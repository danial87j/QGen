// Get references to the input, button, and image elements by their IDs
const input = document.getElementById('qr-input');
const btn = document.getElementById('generate-btn');
const image = document.getElementById('qr-image');

// Add a click event listener to the generate button
btn.addEventListener('click', () => {
    // Generate a QR code data URL from the input value
    QRCode.toDataURL(input.value).then(dataUrl => {
        // Set the generated QR code as the image source
        image.src = dataUrl;
        // Clear the input field
        input.value = '';
    });
});
