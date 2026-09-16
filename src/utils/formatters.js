export const formatNumber=n=>new Intl.NumberFormat('en-IN').format(n);
export const shortHash=h=>h?.slice(0,10)+'…'+h?.slice(-4);
