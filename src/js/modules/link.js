function link(
    selLinks
) {
    


    const links = document.querySelectorAll(selLinks);

    links.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.style.cssText = `
                color: #4d4d4d
            `;
            setTimeout(() => {
                e.target.style.cssText = `
                color: #f1f1f1
            `; 
            }, 1000);
        });
    });
}


export default link;