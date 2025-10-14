 import homeIcon from '../assets/img/home-icon-menu.svg'
 export const getRoutesByRole =(dataProfile)=>{
    
    const navRoutes = [
    ["ADMIN"].includes(dataProfile.userRole) &&
    { navRoute: "/Calygam/Admin/Reward/Create", navNameRoute: "Recompensas", routeIcon: homeIcon },
    ["ADMIN", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Coordenacao", navNameRoute: "Equipe", routeIcon: homeIcon },
    ["ADMIN", "INSTRUTOR", "COORDENADOR"].includes(dataProfile.userRole) &&
    { navRoute: "/Trail/Criar", navNameRoute: "Oficina", routeIcon: homeIcon },

    { navRoute: "/home", navNameRoute: "Home", routeIcon: homeIcon },
    { navRoute: "/Trilhas", navNameRoute: "Trilhas", routeIcon: homeIcon },
    ["ADMIN"].includes(dataProfile.userRole) &&
    { navRoute: "/Pet/Create", navNameRoute: "Pets", routeIcon: homeIcon }, 
    { navRoute: "/Emporium/Stock", navNameRoute: "empório", routeIcon: homeIcon }

  ]
  return navRoutes;

}