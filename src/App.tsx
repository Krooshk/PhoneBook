import { useEffect, useState } from 'react';
import { Button, Input, Select, Space, Layout, Modal, Pagination, Form } from 'antd'
import type { PaginationProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { User } from './components/user.jsx'
import { FormTop } from './components/formTop.jsx'

import { nanoid } from 'nanoid';
import { data } from './data.jsx';
import { Iuser } from './interface/IUser.js';

import { headerStyle, contentStyle } from './styles/app'

const { Header, Content } = Layout;





function App() {


	const [isModalOpen, setIsModalOpen] = useState(false);
	const [users, setUsers] = useState(data);
	const [filterUsers, setfilterUsers] = useState(users);
	const [filterWord, setFilterWord] = useState('firstName');
	const [input, setInput] = useState('');
	const [contactsPerPage] = useState(5);
	const [current, setCurrent] = useState(1);


	const lastIndex = current * contactsPerPage;
	const firstIndex = lastIndex - contactsPerPage;



	function add(user: Iuser) {
		setUsers([...users, { ...user, id: nanoid() }]);
		setfilterUsers([...users, { ...user, id: nanoid() }]);
	}

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleChange = (value: any) => {
		setFilterWord(value);
	};

	const { Option } = Select;

	const selectBefore = (
		<Select
			style={{ maxWidth: 120 }}
			onChange={(value) => {
				handleChange(value)
			}
			}
			defaultValue={{
				value: 'firstName',
				label: 'firstName',
			}}
		>
			<Option value="firstName">firstName</Option>
			<Option value="lastName">lastName</Option>
			<Option value="organization">organization</Option>
			<Option value="relative">relative</Option>
		</Select>
	);

	function handleChangeInput(event: any) {
		setInput(event.target.value)
	}

	const changePage: PaginationProps['onChange'] = (page) => {
		setCurrent(page);
	};

	function handleDelete(id_out: string) {
		setUsers(users.filter(item => item.id !== id_out));
		setfilterUsers(filterUsers.filter(item => item.id !== id_out));
	}

	function changeData(obj: {}, id: string) {
		let copy: Iuser[] = Object.assign([], users);
		let index: number = users.findIndex(item => item.id == id);
		copy[index] = { ...data[index], ...obj };
		setUsers(copy);
		setfilterUsers(copy);
	}

	function handlesearch() {
		if (filterWord === '') {
			setfilterUsers(users)
		}
		else {
			setfilterUsers(users.filter(item => {
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
							<Form >
								<Space.Compact>
									<Input addonBefore={selectBefore} onPressEnter={handlesearch} placeholder="Start search" value={input} onChange={handleChangeInput} />
									<Button onClick={handlesearch} type="primary">
										Search
									</Button>
								</Space.Compact>
							</Form>
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
							{filterUsers.slice(firstIndex, lastIndex).map((item, index) => {
								return <User key={index} item={item} changeData={changeData} handleDelete={handleDelete} />
							}
							)}
						</Space>
					</Content>
					<Pagination simple defaultCurrent={current} total={filterUsers.length} defaultPageSize={contactsPerPage} onChange={changePage} />
				</Layout>
			</Space>

		</>
	)
}

export default App
