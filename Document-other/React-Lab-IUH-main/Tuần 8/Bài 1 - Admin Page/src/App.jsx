import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootPage from "./pages/RootPage";
import DashboardPage from "./pages/dashboard-page";
import { ProjectsPage } from "./pages/projects-page";
import { TeamsPage } from "./pages/teams-page";
import { AnalyticsPage } from "./pages/analytics-page";
import { MessagesPage } from "./pages/messages-page";
import { IntergrationsPage } from "./pages/intergrations-page";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/teams", element: <TeamsPage /> },
      { path: "/analytics", element: <AnalyticsPage /> },
      { path: "/messages", element: <MessagesPage /> },
      { path: "/intergrations", element: <IntergrationsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
