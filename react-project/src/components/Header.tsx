import React from 'react';
import { Layout, Avatar, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  user: {
    username: string;
    nickname: string;
    avatar: string;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const items = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      onClick: handleLogout,
    },
  ];

  return (
    <AntHeader style={{ 
      background: '#fff', 
      padding: '0 24px', 
      display: 'flex', 
      justifyContent: 'flex-end',
      alignItems: 'center',
      boxShadow: '0 1px 4px rgba(0,21,41,.08)'
    }}>
      <Dropdown menu={{ items }} placement="bottomRight">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          cursor: 'pointer',
          padding: '0 12px'
        }}>
          <span style={{ marginRight: 8 }}>{user.nickname}</span>
          <Avatar 
            src={user.avatar} 
            icon={<UserOutlined />}
            style={{ backgroundColor: '#87d068' }}
          />
        </div>
      </Dropdown>
    </AntHeader>
  );
};

export default Header; 