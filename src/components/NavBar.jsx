import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/CompleteLogo.svg';
import UAOLogo from '../assets/UAO.svg';

export const NavBar = () => {
	return (
		<>
			<nav className='fixed w-screen z-10   bg-white border-gray-200 border-b-2'>
				<div className='flex flex-wrap items-center justify-between mx-auto p-3'>
					<div className='flex items-center gap-2'>
						<Link
							to='https://www.uao.edu.co/'
							className='flex items-center'>
							<img
								src={UAOLogo}
								className='h-20 mr-1'
								alt='GAE Logo'
							/>
						</Link>
						<div
							className='hidden w-full md:block md:w-auto'
							id='navbar-default'>
							<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white'>
								<li>
									<NavLink
										to='/'
										className={({ isActive }) =>
											(isActive
												? ' text-white md:text-red-700 md:bg-transparent'
												: ' text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700') +
											'block py-2 pl-3 pr-4 rounded md:p-0'
										}
										aria-current='page'>
										Documentacion
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/excelencia'
										className={({ isActive }) =>
											(isActive
												? 'text-white md:text-red-700 md:bg-transparent'
												: ' text-gray-900 hover:bg-red-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700') +
											'block py-2 pl-3 pr-4 rounded md:p-0'
										}>
										Camino a la Excelencia
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/pilos'
										className={({ isActive }) =>
											(isActive
												? 'text-white md:text-red-700 md:bg-transparent'
												: ' text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700') +
											'block py-2 pl-3 pr-4 rounded md:p-0'
										}>
										Pilos
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<NavLink
						to='/'
						className='flex items-center'>
						<img
							src={Logo}
							className='h-20'
							alt='GAE Logo'
						/>
					</NavLink>
				</div>
			</nav>
		</>
	);
};
