
var menucontexto
var styleEditor
var context

var positionStyleEditor = {
    x: `10px`,
    y: `10px`
}

var html = document.getElementById('root')
// {
//     root: {
//         parent: document.getElementById('root'),
//         children: []
//     }
// }

context = html

var elements = {
    button: '<button>button</button>',
    h1: '<h1>h1</h1>',
    h2: '<h2>h2</h2>',
    h3: '<h3>h3</h3>',
    h4: '<h4>h4</h4>',
    h5: '<h5>h5</h5>',
    p: '<p>p</p>',
    div: '<div>div</div>',
    input: '<input/>',
    img: '<img/>'
}

function openMenuContext(e) {
    e.preventDefault()

    menucontexto = document.getElementById('menucontexto')
    menucontexto.style.display = 'initial'
    menucontexto.style.marginLeft = `${e.clientX}px`
    menucontexto.style.marginTop = `${e.clientY}px`

    var keys = Object.keys(elements)
    flush(menucontexto)
    keys.forEach(key => {
        var btn = document.createElement('button')
        btn.style.width = '100%'
        btn.innerHTML = key

        btn.addEventListener('click', (event) => {
            var element = new DOMParser().parseFromString(elements[key], 'text/html').body.childNodes[0]
            element.addEventListener('click', (event) => setContext(event, element, key))
            element.addEventListener('dblclick', (event) => openStyleEditor(event, element))
            context.appendChild(element)
        })

        menucontexto.appendChild(btn)
    })

    var btnClose = document.createElement('button')
    btnClose.innerHTML = 'close'
    btnClose.addEventListener('click', () => {
        closeMenuContext()
    })

    menucontexto.appendChild(btnClose)
}

function flush(element) {
    while (element.children.length > 0) {
        element.removeChild(element.children[0])
    }
}

function closeMenuContext(e) {
    menucontexto.style.display = 'none'
}

function setContext(event, element, key) {
    event.preventDefault()
    event.cancelBubble = true
    // console.log(element)
    context = element
}

function openStyleEditor(event, element) {
    // console.log(element)
    context = element
    styleEditor = document.getElementById('styleEditor')
    styleEditor.style.display = 'initial'
    styleEditor.style.marginLeft = `${event.clientX}px`
    styleEditor.style.marginTop = `${event.clientY}px`
    flush(styleEditor)

    var div = document.createElement('div')

    var btnRemove = document.createElement('button')
    btnRemove.innerHTML = 'remove'
    btnRemove.addEventListener('click', (e) => removeElement(e, element))

    var btnClose = document.createElement('button')
    btnClose.innerHTML = 'close'
    btnClose.addEventListener('click', closeStyleEditor)

    div.appendChild(btnRemove)
    div.appendChild(btnClose)

    div.style.textAlign = 'right'
    styleEditor.appendChild(div)

    var keys = Object.keys(element.style)
    keys.forEach(key => {
        var div = document.createElement('div')
        var label = document.createElement('label')
        var input = document.createElement('input')
        label.innerHTML = `${key}: `
        input.value = context.style[key]

        input.addEventListener('keypress', (e) => {
            // console.log(`${e.target.value} - ${key}`)
            context.style[key] = e.target.value
            // console.log(element)
        })

        div.appendChild(label)
        div.appendChild(input)

        styleEditor.appendChild(div)
    })
}

function closeStyleEditor() {
    styleEditor.style.display = 'none'
}

function removeElement(e, element) {
    // console.log(element)
    context.style.display = 'none'
}