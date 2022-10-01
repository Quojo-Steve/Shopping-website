document.querySelectorAll('.small-image-1').forEach(images => {
    images.onclick = () => {
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-2').forEach(images => {
    images.onclick = () => {
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-3').forEach(images => {
    images.onclick = () => {
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});