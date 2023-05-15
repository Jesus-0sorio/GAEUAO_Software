import React, { useState } from 'react';
import { Searchbar } from '../components/Home/SearchBar';
import { ConsultanciesTable } from '../components/ConsultanciesTable/ConsultanciesTable';
import { NavBarStart } from '../components/NavBarStart';

export const Schedule = () => {
	const [consultancies, setConsultancies] = React.useState([
		{
			id: 1,
			advisor: {
				name: 'Juan Perez',
				photo: 'link',
				career: 'Ing. Informatica',
			},
			subject: 'Cálculo 1',
			schedule: {
				day: 'Jueves',
				date: 'Mayo 11, 2023',
				time: '10:00 - 11:00',
			},
			classRoom: {
				label: '4011',
				place: 'Aulas 4',
				floor: 'Piso 1',
				room: 'Salón 1',
			},
		},
		{
			id: 2,
			advisor: {
				name: 'Juan Perez',
				photo: 'link',
				career: 'Ing. Informatica',
			},
			subject: 'Cálculo 1',
			schedule: {
				day: 'Jueves',
				date: 'Mayo 11, 2023',
				time: '10:00 - 11:00',
			},
			classRoom: {
				label: '4011',
				place: 'Aulas 4',
				floor: 'Piso 1',
				room: 'Salón 1',
			},
		},
		{
			id: 3,
			advisor: {
				name: 'Juan Perez',
				photo: 'link',
				career: 'Ing. Informatica',
			},
			subject: 'Cálculo 1',
			schedule: {
				day: 'Jueves',
				date: 'Mayo 11, 2023',
				time: '10:00 - 11:00',
			},
			classRoom: {
				label: '4011',
				place: 'Aulas 4',
				floor: 'Piso 1',
				room: 'Salón 1',
			},
		},
		{
			id: 4,
			advisor: {
				name: 'Juan Perez',
				photo: 'link',
				career: 'Ing. Informatica',
			},
			subject: 'Cálculo 1',
			schedule: {
				day: 'Jueves',
				date: 'Mayo 11, 2023',
				time: '10:00 - 11:00',
			},
			classRoom: {
				label: '4011',
				place: 'Aulas 4',
				floor: 'Piso 1',
				room: 'Salón 1',
			},
		},
	]);

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
				/>
			</div>
		</>
	);
};
