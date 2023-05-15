import React, { useEffect, useState } from 'react';
import { Searchbar } from '../components/Home/SearchBar';
import { ConsultanciesTable } from '../components/ConsultanciesTable/ConsultanciesTable';
import { NavBarStart } from '../components/NavBarStart';

export const Schedule = () => {
	const [consultancies, setConsultancies] = React.useState([]);

	const [header, setHeader] = useState([
		{ label: 'Asesor', path: 'advisor' },
		{ label: 'Asignatura', path: 'subject' },
		{ label: 'Fecha', path: 'date' },
		{ label: 'Salón', path: 'room' },
	]);

	return (
		<>
			<div className='flex flex-col items-center pt-32'>
				<Searchbar />
				<br />
				<ConsultanciesTable
					title={`Encuentros`}
					header={header}
					items={consultancies}
					className={'w-1/2'}
				/>
			</div>
		</>
	);
};
