import { Iuser } from '../interface/IUser.jsx'

export function User({ item }: { item: Iuser }): JSX.Element {
	return (
		<div className='user'>
			<div>
				<span>{item.relative} </span>
				<span>{item.firstName} </span>
				<span>{item.lastName} </span>
				<span>{item.phone} </span>
			</div>
			<span>{item.email} </span>
			<span>{item.organization} </span>
			<span>{item.address} </span>
		</div>

	)
}

