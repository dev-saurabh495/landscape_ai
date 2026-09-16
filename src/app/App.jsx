import React, { lazy, Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { motion } from "framer-motion";

import { useApp } from "./providers";

import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyAccount from "../pages/auth/VerifyAccount";

import Landing from "../pages/public/Landing";
import PublicInfo from "../pages/public/PublicInfo";

import Generic from "../pages/system/Generic";

/* =========================================================
   LAZY LOADED PAGES
========================================================= */

const Dashboard = lazy(() =>
  import("../pages/dashboard/Dashboard")
);

const MapExplorer = lazy(() =>
  import("../pages/map/MapExplorer")
);

const Evidence = lazy(() =>
  import("../pages/evidence/Evidence")
);

const EvidenceDetail = lazy(() =>
  import("../pages/evidence/EvidenceDetail")
);

const EvidenceGraph = lazy(() =>
  import("../pages/evidence/EvidenceGraph")
);

const LandRecords = lazy(() =>
  import("../pages/land/LandRecords")
);

const LandDetail = lazy(() =>
  import("../pages/land/LandDetail")
);

const Disputes = lazy(() =>
  import("../pages/disputes/Disputes")
);

const Policy = lazy(() =>
  import("../pages/policy/Policy")
);

const Research = lazy(() =>
  import("../pages/research/Research")
);

const Reports = lazy(() =>
  import("../pages/reports/Reports")
);

const ReportDetail = lazy(() =>
  import("../pages/reports/ReportDetail")
);

const Analytics = lazy(() =>
  import("../pages/analytics/Analytics")
);

const FieldSurveys = lazy(() =>
  import("../pages/field/FieldSurveys")
);

const Provenance = lazy(() =>
  import("../pages/provenance/Provenance")
);

const Notifications = lazy(() =>
  import("../pages/system/Notifications")
);

const Profile = lazy(() =>
  import("../pages/profile/Profile")
);

const Security = lazy(() =>
  import("../pages/profile/Security")
);

const Settings = lazy(() =>
  import("../pages/profile/Settings")
);

/* =========================================================
   ADMIN PAGES
========================================================= */

const AdminUsers = lazy(() =>
  import("../pages/admin/AdminUsers")
);

const AdminVerification = lazy(() =>
  import("../pages/admin/AdminVerification")
);

const AdminAudit = lazy(() =>
  import("../pages/admin/AdminAudit")
);

const AdminHealth = lazy(() =>
  import("../pages/admin/AdminHealth")
);

/* =========================================================
   AUTH GUARDS
========================================================= */

function Protected({ children }) {
  const { user } = useApp();

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}

function AdminOnly({ children }) {
  const { user } = useApp();

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (user.role !== "admin") {
    return (
      <Navigate
        to="/403"
        replace
      />
    );
  }

  return children;
}

/* =========================================================
   LOADING STATE
========================================================= */

function Load() {
  return (
    <div className="page-loading">
      <div className="loader-ring" />

      <span>
        Loading intelligence workspace…
      </span>
    </div>
  );
}

/* =========================================================
   PAGE TRANSITION
========================================================= */

function Page({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   LAZY PAGE WRAPPER
========================================================= */

function LazyPage({ children }) {
  return (
    <Page>
      <Suspense fallback={<Load />}>
        {children}
      </Suspense>
    </Page>
  );
}

/* =========================================================
   APP ROUTER
========================================================= */

export default function App() {
  const { user } = useApp();

  return (
    <Routes>

      {/* =====================================================
          PUBLIC ROUTES
      ===================================================== */}

      <Route
        path="/"
        element={
          user ? (
            <Navigate
              to="/dashboard"
              replace
            />
          ) : (
            <Landing />
          )
        }
      />

      <Route
        path="/about"
        element={
          <PublicInfo
            title="About LandEvidence AI"
            description="A frontend prototype for evidence-driven land governance and policy intelligence."
            items={[
              [
                "Product principle",
                "Every decision should be traceable back to evidence.",
              ],
              [
                "Prototype scope",
                "Synthetic data, local demo authentication and simulated workflows.",
              ],
              [
                "Future architecture",
                "Designed to connect later to Laravel REST APIs, PostGIS and AI services.",
              ],
            ]}
          />
        }
      />

      <Route
        path="/features"
        element={
          <PublicInfo
            title="Platform Features"
            description="Explore the core intelligence workflows represented in the prototype."
            items={[
              [
                "GIS Intelligence",
                "District and parcel spatial context.",
              ],
              [
                "Evidence Graph",
                "Source-to-verification lineage.",
              ],
              [
                "Policy Simulator",
                "Scenario estimates with explicit prototype labeling.",
              ],
              [
                "Decision Trace",
                "Trace analytical results back to their evidence sources.",
              ],
            ]}
          />
        }
      />

      <Route
        path="/contact"
        element={
          <PublicInfo
            title="Contact"
            description="Prototype contact workspace."
            items={[
              [
                "Demo support",
                "Use the in-app navigation and demo controls to explore the product.",
              ],
              [
                "Organization",
                "Ministry of Rural Development theme — synthetic demonstration only.",
              ],
              [
                "Demo account",
                "Roli Verma — NITRA Technical Campus.",
              ],
            ]}
          />
        }
      />

      {/* =====================================================
          AUTHENTICATION ROUTES
      ===================================================== */}

      <Route element={<AuthLayout />}>

        <Route
          path="/login"
          element={
            user ? (
              <Navigate
                to="/dashboard"
                replace
              />
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/signup"
          element={
            user ? (
              <Navigate
                to="/dashboard"
                replace
              />
            ) : (
              <Signup />
            )
          }
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/verify-account"
          element={<VerifyAccount />}
        />

      </Route>

      {/* =====================================================
          PROTECTED APPLICATION
      ===================================================== */}

      <Route
        element={
          <Protected>
            <DashboardLayout />
          </Protected>
        }
      >

        {/* ---------------------------------------------------
            OVERVIEW
        --------------------------------------------------- */}

        <Route
          path="/dashboard"
          element={
            <LazyPage>
              <Dashboard />
            </LazyPage>
          }
        />

        {/* ---------------------------------------------------
            INTELLIGENCE
        --------------------------------------------------- */}

        <Route
          path="/map"
          element={
            <LazyPage>
              <MapExplorer />
            </LazyPage>
          }
        />

        <Route
          path="/evidence"
          element={
            <LazyPage>
              <Evidence />
            </LazyPage>
          }
        />

        <Route
          path="/evidence/:id"
          element={
            <LazyPage>
              <EvidenceDetail />
            </LazyPage>
          }
        />

        <Route
          path="/evidence-graph"
          element={
            <LazyPage>
              <EvidenceGraph />
            </LazyPage>
          }
        />

        {/* ---------------------------------------------------
            LAND RECORDS
        --------------------------------------------------- */}

        <Route
          path="/land-records"
          element={
            <LazyPage>
              <LandRecords />
            </LazyPage>
          }
        />

        <Route
          path="/land-records/:id"
          element={
            <LazyPage>
              <LandDetail />
            </LazyPage>
          }
        />

        {/* ---------------------------------------------------
            ANALYSIS
        --------------------------------------------------- */}

        <Route
          path="/disputes"
          element={
            <LazyPage>
              <Disputes />
            </LazyPage>
          }
        />

        <Route
          path="/policy-simulator"
          element={
            <LazyPage>
              <Policy />
            </LazyPage>
          }
        />

        <Route
          path="/analytics"
          element={
            <LazyPage>
              <Analytics />
            </LazyPage>
          }
        />

        <Route
          path="/field-surveys"
          element={
            <LazyPage>
              <FieldSurveys />
            </LazyPage>
          }
        />

        {/* ---------------------------------------------------
            RESEARCH
        --------------------------------------------------- */}

        <Route
          path="/research"
          element={
            <LazyPage>
              <Research />
            </LazyPage>
          }
        />

        <Route
          path="/reports"
          element={
            <LazyPage>
              <Reports />
            </LazyPage>
          }
        />

        <Route
          path="/reports/:id"
          element={
            <LazyPage>
              <ReportDetail />
            </LazyPage>
          }
        />

        {/* ---------------------------------------------------
            TRUST / PROVENANCE
        --------------------------------------------------- */}

        <Route
          path="/provenance"
          element={
            <LazyPage>
              <Provenance />
            </LazyPage>
          }
        />

        {/* ---------------------------------------------------
            SYSTEM
        --------------------------------------------------- */}

        <Route
          path="/notifications"
          element={
            <LazyPage>
              <Notifications />
            </LazyPage>
          }
        />

        <Route
          path="/profile"
          element={
            <LazyPage>
              <Profile />
            </LazyPage>
          }
        />

        <Route
          path="/profile/security"
          element={
            <LazyPage>
              <Security />
            </LazyPage>
          }
        />

        <Route
          path="/settings"
          element={
            <LazyPage>
              <Settings />
            </LazyPage>
          }
        />

        {/* ===================================================
            ADMIN
        =================================================== */}

        <Route
          path="/admin/users"
          element={
            <AdminOnly>
              <LazyPage>
                <AdminUsers />
              </LazyPage>
            </AdminOnly>
          }
        />

        <Route
          path="/admin/verification"
          element={
            <AdminOnly>
              <LazyPage>
                <AdminVerification />
              </LazyPage>
            </AdminOnly>
          }
        />

        <Route
          path="/admin/audit-logs"
          element={
            <AdminOnly>
              <LazyPage>
                <AdminAudit />
              </LazyPage>
            </AdminOnly>
          }
        />

        <Route
          path="/admin/system-health"
          element={
            <AdminOnly>
              <LazyPage>
                <AdminHealth />
              </LazyPage>
            </AdminOnly>
          }
        />

      </Route>

      {/* =====================================================
          ERROR ROUTES
          IMPORTANT: These are OUTSIDE protected layout.
      ===================================================== */}

      <Route
        path="/403"
        element={
          <Generic
            code="403"
            title="Access restricted"
            text="Your current role does not have permission to open this workspace."
          />
        }
      />

      <Route
        path="/404"
        element={
          <Generic
            code="404"
            title="Page not found"
            text="The requested intelligence workspace could not be located."
          />
        }
      />

      {/* =====================================================
          FALLBACK
      ===================================================== */}

      <Route
        path="*"
        element={
          <Generic
            code="404"
            title="Page not found"
            text="The requested intelligence workspace could not be located."
          />
        }
      />

    </Routes>
  );
}