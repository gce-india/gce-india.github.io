interface Expert_ {
	avatar: string,
	name: string,
	username: string,
	university: string,
	location: string,
	country: string,
	email: string,
	social: {
		name: string,
		url: string
	}[],
	about: string
	skills: string[],
	communities: string[]
}

export type Expert = Expert_;