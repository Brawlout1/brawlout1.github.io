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
})