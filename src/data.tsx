
import { Iuser } from './interface/IUser.jsx'
import { Relative } from './interface/IUser.jsx'

export const data: Iuser[] = [
	{
		firstName: 'Иван',
		lastName: 'Иванов',
		phone: 81234567898,
		email: 'van@mail.ru',
		organization: 'Aviasales',
		address: 'Moscow',
		relative: Relative.colleague,
	},
	{
		firstName: 'Петя',
		lastName: 'Петров',
		phone: 2376239032467,
		email: 'petya@mail.ru',
		organization: 'Lipgart',
		address: 'Spb',
		relative: Relative.colleague,
	},
	{
		firstName: 'Иван',
		lastName: 'Иванов',
		phone: 81234567898,
		email: '',
		organization: 'Aviasales',
		address: 'Moscow',
		relative: Relative.friend,
	},
];