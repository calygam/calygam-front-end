import { useEffect, useState } from "react";


export const DisplayCleaner = (bgColor, borderRadius, opacity,borderLength,borderColor) => {


   

  const classes = [
    'grid lg:grid-cols-[1fr_auto_0.8fr] w-full md:grid-cols-2 grid-cols-1 place-items-center ',
   
    bgColor ? bgColor : 'bg-gray-200',
    borderRadius?`rounded-[${borderRadius}]`:`rounded-xl`,
    opacity ? `opacity-${opacity}` : 'opacity-100',
    'min-h-[100px] h-fit',
    borderLength?`border-${borderLength}`:'border-2',
    borderColor?`border-${borderColor}`:`border-gray-200`,
    'text-base',
    'transition-all',
    'duration-300',
    'hover:bg-opacity-75',
  ];

  return classes.filter(Boolean).join(' ');
};