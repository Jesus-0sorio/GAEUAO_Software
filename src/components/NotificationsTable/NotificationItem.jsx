import React from 'react';
import { MdFreeCancellation } from 'react-icons/md';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { GrInfo } from 'react-icons/gr';

export const NotificationItem = ({ item, className }) => {
	const icon = (value) => {
		switch (value) {
			case 'Cancelled':
				return <MdFreeCancellation className='text-2xl text-red-600' />;
			case 'Approved':
				return <FaRegCalendarCheck className='text-2xl text-green-600' />;
			case 'Info':
				return <GrInfo className='text-2xl text-blue-600' />;
		}
	};

	return (
		<>
			<div className={`grid grid-cols-4 border px-2 ${className}`}>
				<div className='flex items-center col-span-3 space-x-2'>
					<div>{icon(item.icon)}</div>
					<div className='flex flex-col my-2'>
						<h1 className='text-sm font-bold'>{item.title}</h1>
						<span className='text-xs'>{item.label}</span>
					</div>
				</div>
				<div className='flex items-center text-sm'>
					{item.date}
				</div>
			</div>
		</>
	);
};
