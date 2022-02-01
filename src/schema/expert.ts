interface Module_ { name: string, img: string }

interface Expert_ {
	name: string,
	username: string,
	picture: string,
	title: string,
	university: string,
	location: string,
	modules: Module[],
	about: string[],
	skills: string[]
}

export type Module = Module_;
export type Expert = Expert_;