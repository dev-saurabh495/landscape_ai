import { useApp } from '../app/providers';
export default function useAuth(){ const {user,login,logout}=useApp(); return {user,login,logout,isAuthenticated:!!user}; }
