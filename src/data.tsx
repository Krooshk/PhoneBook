
import { Iuser } from './interface/IUser.jsx'
import { Relative } from './interface/IUser.jsx'

export const data: Iuser[] = [
	{
		firstName: 'Иван',
		lastName: 'Иванов',
		phone: 81234567898,
		email: 'van@mail.ru',
		website: 'qwerty.com',
		organization: 'Aviasales',
		address: 'Moscow',
		relative: Relative.colleague,
	},
	{
		firstName: 'Петя',
		lastName: 'Петров',
		phone: 2376239032467,
		email: 'petya@mail.ru',
		website: 'qwerty.com',
		organization: 'Lipgart',
		address: 'Spb',
		relative: Relative.colleague,
	},
	{
		firstName: 'Иван',
		lastName: 'Иванов',
		phone: 81234567898,
		email: '',
		website: 'qwerty.com',
		organization: 'Aviasales',
		address: 'Moscow',
		relative: Relative.friend,
	},
];