let menu = [{
        label: 'Introducción',
        href: 'index.html',
        icon: '',
        children: []
    }, {
        label: 'Estrategia y concepto',
        href: '#',
        icon: '',
        children: [{
                label: 'Definición',
                href: 'definicion.html'
            },
            {
                label: 'ADN marca',
                href: 'adn.html'
            },
            {
                label: 'Estrategia',
                href: '#'
            },
            {
                label: 'Drivers',
                href: 'drivers.html'
            },
            {
                label: 'Narrativa',
                href: 'narrativa.html'
            }
        ]
    }, {
        label: 'Definición de la Marca',
        href: '#',
        icon: 'twitter',
        children: [{
                label: 'Elementos',
                href: 'elementos.html'
            },
            {
                label: 'Composición',
                href: 'composicion.html'
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
                href: 'tipografia.html'
            },
            {
                label: 'Gama de colores',
                href: '#'
            },
            {
                label: 'Retícula',
                href: 'reticulas.html'
            },
            {
                label: 'Estilo Fotográfico',
                href: 'estilo_foto.html'
            },
            {
                label: 'Estilo Ilustración',
                href: 'estilo_ilustracion.html'
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
                href: 'aplicaciones_digitales.html'
            },
            {
                label: 'Plantillas',
                href: 'plantillas.html'
            },
            {
                label: 'Video',
                href: '#'
            }
        ]
    },
    {
        label: 'Sobre nosotros',
        href: 'aboutus.html',
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