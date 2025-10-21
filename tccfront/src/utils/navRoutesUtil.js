 import homeIcon from '../assets/img/home-icon-two.svg'
 import trailIcon from '../assets/img/trail-route-icon.svg'
 import emporiumIcon from '../assets/img/emporium-icon.svg'
 export const getRoutesByRole =(dataProfile)=>{  
    
    const navRoutes = [
    ["ADMIN"].includes(dataProfile.userRole) &&
    { navRoute: "/Calygam/Admin/Reward/Create", navNameRoute: "Recompensas", routeIcon: homeIcon },
    ["ADMIN", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Coordenacao", navNameRoute: "Equipe", routeIcon: homeIcon },
    ["ADMIN", "INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Trail/Criar", navNameRoute: "Oficina", routeIcon: homeIcon },

    { navRoute: "/home", navNameRoute: "Home", routeIcon: homeIcon },
    { navRoute: "/Trilhas", navNameRoute: "Trilhas", routeIcon: trailIcon },
    ["ADMIN"].includes(dataProfile.userRole) &&
    { navRoute: "/Pet/Create", navNameRoute: "Pets", routeIcon: homeIcon }, 
    { navRoute: "/Emporium/Stock", navNameRoute: "loja", routeIcon: emporiumIcon }

  ]
  return navRoutes;

}