const outputDiv = getById('output');

const callback = (mutationsList, observer) => {
    mutationsList.forEach(mutation => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.classList && node.classList.contains('highlight-chat')) {
                    const nameElement = node.querySelector('.hl-name');                    
                    if (nameElement) {
                        const currentColor = nameElement.style.color;
                        if (currentColor) {
                            nameElement.style.background = currentColor;
                            nameElement.style.color = 'white'; 
                        }
                    }
                }
            });
        }
    });
};


const observer = new MutationObserver(callback);
const config = { childList: true, subtree: true };
observer.observe(outputDiv, config);
