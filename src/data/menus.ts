import {paw, search, home, construct, cog} from 'ionicons/icons';

export interface Menu {
    id: number,
    title: string,
    url: string,
    iosIcon: string,
    mdIcon: string
}

const menus: Menu[] = [
    {
        id:0,
        title: 'Accueil',
        url: '/',
        iosIcon: home,
        mdIcon: home
    },
    {
        id:1,
        title: 'Liste des Monstres',
        url: '/listeMonstres',
        iosIcon: paw,
        mdIcon: paw
    },
    {
        id:2,
        title: 'Liste des Armes',
        url: '/listeArmes',
        iosIcon: construct,
        mdIcon: construct
    },
    {
        id:3,
        title: 'Liste des Armures',
        url: '/listeArmures',
        iosIcon: cog,
        mdIcon: cog
    },
    {
        id:4,
        title: 'Rechercher',
        url: '/rechercher',
        iosIcon: search,
        mdIcon: search
    }
]

export const getMenus = () => menus;

export const getMenu = (id: number) => menus.find(m => m.id === id);