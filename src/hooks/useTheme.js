import { useApp } from '../app/providers';
export default function useTheme(){ const {theme,setTheme}=useApp(); return {theme,setTheme}; }
