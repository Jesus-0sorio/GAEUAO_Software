import React, { useEffect, useState } from 'react';
import { TbPointFilled } from "react-icons/tb";
import { Modal } from '../Modal';
import { ConsultancyModal } from './ConsultancyModal';

export const ConsultancyItem = ({ item, className }) => {
	const [modalState, setModalState] = useState('hidden');

	const handleModal = (visible) => {
		if (visible) {
			setModalState('block');
		} else {
			setModalState('hidden');
		}
	};


	return (
		<>
			<div className={`grid grid-cols-5 text-center border ${className}`} onClick={() => handleModal(true)}>
				<div className='flex w-auto col-span-1 items-center'>
					<img
						src='https://randomuser.me/api/portraits/men/18.jpg'
						alt=''
						className='border rounded-full w-1/4 mx-3 my-2'
					/>
					<div className='flex flex-col'>
						<h1 className='sm:text-sm'>{ item.advisor.name }</h1>
						<h2 className='text-xs'>{ item.advisor.career }</h2>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<h1 className='text-sm'>{ item.subject }</h1>
				</div>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-xs'>{ item.schedule.date }</h1>
					<h2 className='text-xs'>{ item.schedule.day }</h2>
					<h2 className='text-xs'>{ item.schedule.time }</h2>
				</div>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-xs'>{ item.classRoom.label }</h1>
					<h2 className='text-xs'>{ item.classRoom.place }</h2>
					<h2 className='text-xs'>{ item.classRoom.floor }  { item.classRoom.room }</h2>
				</div>
				<div className='flex items-center justify-center'>
					<TbPointFilled color={`${item.status === 'Próximo' ? 'green' : 'red'}`}/>
					<h1>{ item.status }</h1>
				</div>
			</div>
			<Modal
				handleModal={handleModal}
				visible={modalState}
				id={item.id}
				component={<ConsultancyModal id={item.id} handleModal={handleModal}/>}
			/>
		</>
	);
};
