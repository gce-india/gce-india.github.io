interface ExpertMini_ {
	username: string,
    name: string,
    university: string,
    location: string,
    country: string,
    avatar: string,
    communities: string[],
	local?: boolean,
	blogs?: boolean
}

interface ExternalExpertMini_ {
	name: string,
	username: string,
	picture: string,
	university: string,
	location: string,
	local?: boolean,
	blogs?: boolean
}

export type ExpertMini = ExpertMini_;
export type ExternalExpertMini = ExternalExpertMini_;