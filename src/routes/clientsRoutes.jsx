import ClientsLayout from "../layouts/dashboard/clients";
import ClientsDashboard from "../modules/Pages/clientsDashboard";
import AddStudents from "../modules/Pages/clientsDashboard/AddStudent";
import ManuallyRegister from "../modules/Pages/clientsDashboard/ManuallyRegister";

export const clientsRoutes = [
  {
    path: "/clients",
    element: <ClientsLayout />,
    children: [
      {
        index: true,
        element: <ClientsDashboard />,
      },
      {
        path: '/clients/add-students',
        element: <AddStudents />,
      },
      {
        path: '/clients/manually-register',
        element: <AddStudents />,
      },
      {
        path: '/clients/manually-register',
        element: <ManuallyRegister />,
      },
      // Add other customer dashboard routes here
    ],
  },
];
