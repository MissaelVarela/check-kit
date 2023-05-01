const imgDirectory = require.context('../assets/img');

// Implementarlo usando una clase con metodos staticos? o un objeto con los recursos como atributos?
// Nota: Buscar forma de trabajar con .svg o pasar a png 

const sources = {
        images: {
            logo: trySearch('./logo.png'),
            logo_text: trySearch('./logo-text.png'),
            backgroundHome: trySearch('./background-home.png'),
        },
        icons: {
            menu: trySearch('./menu.png'),
            profile: trySearch('./profile.png'),
            home: trySearch('./home.png'),
            equipment: trySearch('./catalogue.png'),
            datebook: trySearch('./datebook.png'),
            maintenance: trySearch('./maintenance.png'),
            add: trySearch('./add.png'),
            catalogue: trySearch('./catalogue.png'),
            arrow_down: trySearch('./arrow_down.png'),
            arrow_up: trySearch('./arrow_up.png'),
            arrow_right: trySearch('./arrow_right.png'),
            arrow_left: trySearch('./arrow_left.png'),
            checklist: trySearch('./checklist.png'),
            check: trySearch('./check.png'),
            empty: trySearch('./empty.png'),
        }  
    }

function trySearch(name){
    try { return imgDirectory(name) }
    catch {}
}


export default sources;