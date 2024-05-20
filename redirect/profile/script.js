document.getElementById('languageToggle').addEventListener('change', function() {
    var sliderLabel = document.getElementById('sliderLabel');
    if (this.checked) {
        document.getElementById('englishText').style.display = 'none';
        document.getElementById('arabicText').style.display = 'block';
        sliderLabel.textContent = 'Ar';
    } else {
        document.getElementById('englishText').style.display = 'block';
        document.getElementById('arabicText').style.display = 'none';
        sliderLabel.textContent = 'En';
    }
});
