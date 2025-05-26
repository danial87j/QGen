// Get references to DOM elements
const input = document.getElementById('qr-input');
const btn = document.getElementById('generate-btn');
const image = document.getElementById('qr-image');
const download = document.getElementById('download-btn');

// Add click event listener to the generate button
btn.addEventListener('click', () => {
    // Get and trim the input text
    const text = input.value.trim();
    // If input is empty, do nothing
    if (!text) return;

    // Generate QR code as a data URL
    QRCode.toDataURL(text).then(dataUrl => {
        // Set the generated QR code image source
        image.src = dataUrl;
        // Clear the input field
        input.value = '';
        // Set the download link to the QR code image
        download.href = dataUrl;
        // Show the download button
        download.style.display = 'inline-block';
    });
});
