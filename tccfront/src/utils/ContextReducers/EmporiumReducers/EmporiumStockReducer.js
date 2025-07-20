export const EmporiumStockReducer = (emporiumState, emporiumAction) => {
    switch (emporiumAction.type) {
        case "EMPORIUM_SET_STOCK": return {
            ...emporiumState,
            stock: {
                ...emporiumState.stock,
                [emporiumAction.payload.key]: emporiumAction.payload.value
            }
        };

        case "EMPORIUM_SET_FILTER": return {
            ...emporiumState,
            filters: {
                ...emporiumState.filters,
                [emporiumAction.payload.key]: emporiumAction.payload.value
            }
        };
        case "EMPORIUM_SET_PURCHASE": return{
            ...emporiumState,
            purchase:{
                ...emporiumState.purchase,
                [emporiumAction.payload.key]: emporiumAction.payload.value
            }
        }

        case "EMPORIUM_RESET_INFO":
            return { ...emporiumAction.payload }
        default: return emporiumState;
    }
}