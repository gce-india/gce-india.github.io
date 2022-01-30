import {
	Navbar,
	NavbarBrand,
	Collapse,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

import { title } from '../constants';

const Header = () => {
	return <header>
		<Navbar
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
			<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<Collapse id='navbar' navbar>
				<Nav className='ms-auto' navbar>
					<NavItem>
						<NavLink href='/'>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/discover'>Discover</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/about'>About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/contact'>Contact Us</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	</header>;
};

export default Header;