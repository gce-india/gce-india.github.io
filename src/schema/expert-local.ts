interface Expert_ {
	name: string,
	username: string,
	university: string,
	location: string,
	country: string,
	pin: {
		longitude: number,
		latitude: number
	},
	email: string,
	avatar: string,
	skills: string[],
	communities: string[],
	social: {
		name: string,
		url: string
	},
	about: string
}

export type Expert = Expert_;