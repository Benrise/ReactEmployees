import { Outlet } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';
import styles from './styles.module.scss';
import Header from '@/3_widgets/header';

const DefaultLayout = () => {
    return (
        <main className={styles.default_layout}>
            <Header/>
            <AntLayout className={styles.default_layout}>
                <Outlet/>
            </AntLayout>
        </main>
    )
}

export { DefaultLayout }