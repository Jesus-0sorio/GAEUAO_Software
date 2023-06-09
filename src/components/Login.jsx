import { useEffect, useRef, useState } from 'react';
import {
	HiOutlineLockClosed,
	HiOutlineMailOpen,
	HiOutlineUserCircle,
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/slices/auth/thunks';
import  Swal  from 'sweetalert2';

export const Login = ({ handleModal, visible }) => {
	const modalRef = useRef(null);
	const modalBgRef = useRef(null);

	const dispatch = useDispatch();

	const { token } = useSelector((state) => state.auth);

	const [email, setEmail] = useState('juan@gmail.com');
	const [password, setPassword] = useState('12345678');

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	useEffect(() => {
		const handleClick = (e) => {
			if (modalRef.current.id === e.target.id) {
				setEmail('');
				setPassword('');
				handleModal(false);
			} else if (e.target.id === 'modalBg') {
				handleModal(true);
			}
		};
		window.addEventListener('click', handleClick);

		return () => window.removeEventListener('click', handleClick);
	}, [modalRef]);

	const navigate = useNavigate();

	const onLogin = async () => {
		if (email === '' || password === '') {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Llene todos los campos por favor!',
			});
			return;
		}
		try {
			dispatch(login(email, password));
		} catch (error) {
			alert('Error al iniciar sesión');
			console.log(error);
		}
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/dashboard');
		}
	}, []);

	useEffect(() => {
		token && navigate('/inicio');
		// console.log('cuando carga la pg')
	}, [token]);

	return (
		<div
			ref={modalBgRef}
			id='modalBg'
			className={`fixed inset-0 ${visible}`}>
			<div className='flex items-center justify-center min-h-screen pt-4 pb-20 text-center'>
				<div
					id='modal'
					ref={modalRef}
					className='fixed inset-0 bg-gray-600 bg-opacity-60 flex justify-center items-center'>
					<div
						className=' bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all
        sm:my-8 sm:align-middle sm:max-w-xl w-full'>
						<div className='h-[28rem] bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center'>
							<div className='flex flex-col items-start'>
								<div className='modal-content text-center sm:text-center'>
									<div className='m-auto flex-shrink-0 flex items-center justify-center h-40 w-full rounded-md bg-red-600 sm:mx-0 sm:h-10 text-white'>
										Estudiante
									</div>
									<div className='modal-text flex flex-col items-center w-full gap-3'>
										<HiOutlineUserCircle size='130' />
										<div className='flex items-center w-full'>
											<span className='border border-black rounded-l-md border-r-0 h-12'>
												<HiOutlineMailOpen size={'44'} />
											</span>
											<input
												value={email}
												onChange={handleEmail}
												id='email'
												type='email'
												className='w-full h-12 p-3 border border-l-0 rounded-r-md border-black'
												placeholder='email@example.com'
											/>
										</div>

										<div className='flex items-center'>
											<span className='border border-black rounded-l-md border-r-0 h-12'>
												<HiOutlineLockClosed size={'44'} />
											</span>
											<input
												value={password}
												onChange={handlePassword}
												id='password'
												type='password'
												className='w-52 h-12 p-3 border border-l-0 rounded-r-md border-black'
												placeholder='********'
											/>
										</div>
										<button
											onClick={onLogin}
											className='mt-2 bg-red-600 w-full text-white h-10 rounded-md'>
											Iniciar sesion
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
