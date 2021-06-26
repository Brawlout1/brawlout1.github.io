function sendToPage() {
    const input = document.getElementById("searchbar").value.toLowerCase()
    if (input) {
        if (input) {
            if (input == 'home' || input == 'h') {
                window.location.replace('C:\Users\hp\brawlout1\brawlout1.github.io\index.html')
            } else {
                document.getElementById('searchbar').value = ''
                setTimeout(() => {
                    alert('Could not find file')
                }, 500)
            }
        }
    }
}