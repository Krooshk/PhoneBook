import { Iuser } from '../interface/IUser.jsx'
import { useState } from 'react';
import { Descriptions, Button, Layout, Space, Avatar, Card, Input } from 'antd'
import { EditOutlined, CloseOutlined } from '@ant-design/icons';


export function User(props: {
	item: Iuser,
	handleDelete: (id: string) => void,
	changeData: ({ },id:string) => void
}): JSX.Element {

	const [edit, setEdit] = useState(false);
	const [data, setData] = useState({});

	function handleDelete() {
		if (!edit) {
			props.handleDelete(props.item.id)
		} else {
		alert('Close edit mode');
		}
	}

	function handleChange() {
		if (edit) {
			props.changeData(data, props.item.id)
		}
		setEdit(!edit);
	}

	function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const key = e.target.parentElement!.previousElementSibling!.textContent;
		const value = e.target.value;

		if (key !== null) {
			const obj = { ...data };
			obj[key] = value;
			setData({ ...obj })
		}

	}



	return (
		<Space >
			<Card
				size='small'
				style={{ width: 600, height: 120 }}
				actions={[
					<EditOutlined key="edit" onClick={handleChange} />,
					<CloseOutlined key="close" onClick={handleDelete} />,
				]}
			>
				<Descriptions>
					<Descriptions.Item label="firstName">{edit ? (<Input size="small" onChange={handleChangeInput} defaultValue={props.item.firstName} />) : props.item.firstName}</Descriptions.Item>
					<Descriptions.Item label="lastName">{edit ? (<Input size="small" onChange={handleChangeInput} defaultValue={props.item.lastName} />) : props.item.lastName}</Descriptions.Item>
					<Descriptions.Item label="phone">{edit ? (<Input size="small" onChange={handleChangeInput} defaultValue={props.item.phone} />) : props.item.phone}</Descriptions.Item>
					<Descriptions.Item label="email">{edit ? (<Input size="small" onChange={handleChangeInput} defaultValue={props.item.email} />) : props.item.email}</Descriptions.Item>
					<Descriptions.Item label="organization">{edit ? (<Input size="small" onChange={handleChangeInput} defaultValue={props.item.organization} />) : props.item.organization}</Descriptions.Item>
					<Descriptions.Item label="relative">{props.item.relative}</Descriptions.Item>
				</Descriptions>
			</Card>

		</Space>
	)
}
