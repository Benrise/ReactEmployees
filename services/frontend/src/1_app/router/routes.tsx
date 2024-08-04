import { RouteObject, NavLink } from "react-router-dom";
import { Button, Result } from 'antd';
import { paths } from "./types";
import HomePage from "@/2_pages/home";
import LoginPage from "@/2_pages/login";
import RegisterPage from "@/2_pages/register";

export const routes: RouteObject[]  = [
    {
        path: paths.home,
        element: <HomePage/>,
    },
    {
        path: paths.login,
        element: <LoginPage/>,
    },
    {
        path: paths.register,
        element: <RegisterPage/>,
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