import { RouteObject, NavLink } from "react-router-dom";
import { Button, Result } from 'antd';
import { paths } from "./types";
import HomePage from "@/2_pages/home";
import LoginPage from "@/2_pages/login";
import RegisterPage from "@/2_pages/register";
import { AuthLayout, DefaultLayout } from "../layouts";

export const routes: RouteObject[]  = [
    {
        path: paths.home,
        element: <DefaultLayout/>,
        children: [
            {
                element: <HomePage/>,
                index: true
            }
        ]
    },
    {
        element: <AuthLayout />,
        path: paths.login,
        children: [
            {
                element: <LoginPage />,
                index: true
            },
        ],
    },
    {
        element: <AuthLayout />,
        path: paths.register,
        children: [
            {
                element: <RegisterPage />,
                index: true
            },
        ],
    },
    {
        path: '*',
        element: (
            <Result
                status="404"
                title=""
                subTitle="Страница не найдена"
                extra={<NavLink to={paths.home}><Button type="primary">На главную</Button></NavLink>}
            />
        ),
    }
]