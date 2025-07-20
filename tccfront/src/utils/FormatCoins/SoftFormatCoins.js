import { animate } from "framer-motion";

export const formattedCoins =(roundedValue)=>{ 
    const formatCoins = new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 0,
    }).format(roundedValue);
    return formatCoins
}

export const managedControl =(count,dataProfile,setRoundedValue)=>{ 
    const controls = animate(count, dataProfile?.userMoney, {
        duration: 5,
        onUpdate: (latest) => {
            setRoundedValue(Math.round(latest))
    }
    })
return () => controls.stop()
}

export const managedControlDynamic =(count,normalValue,setRoundedValue)=>{ 
    const controls = animate(count, normalValue, {
        duration: 5,
        onUpdate: (latest) => {
            setRoundedValue(Math.round(latest))
    }
    })
return () => controls.stop()
}

export const toPercentMoney = (havePoint) => {
  const num = Number(havePoint);
  const decimal = num % 1;

  if (decimal === 0) return "0%";

  const percent = Math.round(decimal * 100);
  return `${percent}%`;
};