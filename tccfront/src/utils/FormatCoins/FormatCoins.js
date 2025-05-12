export const  FormatCoins = (val) => {
    const targetNum = val.replace(/\D/g, "");
    const injectDots = targetNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const startsWithZero = injectDots.startsWith('0')?injectDots.replace('0',''):injectDots
    const coinsFormatted = startsWithZero;
    return coinsFormatted;
  };