import {
	Navbar,
	Collapse,
	Nav,
	NavItem
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import { title } from '../constants';

const Header = () => {
	return <header>
		<Navbar
			color='dark'
			expand='md'
			className='mb-2'
			dark
		>
			<Link className='navbar-brand' to='/'>
				<img alt={title} src='/assets/logo.png' 
					style={{
						marginRight: '1ex'
					}}
					width={30}
				/>
				{ title }
			</Link>
			<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<Collapse id='navbar' navbar>
				<Nav className='ms-auto' navbar>
					<NavItem>
						<NavLink className='nav-link' to='/'>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link' to='/blog'>Blog</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link' to='/discover'>Discover</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link' to='/about'>About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link' to='/contact'>Contact Us</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	</header>;
};

export default Header;