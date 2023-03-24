import { useEffect, useState } from 'react';
import { Button, Input, Select, Space, Layout, Modal, Pagination } from 'antd'
import type { PaginationProps } from 'antd';
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
	height:'550px',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
};



function App() {


	const [isModalOpen, setIsModalOpen] = useState(false);
	const [users, setUsers] = useState(data);
	const [filterUsers, setfilterUsers] = useState(users);
	const [filterWord, setFilterWord] = useState({ value: 'all', label: 'all' });
	const [input, setInput] = useState('');
	const [contactsPerPage]=useState(5);
	const [current, setCurrent] = useState(1);
	

	const lastIndex=current*contactsPerPage;
	const firstIndex=lastIndex-contactsPerPage;



	function add(user: Iuser) {
		setUsers([...users, user]);
		setfilterUsers([...users, user]);
	}



	const showModal = () => {
		setIsModalOpen(true);
	};


	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleChange = (value: { value: string; label: string }) => {
		setFilterWord(value);
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

	const changePage: PaginationProps['onChange'] = (page) => {
		setCurrent(page);
	  };

	


	function handlesearch() {
		if (filterWord === 'all') {
			setfilterUsers(users)
		}
		else {
			setfilterUsers(users.filter(item=>{
				console.log(filterWord);
				return item[filterWord].includes(input);
			}));
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
							{filterUsers.slice(firstIndex,lastIndex).map((item, index) => {
								return <User key={index} item={item} />
							}
							)}
						</Space>
					</Content>
					<Pagination simple defaultCurrent={current} total={filterUsers.length} defaultPageSize={contactsPerPage} onChange={changePage}/>
				</Layout>
			</Space>

		</>
	)
}

export default App
