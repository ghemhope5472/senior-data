import React from 'react'
import { Button, Form, Input, Select, message } from 'antd';
import { auth, db } from '../config/firebase'

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function AddForm() {

    const [form] = Form.useForm();
    const onGenderChange = (value) => {
      switch (value) {
        case 'male':
          form.setFieldsValue({
            note: 'Hi, man!',
          });
          break;
        case 'female':
          form.setFieldsValue({
            note: 'Hi, lady!',
          });
          break;
        case 'other':
          form.setFieldsValue({
            note: 'Hi there!',
          });
          break;
        default:
      }
    };

    const onFinish = (values) => {
      console.log(values);
      db.collection("DATA").doc().set(values).then(() => {
        message.success("New Data Added!")
        onReset()
      })
    };

    const onReset = () => {
      form.resetFields();
    };
    const onFill = () => {
      form.setFieldsValue({
        note: 'Hello world!',
        gender: 'male',
      });
    };
  return (
    <div style={{width:"100%", marginTop:"5rem"}}>
<Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >

        <Select
          placeholder="Select a option"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
<Form.Item
        name="age"
        label="Age"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type='number' />
      </Form.Item>
      <Form.Item
        name="educational_attainment"
        label="Educational Attainment"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="hs">High School </Option>
          <Option value="shs">Senior High School</Option>
          <Option value="college">College</Option>
        </Select>
      </Form.Item>
      
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default AddForm
