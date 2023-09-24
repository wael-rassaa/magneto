
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const combine=(...inputs: any[])=>{
    return twMerge(clsx(inputs))
}

export const pluck = (arr:Array<any >,key:string) => arr.map((i)=>i[key])