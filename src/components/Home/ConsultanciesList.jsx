import React from 'react';
import { ConsultancyItem } from './ConsultancyItem';

export const ConsultanciesList = () => {
	const [consultancies, setConsultancies] = React.useState([
		{
			subject: 'Cálculo 1',
			date: '2023-05-05',
			time: '10:00 - 11:00',
			room: '2201',
			advisor: 'Juan Perez',
		},
		{
			subject: 'Cálculo 2',
			date: '2023-05-05',
			time: '14:00 - 15:00',
			room: '4101',
			advisor: 'Pedro Lopez',
		},
		{
			subject: 'Física 1',
			date: '2023-05-05',
			time: '10:00 - 11:00',
			room: '5101',
			advisor: 'Alejandro Garcia',
		},
		{
			subject: 'Física 2',
			date: '2023-05-07',
			time: '09:00 - 10:00',
			room: '2201',
			advisor: 'Juan Perez',
		},
	]);

	return (
		<>
			<div className='flex flex-col border border-black rounded-xl w-3/4'>
				<div className='bg-red-600 text-white border-b border-black rounded-t-xl text-center text-xl'>
					Próximos encuentos
				</div>
				<div className='box'>
					<div className='grid grid-cols-5'>
						<h1>Asignatura</h1>
						<h1>Fecha</h1>
						<h1>Hora</h1>
						<h1>Salón</h1>
						<h1>Nombre Asesor</h1>
					</div>
					{consultancies.map((consultancy, key) => (
						<ConsultancyItem key={key} consultancy={consultancy} />
					))}
				</div>
			</div>
		</>
	);
};
