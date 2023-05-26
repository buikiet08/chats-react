import { AuthRoute } from "@/components/AuthRoute";
import { PrivateRoute } from "@/components/PrivateRoute";
import Login from "@/pages/login";
import { lazy } from "react";

const Home = lazy(() => import("@/pages"))
const Page404 = lazy(() => import("@/pages/404"))
const MainLayout = lazy(() => import("@/layouts/MainLayout"))

export const routers = [
    {
        element: <MainLayout />,
        children: [
            {
                element: <PrivateRoute redirect={'/login'} />,
                children: [
                    {
                        path:'/',
                        element :<Home />
                    }
                ]
            },
            {
                element : <AuthRoute redirect={'/'} />,
                children: [
                    {
                        path:'/login',
                        element :<Login />
                    }
                ]
            },
            {
                path: '*',
                element: <Page404 />
            }
        ]
    }
]