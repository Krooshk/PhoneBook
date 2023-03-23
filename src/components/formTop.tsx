import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { data } from '../data.jsx';
import { Iuser } from '../interface/IUser.js';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};




export function FormTop(props: {
	add: (user:Iuser)=>void;
}) {


	const onFinish = (values: any) => {
		console.log(values);
		props.add(values.user);
	};

	return (
		<Form className='formTop'
			{...layout}
			name="nest-messages"
			onFinish={onFinish}
			style={{ maxWidth: 600}}
			validateMessages={validateMessages}
		>
			<Form.Item name={['user', 'firstName']} label="firstName" rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name={['user', 'lastName']} label="lastName" rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name={['user', 'phone']} label="phone" rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
				<Input />
			</Form.Item>
			<Form.Item name={['user', 'website']} label="Website">
				<Input />
			</Form.Item>
			<Form.Item name={['user', 'organization']} label="organization">
				<Input />
			</Form.Item>
			<Form.Item name={['user', 'address']} label="address">
				<Input />
			</Form.Item>
			<Form.Item name={['user', 'relative']} label="relative">
				<Input />
			</Form.Item>
			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button type="primary" htmlType="submit">
					Add
				</Button>
			</Form.Item>
		</Form>
	);
}