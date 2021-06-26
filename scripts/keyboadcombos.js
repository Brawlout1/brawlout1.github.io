window.addEventListener('keypress', key => {
    if (key.key == '/') {
        const searchbar = document.getElementById('searchbar')
        if (searchbar && !searchbar.value) {
            window.scrollTo(0, '100%')
            searchbar.style.border = '#5865F2 2px solid'

            document.getElementById('searchbutton').style.border = '#5865F2 2px solid'
            setTimeout(() => {
                searchbar.style.border = 'rgb(216, 216, 216) 2px solid'
                document.getElementById('searchbutton').style.border = 'rgb(216, 216, 216) 2px solid'
            }, 2000)
        }
    } else if (key.key == 'Enter') {
        const input = document.getElementById("searchbar").value.toLowerCase()
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
})