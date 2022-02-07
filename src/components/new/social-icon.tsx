import {
	faGlobe
} from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
	faSpotify,
	faStackOverflow,
	faTwitter,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ name }: { name?: string }) => {
	switch (name?.toLocaleLowerCase()) {
	case 'facebook':
		return  (
			<FontAwesomeIcon
				style={{
					marginLeft: 2,
					marginRight: 8
				}}
				color='blue'
				icon={faFacebook} />
		);
	case 'twitter':
		return  (
			<FontAwesomeIcon
				style={{
					marginLeft: 2,
					marginRight: 8
				}}
				color='#66F'
				icon={faTwitter} />
		);
	case 'instagram':
		return  (
			<FontAwesomeIcon
				style={{
					marginLeft: 2,
					marginRight: 8
				}}
				color='#e95950'
				icon={faInstagram} />
		);
	case 'youtube':
		return  (
			<FontAwesomeIcon
				style={{
					marginLeft: 2,
					marginRight: 8
				}}
				color='red'
				icon={faYoutube} />
		);
	case 'linkedin':
		return  (
			<FontAwesomeIcon
				style={{
					marginLeft: 2,
					marginRight: 8
				}}
				color='blue'
				icon={faLinkedin} />
		);
	case 'github':
		return  (
			<FontAwesomeIcon
				style={{
					marginLeft: 2,
					marginRight: 8
				}}
				color='black'
				icon={faGithub} />
		);
	case 'spotify':
		return  (
			<FontAwesomeIcon
				style={{
					marginLeft: 2,
					marginRight: 8
				}}
				color='#0D0'
				icon={faSpotify} />
		);
	case 'stack overflow':
		return  (
			<FontAwesomeIcon
				style={{
					marginLeft: 2,
					marginRight: 8
				}}
				color='red'
				icon={faStackOverflow} />
		);
	case 'website':
	default:
		return  (
			<FontAwesomeIcon
				style={{
					marginLeft: 2,
					marginRight: 8
				}}
				icon={faGlobe} />
		);
	}
};

export default Icon;