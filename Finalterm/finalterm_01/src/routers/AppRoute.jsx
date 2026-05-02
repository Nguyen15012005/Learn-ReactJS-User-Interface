import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage";
import Homepage from "../pages/Homepage";
import TaskPage from "../pages/TaskPage";
import TaskForm from "../components/TaskForm";
import TaskDetailPage from "../components/TaskDetailPage";
import TaskEditPage from "../components/TaskEditPage";

const route = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { path: "", element: <Homepage /> },
      {
        path: "tasks",
        element: <TaskPage />,
        children: [{ path: "add", element: <TaskForm /> }],
      },
      { path: "tasks/:id", element: <TaskDetailPage /> },
      { path: "tasks/:id/edit", element: <TaskEditPage /> },
    ],
  },
]);

export default route;
