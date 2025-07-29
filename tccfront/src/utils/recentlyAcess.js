export const recentlyAcess = (trailClickId)=>{
    //caio<- primeiro pegamos a lista existente
    const targetExists = JSON.parse(localStorage.getItem("trailsRecentlyAcess")) || []
    //caio<- removemos a trilha clicada da lista atual
    const momentReplaceIfExists = targetExists.filter(thisTrailId=> thisTrailId!==trailClickId)
    //caio<- aqui é como se ela estivesse sendo movida para a nova posição, na verdade é literalmente isso
    const moveToRecentlyPosition = [trailClickId,...momentReplaceIfExists]
    //caio<- limitamos a lista para as trilha quase n acessadas sairem aos pouquinhos
    const recentlyLimmit = moveToRecentlyPosition.slice(0,4)
    //caio<- aí a gente seta aqui
    localStorage.setItem("trailsRecentlyAcess",JSON.stringify(recentlyLimmit))
}