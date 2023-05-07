import React, { useState } from 'react';
import Select from 'react-tailwindcss-select';
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({ items }) => {
	const [selectedItem, setSelectedItem] = useState('');
	const [selectedDate, setSelectedDate] = useState('');

	const handleDateChange = (e) => {
		setSelectedDate(e.target.value);
	};

	const handleItemClick = (item) => {
		setSelectedItem(item);
	};

	return (
		<>
			<div className='grid grid-cols-9 divide-x w-full max-w-xl mx-auto border border-gray-500 rounded-full items-center'>
				<div className='flex justify-center items-center col-span-2 bg-red-600 text-white h-full border rounded-s-full'>
					<span>Asignatura:</span>
				</div>
				<div className='px-2 col-span-4'>
					<Select
						value={selectedItem}
						onChange={handleItemClick}
						options={items}
						isSearchable={true}
						placeholder='Seleccione...'
						searchInputPlaceholder='Buscar'
						noOptionsMessage='No encontrada'
						classNames={``}
					/>
				</div>
				<div className='flex items-center col-span-2 h-full w-full relative'>
					<input
						type='date'
						id='floating_outlined'
						className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900'
					/>
					<label
						htmlFor='floating_outlined'
						className='absolute text-sm scale-75 top-3 origin-[0] px-2 text-black -translate-y-3 left-1 select-none'>
						Fecha
					</label>
				</div>
				<div className='flex justify-center h-full'>
					<button className='bg-red-600 border rounded-e-full h-full w-full flex justify-center items-center'>
						<FaSearch
							color='white'
							size={25}
						/>
					</button>
				</div>
			</div>
		</>
	);
};
