import React, { useEffect, useRef } from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { UserOutlined, ShoppingCartOutlined, FileOutlined } from '@ant-design/icons';
import * as echarts from 'echarts';

const Home: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option: echarts.EChartsOption = {
        title: {
          text: '周访问量统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      };
      chart.setOption(option);

      return () => {
        chart.dispose();
      };
    }
  }, []);

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="用户总数"
              value={1128}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="订单总数"
              value={93}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="文章总数"
              value={56}
              prefix={<FileOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Card style={{ marginTop: 16 }}>
        <div ref={chartRef} style={{ height: 400 }} />
      </Card>
    </div>
  );
};

export default Home; 