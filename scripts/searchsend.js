function sendToPage() {
    const input = document.getElementById("searchbar").value.toLowerCase()
    if (input) {
        if (input) {
            if (input.startsWith('hom')) {
                window.location.replace('https://brawlout1.github.io')
            } else if (input.startsWith('service')) {
                window.location.replace('https://brawlout1.github.io/services/intro')
            } else if (input.startsWith('brand')) {
                window.location.replace('https://brawlout1.github.io/pages/branding.html')
            } else {
                document.getElementById('searchbar').value = ''
                setTimeout(() => {
                    alert('Could not find file')
                }, 500)
            }
        }
    }
}