import React,{lazy,Suspense} from 'react';
import {Navigate,Route,Routes,useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useApp} from './providers';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import ForgotPassword from '../pages/auth/ForgotPassword';
import VerifyAccount from '../pages/auth/VerifyAccount';
import Landing from '../pages/public/Landing';
import PublicInfo from '../pages/public/PublicInfo';
const Dashboard=lazy(()=>import('../pages/dashboard/Dashboard'));
const MapExplorer=lazy(()=>import('../pages/map/MapExplorer'));
const Evidence=lazy(()=>import('../pages/evidence/Evidence'));
const EvidenceDetail=lazy(()=>import('../pages/evidence/EvidenceDetail'));
const EvidenceGraph=lazy(()=>import('../pages/evidence/EvidenceGraph'));
const LandRecords=lazy(()=>import('../pages/land/LandRecords'));
const LandDetail=lazy(()=>import('../pages/land/LandDetail'));
const Disputes=lazy(()=>import('../pages/disputes/Disputes'));
const Policy=lazy(()=>import('../pages/policy/Policy'));
const Research=lazy(()=>import('../pages/research/Research'));
const Reports=lazy(()=>import('../pages/reports/Reports'));
const ReportDetail=lazy(()=>import('../pages/reports/ReportDetail'));
const Analytics=lazy(()=>import('../pages/analytics/Analytics'));
const FieldSurveys=lazy(()=>import('../pages/field/FieldSurveys'));
const Provenance=lazy(()=>import('../pages/provenance/Provenance'));
const Notifications=lazy(()=>import('../pages/system/Notifications'));
const Profile=lazy(()=>import('../pages/profile/Profile'));
const Security=lazy(()=>import('../pages/profile/Security'));
const Settings=lazy(()=>import('../pages/profile/Settings'));
const AdminUsers=lazy(()=>import('../pages/admin/AdminUsers'));
const AdminVerification=lazy(()=>import('../pages/admin/AdminVerification'));
const AdminAudit=lazy(()=>import('../pages/admin/AdminAudit'));
const AdminHealth=lazy(()=>import('../pages/admin/AdminHealth'));
const Generic=lazy(()=>import('../pages/system/Generic'));
function Protected({children}){const {user}=useApp();return user?children:<Navigate to="/login" replace/>}
function AdminOnly({children}){const {user}=useApp();return user?.role==='admin'?children:<Navigate to="/403" replace/>}
function Load(){return <div className="page-loading"><div className="loader-ring"/><span>Loading intelligence workspace…</span></div>}
function Page({children}){return <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.2}}>{children}</motion.div>}
export default function App(){const {user}=useApp();return <Routes><Route path="/" element={user?<Navigate to="/dashboard" replace/>:<Landing/>}/><Route path="/about" element={<PublicInfo title="About LandEvidence AI" description="A frontend prototype for evidence-driven land governance and policy intelligence." items={[["Product principle","Every decision should be traceable back to evidence."],["Prototype scope","Synthetic data, local demo authentication and simulated workflows."],["Future architecture","Designed to connect later to Laravel REST APIs, PostGIS and AI services."]]}/>}/><Route path="/features" element={<PublicInfo title="Platform Features" description="Explore the core intelligence workflows represented in the prototype." items={[["GIS Intelligence","District and parcel spatial context."],["Evidence Graph","Source-to-verification lineage."],["Policy Simulator","Scenario estimates with explicit prototype labeling."]]}/>}/><Route path="/contact" element={<PublicInfo title="Contact" description="Prototype contact workspace." items={[["Demo support","Use the in-app navigation and demo controls to explore the product."],["Organization","Ministry of Rural Development theme — synthetic demonstration only."]]}/>}/<Route element={<AuthLayout/>}><Route path="/login" element={user?<Navigate to="/dashboard" replace/>:<Login/>}/><Route path="/signup" element={user?<Navigate to="/dashboard" replace/>:<Signup/>}/><Route path="/forgot-password" element={<ForgotPassword/>}/><Route path="/verify-account" element={<VerifyAccount/>}/></Route><Route element={<Protected><DashboardLayout/></Protected>}><Route path="/dashboard" element={<Page><Suspense fallback={<Load/>}><Dashboard/></Suspense></Page>}/><Route path="/map" element={<Page><Suspense fallback={<Load/>}><MapExplorer/></Suspense></Page>}/><Route path="/evidence" element={<Page><Suspense fallback={<Load/>}><Evidence/></Suspense></Page>}/><Route path="/evidence/:id" element={<Page><Suspense fallback={<Load/>}><EvidenceDetail/></Suspense></Page>}/><Route path="/evidence-graph" element={<Page><Suspense fallback={<Load/>}><EvidenceGraph/></Suspense></Page>}/><Route path="/land-records" element={<Page><Suspense fallback={<Load/>}><LandRecords/></Suspense></Page>}/><Route path="/land-records/:id" element={<Page><Suspense fallback={<Load/>}><LandDetail/></Suspense></Page>}/><Route path="/disputes" element={<Page><Suspense fallback={<Load/>}><Disputes/></Suspense></Page>}/><Route path="/policy-simulator" element={<Page><Suspense fallback={<Load/>}><Policy/></Suspense></Page>}/><Route path="/research" element={<Page><Suspense fallback={<Load/>}><Research/></Suspense></Page>}/><Route path="/reports" element={<Page><Suspense fallback={<Load/>}><Reports/></Suspense></Page>}/><Route path="/reports/:id" element={<Page><Suspense fallback={<Load/>}><ReportDetail/></Suspense></Page>}/><Route path="/analytics" element={<Page><Suspense fallback={<Load/>}><Analytics/></Suspense></Page>}/><Route path="/field-surveys" element={<Page><Suspense fallback={<Load/>}><FieldSurveys/></Suspense></Page>}/><Route path="/provenance" element={<Page><Suspense fallback={<Load/>}><Provenance/></Suspense></Page>}/><Route path="/notifications" element={<Page><Suspense fallback={<Load/>}><Notifications/></Suspense></Page>}/><Route path="/profile" element={<Page><Suspense fallback={<Load/>}><Profile/></Suspense></Page>}/><Route path="/profile/security" element={<Page><Suspense fallback={<Load/>}><Security/></Suspense></Page>}/><Route path="/settings" element={<Page><Suspense fallback={<Load/>}><Settings/></Suspense></Page>}/><Route path="/admin/users" element={<AdminOnly><Page><Suspense fallback={<Load/>}><AdminUsers/></Suspense></Page></AdminOnly>}/><Route path="/admin/verification" element={<AdminOnly><Page><Suspense fallback={<Load/>}><AdminVerification/></Suspense></Page></AdminOnly>}/><Route path="/admin/audit-logs" element={<AdminOnly><Page><Suspense fallback={<Load/>}><AdminAudit/></Suspense></Page></AdminOnly>}/><Route path="/admin/system-health" element={<AdminOnly><Page><Suspense fallback={<Load/>}><AdminHealth/></Suspense></Page></AdminOnly>}/><Route path="/403" element={<Generic code="403" title="Access restricted" text="Your current role does not have permission to open this workspace."/>}/><Route path="*" element={<Generic code="404" title="Page not found" text="The requested intelligence workspace could not be located."/>}/></Route></Routes>}
