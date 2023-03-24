import { Iuser } from '../interface/IUser.jsx'
import { Descriptions, Button, Layout, Space } from 'antd'
export function User({ item }: { item: Iuser }): JSX.Element {


	return (
		<Space className='user'>
			<Descriptions >
				<Descriptions.Item label="firstName">{item.firstName}</Descriptions.Item>
				<Descriptions.Item label="lastName">{item.lastName}</Descriptions.Item>
				<Descriptions.Item label="phone">{item.phone}</Descriptions.Item>
				<Descriptions.Item label="email">{item.email}</Descriptions.Item>
				<Descriptions.Item label="organization">{item.organization}</Descriptions.Item>
				<Descriptions.Item label="relative">{item.relative}</Descriptions.Item>
			</Descriptions>
		</Space>
	)
}
