

import React from 'react'
import styles from './styles.module.scss';

import { Layout, Space, Button } from 'antd';
import { TeamOutlined, LogoutOutlined } from '@ant-design/icons';


const Header: React.FC = () => {
  return (
    <Layout.Header className={styles.header}>
        <Space className='w-full justify-between'>
            <div className="flex gap-3">
                <TeamOutlined className='text-white'/>
                <span className='text-white'>Панель администрирования</span>
            </div>
            <Button icon={<LogoutOutlined/>} iconPosition='end' type="primary" className='text-white'>Выход</Button>
        </Space>
    </Layout.Header>
  )
}

export default Header
