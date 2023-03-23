import { useState } from 'react';
import { Button, Input, Select, Space, Layout, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { User } from './components/user.jsx'
import { FormTop } from './components/formTop.jsx'
import './App.css'

import { data } from './data.jsx';
import { Iuser } from './interface/IUser.js';

const { Header, Content } = Layout;


const headerStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
	width: '700px'
};

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
};



function App() {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [users, setUsers] = useState(data);

	function add(user: Iuser) {
		setUsers([...users, user])
	}



	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};


	const { Search } = Input;
	const { Option } = Select;

	const selectBefore = (
		<Select defaultValue="http://">
			<Option value="http://">http://</Option>
			<Option value="https://">https://</Option>
		</Select>
	);

	const options = [
		{
			value: 'zhejiang',
			label: 'Zhejiang',
		},
		{
			value: 'jiangsu',
			label: 'Jiangsu',
		},
	];

	return (
		<>
			<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
				<Layout>
					<Header style={headerStyle}>
						<Space direction="vertical" size="middle">
							<Space.Compact style={{ width: '100%' }}>
								<Input addonBefore={selectBefore} defaultValue="Start search" />
								<Button type="primary">
									Search
								</Button>
							</Space.Compact>
						</Space>

						<Button type="primary" onClick={showModal}
							icon={<PlusOutlined />}
						/>
						<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
							<FormTop add={add} />
						</Modal>

					</Header>
					<Content style={contentStyle}>
						<Space direction="vertical" size="middle">
							{users.map((item, index) => {
								return <User key={index} item={item} />
							}
							)}
						</Space>
					</Content>
				</Layout>
			</Space>

		</>
	)
}

export default App
