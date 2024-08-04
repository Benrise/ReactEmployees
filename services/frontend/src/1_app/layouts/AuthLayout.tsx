
import { Outlet } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';
import styles from './styles.module.scss';

const AuthLayout = () => {
    return (
        <AntLayout className={styles.auth_layout}>
            <Outlet />
        </AntLayout>
    )
}

export { AuthLayout }