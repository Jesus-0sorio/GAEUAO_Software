import { useEffect, useRef } from 'react';

export const Modal = ({ component, visible, handleModal }) => {
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
			className={`fixed z-20 inset-0 ${visible}`}>
			<div className='flex items-center justify-center min-h-screen pt-4 pb-20 text-center'>
				<div
					id='modal'
					ref={modalRef}
					className='fixed inset-0 bg-gray-600 bg-opacity-60 flex justify-center items-center'>
					<div
						className=' bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all
        sm:my-8 sm:align-middle sm:max-w-2xl w-full'>
						<div className='h-[28rem] bg-white px-4 pt-5 pb-4 sm:p-4 sm:pb-4 flex'>
							<div className='flex flex-col items-start w-full'>
								<div className='modal-content text-center sm:text-center h-full w-full'>
									{ component }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
