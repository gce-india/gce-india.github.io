import {
	Navbar,
	NavbarBrand
} from 'reactstrap';

import { title } from '../constants';

const Header = () => {
	return <Navbar
		color='dark'
		expand='md'
		className='mb-2'
		dark
	>
		<NavbarBrand href='/'>
			<img alt={title} src='/assets/logo.png' 
				style={{
					marginRight: '1ex'
				}}
				width={30}
				/>
			{ title }
		</NavbarBrand>
	</Navbar>;
};

export default Header;