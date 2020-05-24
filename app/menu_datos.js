let menu = [{
        label: 'Introducción',
        href: 'index.html',
        icon: '',
        children: []
    }, {
        label: '¿Qué es moc?',
        href: '#',
        icon: '',
        children: [{
                label: 'Definición',
                href: 'definicion.html'
            },
            {
                label: 'ADN marca',
                href: '#'
            },
            {
                label: 'Estrategia',
                href: '#'
            },
            {
                label: 'Drivers',
                href: '#'
            },
            {
                label: 'Narrativa',
                href: '#'
            }
        ]
    }, {
        label: 'Definición de la Marca',
        href: '#',
        icon: 'twitter',
        children: [{
                label: 'Elementos',
                href: '#'
            },
            {
                label: 'Composición',
                href: '#'
            },
            {
                label: 'Color',
                href: 'color.html'
            },
            {
                label: 'Animación',
                href: 'animacion.html'
            }
        ]
    }, {
        label: 'Identidad Visual',
        href: '#',
        icon: 'check',
        children: [{
                label: 'Tipografía',
                href: '#'
            },
            {
                label: 'Gama Colores',
                href: '#'
            },
            {
                label: 'Retícula',
                href: 'reticulas.html'
            },
            {
                label: 'Estilo Fotográfico',
                href: '#'
            },
            {
                label: 'Estilo Ilustración',
                href: '#'
            },
            {
                label: 'Estilo Gráficas',
                href: '#'
            }
        ]
    },
    {
        label: 'Aplicaciones',
        href: '#',
        icon: 'check',
        children: [{
                label: 'Impresas',
                href: '#'
            },
            {
                label: 'Digitales',
                href: '#'
            },
            {
                label: 'Plantillas',
                href: '#'
            },
            {
                label: 'Video',
                href: '#'
            }
        ]
    },
    {
        label: 'About us',
        href: '#',
        icon: 'check',
        children: []
    }
];









const drawMenuItemContent = (currentMenuItem) => {

    if (currentMenuItem.children.length == 0) {
        return ``;

    } else {
        let children = currentMenuItem.children;
        let output = '';

        for (let i = 0; i < children.length; i++) {
            let currentMenuSubItem = children[i];

            output += `
                    <li>
                        <a href="${currentMenuSubItem.href}">${currentMenuSubItem.label}</a>
                    </li>
            `;
        }

        return output;
    }

};


let dynamicMenu = document.querySelector('#leftMenu');
dynamicMenu.innerHTML = '';

for (let i = 0; i < menu.length; i++) {
    let currentMenuItem = menu[i];

    if (currentMenuItem.children.length == 0) {
        let menuHTML = `
            <div class="leftMenuItem">
             <h3><a href="${currentMenuItem.href}">${currentMenuItem.label}</a></h3>
            </div>
        `;
        dynamicMenu.innerHTML += menuHTML;

    } else {
        let menuHTML = `
        <div class="leftMenuItem">
             <h3>${currentMenuItem.label}</h3>
                <ul class="BrandDropdown">
                    ${drawMenuItemContent(currentMenuItem)}
                </ul>
            </div>
    `;
        dynamicMenu.innerHTML += menuHTML;

    }


}