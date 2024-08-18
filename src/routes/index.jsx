import { createBrowserRouter } from 'react-router-dom';

// project import
import AuthRoutes from './AuthRoutes';
// import LoginRoutes from './LoginRoutes';
// import UserRoutes from './UserRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([AuthRoutes]);

export default router;