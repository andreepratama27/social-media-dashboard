export type Post = {
	id: number;
	userId: number;
	body: string;
	title: string;
}

export type Address = {
	city: string;
	geo: {
		lat: string;
		lng: string;
	};
	street: string;
	suite: string;
	zipcode: string;
}

export type Company = {
	bs: string;
	catchPhrase: string;
	name: string;
}

export type User = {
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
	address: Address;
	company: Company;
}

export type Albums = {
	userId: number,
	id: number,
	title: string
}

export type Photos = {
	albumId: number,
	id: number,
	title: string,
	thumbnailUrl: string,
	url: string
}