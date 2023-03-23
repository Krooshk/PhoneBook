export enum Relative {
	relative = 'родственник',
	friend = 'друг',
	classmate = 'одноклассник',
	colleague = 'коллега',
}


export interface Iuser {
	'firstName': string;
	'lastName': string;
	'phone': number;
	'email': string;
	'organization': string;
	'address': string;
	'relative': Relative;
}