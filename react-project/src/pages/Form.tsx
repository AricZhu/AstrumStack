import React from 'react';
import { Form, Input, Button, Card, Select, DatePicker, InputNumber, Radio, Checkbox, message } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

interface FormValues {
  username: string;
  password: string;
  age: number;
  gender: 'male' | 'female';
  city: string;
  birthday: string;
  hobbies: string[];
  introduction?: string;
}

const FormPage: React.FC = () => {
  const [form] = Form.useForm<FormValues>();

  const onFinish = (values: FormValues) => {
    console.log('Success:', values);
    message.success('提交成功！');
  };

  const onFinishFailed = (errorInfo: { values: FormValues; errorFields: unknown[] }) => {
    console.log('Failed:', errorInfo);
    message.error('提交失败，请检查表单！');
  };

  return (
    <Card>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: '请输入年龄！' }]}
        >
          <InputNumber min={1} max={100} />
        </Form.Item>

        <Form.Item
          label="性别"
          name="gender"
          rules={[{ required: true, message: '请选择性别！' }]}
        >
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="城市"
          name="city"
          rules={[{ required: true, message: '请选择城市！' }]}
        >
          <Select>
            <Option value="beijing">北京</Option>
            <Option value="shanghai">上海</Option>
            <Option value="guangzhou">广州</Option>
            <Option value="shenzhen">深圳</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="生日"
          name="birthday"
          rules={[{ required: true, message: '请选择生日！' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="兴趣爱好"
          name="hobbies"
          rules={[{ required: true, message: '请选择兴趣爱好！' }]}
        >
          <Checkbox.Group>
            <Checkbox value="reading">阅读</Checkbox>
            <Checkbox value="sports">运动</Checkbox>
            <Checkbox value="music">音乐</Checkbox>
            <Checkbox value="travel">旅行</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          label="个人简介"
          name="introduction"
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={() => form.resetFields()}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormPage; 