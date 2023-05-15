import React, { useState } from 'react';
import { TbPointFilled } from 'react-icons/tb';
import { Modal } from '../Modal';
import { ConsultancyModal } from './ConsultancyModal';
import { useLocation } from 'react-router-dom';

export const ConsultancyItem = ({ item, cols, className, header }) => {
	const [modalState, setModalState] = useState('hidden');

	const handleModal = (visible) => {
		if (visible) {
			setModalState('block');
		} else {
			setModalState('hidden');
		}
	};

	let startTime = item.start_time.split(':');
	let endTime = item.end_time.split(':');

	return (
		<>
			<div
				className={`grid grid-cols-${cols} text-center border ${className}`}
				onClick={() => handleModal(true)}>
				<div className='flex w-auto items-center'>
					<img
						src='https://randomuser.me/api/portraits/men/18.jpg'
						alt=''
						className='border rounded-full w-1/4 mx-3 my-2'
					/>
					<div className='flex flex-col'>
						<h1 className='sm:text-sm'>
							{item.professor_id
								? item.professor_id.name
								: item.monitor_id.name}
						</h1>
						<h2 className='text-xs'>
							{item.professor_id
								? item.professor_id.degree
								: item.monitor_id.career}
						</h2>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<h1 className='text-sm'>{item.subject_id.name}</h1>
				</div>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-xs'>{item.monitor_date}</h1>
					{/* <h2 className='text-xs'>{item.schedule.day}</h2> */}
					<h2 className='text-xs'>{`${startTime[0]}:${startTime[1]} - ${endTime[0]}:${endTime[1]}`}</h2>
				</div>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-xs'>{item.classroom}</h1>
					<h2 className='text-xs'>{`Aulas ${item.classroom.split('')[0]}`}</h2>
					<h2 className='text-xs'>
						{`Piso ${item.classroom.split('')[1]} Salón ${
							item.classroom.split('')[3]
						}`}
					</h2>
				</div>

				{header.some((objeto) => objeto.label === 'Estado') ? (
					<div className='flex items-center justify-center'>
						<TbPointFilled
							color={`${
								item.monitoring_status === 'Proxima' ? 'green' : 'red'
							}`}
						/>
						<h1>{item.monitoring_status}</h1>
					</div>
				) : (
					<></>
				)}
			</div>

			<Modal
				handleModal={handleModal}
				visible={modalState}
				id={item.id}
				component={
					<ConsultancyModal
						item={item}
						handleModal={handleModal}
					/>
				}
			/>
		</>
	);
};
