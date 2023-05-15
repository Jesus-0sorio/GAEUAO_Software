import React from 'react';
import { ConsultanciesTable } from '../components/ConsultanciesTable/ConsultanciesTable';

export const History = () => {
	const header = [
		{ label: 'Fecha' },
		{ label: 'Asesor' },
		{ label: 'Asignatura' },
		{ label: 'Salón' },
		{ label: 'Estado' },
	];

	return (
		<>
			<div className='flex flex-col items-center pt-32'>
				<ConsultanciesTable
					title='Historial de monitorias'
					header={header}
					// items={}
					// className={}
				/>
			</div>
		</>
	);
};
