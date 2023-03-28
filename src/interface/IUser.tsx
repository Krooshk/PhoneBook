export enum Relative {
	relative = 'родственник',
	friend = 'друг',
	classmate = 'одноклассник',
	colleague = 'коллега',
}


export interface Iuser {
	[key: string]: any;
	'firstName': string;
	'lastName': string;
	'phone': string;
	'email': string;
	'organization': string;
	'relative': Relative;
	'id':string;
}