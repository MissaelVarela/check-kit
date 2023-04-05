const imgDirectory = require.context('../assets/img');

// Implementarlo usando una clase con metodos staticos? o un objeto con los recursos como atributos?
// Nota: Buscar forma de trabajar con .svg o pasar a png 

const sources = {
        images: {
            logo: trySearch('./logo.png'),
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
            arrow: trySearch('./arrow.png'),
        }  
    }

function trySearch(name){
    try { return imgDirectory(name) }
    catch {}
}


export default sources;