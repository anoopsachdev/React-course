function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }   
    container.appendChild(domElement)
}

reactElement = {
    type: 'a',
    props: {
        href: 'www.google.com',
        target : '_blank'
    },
    children: 'Click on me'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)