import { useState } from 'react';
import { Button, Input, Select, Space, Layout, Modal, Pagination } from 'antd'
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
	width: '700px',
};

const contentStyle: React.CSSProperties = {
	paddingTop: '15px',
	paddingBottom: '15px',
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
};



function App() {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [users, setUsers] = useState(data);
	const [filterUsers, setfilterUsers] = useState(users);
	const [filter, setFilter] = useState({ value: 'all', label: 'all' });
	const [input, setInput] = useState('');

	function add(user: Iuser) {
		setUsers([...users, user])
	}



	const showModal = () => {
		setIsModalOpen(true);
	};


	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleChange = (value: { value: string; label: string }) => {
		setFilter(value);
	};

	const { Search } = Input;
	const { Option } = Select;

	const selectBefore = (
		<Select
			style={{ width: 120 }}
			onChange={handleChange}
			defaultValue={{
				value: 'all',
				label: 'all',
			}}
			options={[
				{
					value: 'all',
					label: 'all',
				},
				{
					value: 'firstName',
					label: 'firstName',
				},
				{
					value: 'lastName',
					label: 'lastName',
				},
				{
					value: 'organization',
					label: 'organization',
				},
				{
					value: 'relative',
					label: 'relative',
				},
			]}
		>
		</Select>
	);

	function handleChangeInput(event: any) {
		setInput(event.target.value)
	}


	function handlesearch() {
		const filterWord=filter.value;
		if (filterWord === 'all') {
			setfilterUsers(users)
		}
		else {
			setfilterUsers(users.filter(item=>{return item['relative'].includes(input)}));
		}
	}


	return (
		<>
			<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
				<Layout>
					<Header style={headerStyle}>
						<Space direction="vertical" size="middle">
							<Space.Compact style={{ width: '100%' }}>
								<Input addonBefore={selectBefore} placeholder="Start search" value={input} onChange={handleChangeInput} />
								<Button onClick={handlesearch} type="primary">
									Search
								</Button>
							</Space.Compact>
						</Space>

						<Button type="primary" onClick={showModal}
							icon={<PlusOutlined />}
						/>
						<Modal
							open={isModalOpen}
							onCancel={handleCancel}
							footer={null}>
							<FormTop add={add} />
						</Modal>

					</Header>
					<Content
						style={contentStyle}>
						<Space direction="vertical" size="middle">
							{filterUsers.map((item, index) => {
								return <User key={index} item={item} />
							}
							)}
						</Space>
						{/* <Pagination simple defaultCurrent={2} total={50} /> */}
					</Content>
				</Layout>
			</Space>

		</>
	)
}

export default App
