import React, { useEffect, useState } from 'react';
import { ConsultancyItem } from './ConsultancyItem';

export const ConsultanciesTable = ({ title, header, items, className }) => {
	const [cols, setCols] = useState(header.length);
	const [dataLoaded, setDataLoaded] = useState(false);
	//console.log(items)
	useEffect(() => {
		console.log(header.length)
	}, [ConsultanciesTable])

	return (
		<>
			{header && (
				<div
					className={`flex flex-col border border-black rounded-xl shadow-2xl ${className}`}>
					<div className='bg-red-600 text-white border-b border-black rounded-t-xl text-center text-xl'>
						{title}
					</div>
					<div className='box'>
						<div
							className={`${ location.pathname == '/inicio' || location.pathname == '/historial' ? 'grid grid-cols-5 bg-slate-400 divide-x divide-slate-800' : 'grid grid-cols-4 bg-slate-400 divide-x divide-slate-800'}`}>
							{header.map((item, key) => (
								<h1
									key={key}
									className='text-center font-bold'>
									{item.label}
								</h1>
							))}
						</div>

						{items?.length > 0 && items ? (items.map((item, key) => (
							<ConsultancyItem
								key={key}
								header={header}
								cols={cols}
								item={item}
								className={`${key % 2 !== 0 ? 'bg-gray-200' : ''} ${
									key == items.length - 1 ? 'rounded-b-xl' : false
								}`}
							/>
						))) : <div className='w-full flex justify-center'>No se encontraron monitorias</div>}
					</div>
				</div>
			)}
		</>
	);
};
