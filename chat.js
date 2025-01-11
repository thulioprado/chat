(function() {
    const output = document.getElementById('output')

    if (output) {        
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.classList?.contains('highlight-chat')) {
                            const name = node.querySelector('.hl-name')

                            if (name) {
                                name.innerHTML = name.innerHTML.replace(':', '')
                                name.style.background = name.style.color
                                name.style.color = 'white'
                            }
                        }
                    })
                }
            })
        })

        observer.observe(output, { 
            childList: true, 
            subtree: true 
        })
    }
})()
