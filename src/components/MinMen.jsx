import { useEffect, useRef } from 'react';
import { BsFillPersonFill,BsChatRightTextFill,BsQuestionCircle } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";


export const MinMen = ({ handleModal, visible }) => {
	const modalRef = useRef(null);
	const modalBgRef = useRef(null);
	useEffect(() => {
		const handleClick = (e) => {
			if (modalRef.current.id === e.target.id) {
				handleModal(false);
			} else if (e.target.id === 'modalBg') {
				handleModal(true);
			}
		};
		window.addEventListener('click', handleClick);

		return () => window.removeEventListener('click', handleClick);
	}, [modalRef]);
	return (
		<div
			ref={modalBgRef}
			id='modalBg'
			className={`fixed inset-0 ${visible}`}>
			<div className='flex items-center justify-center min-h-screen pt-4 pb-10 text-center'>
				<div
					id='modal'
					ref={modalRef}
					className='fixed inset-0 bg-gray-600 bg-opacity-60 flex justify-center items-center'>
					<div
						className=' bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-allsm:my-8 sm:align-middle'>
						<div className=' bg-gray-300 px-1 pt-1 pb-1 sm:p-0.5 sm:pb-0.5 flex items-center justify-center'>
							<div className='flex flex-col items-start'>
								<div className='modal-content text-center sm:text-center'>
								<button className='group flex md:p-2  border border-black  px-8 py-1 bg-gray-300 w-full text-black h-10 rounded-md text-center'>
								<BsFillPersonFill className='text-2xl'/> <span>Perfil</span> 
								</button>
								<button className='group flex md:p-2  border border-black  px-8 py-1 bg-gray-300 w-full text-black h-10 rounded-md text-center'>
								<BsQuestionCircle className='text-2xl'/> <span>Ayuda</span> 
								</button>
                                <button className='group flex md:p-2  border border-black  px-8 py-1 bg-gray-300 w-full text-black h-10 rounded-md text-center'>
								<BsChatRightTextFill className='text-2xl'/> <span>Sugerencias</span>
								</button>
								<button className='group flex md:p-2  border border-black  px-8 py-1 bg-gray-300 w-full text-black h-10 rounded-md text-center'>
								<CiLogout className='text-2xl'/> <span>Cerrar Sesion</span>
								</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
