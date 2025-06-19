import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  return (
    <div>
      <h2>欢迎使用 AstrumStack</h2>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="用户数"
              value={1}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="文件数"
              value={0}
              prefix={<FileOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="团队数"
              value={0}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home; 