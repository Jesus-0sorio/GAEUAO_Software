import React, { useState } from 'react';
import { ConsultanciesTable } from '../components/ConsultanciesTable/ConsultanciesTable';
import { Searchbar } from '../components/Home/SearchBar';
import { NotificationsTable } from '../components/NotificationsTable/NotificationsTable';

export const Home = () => {
	const [items, setItems] = React.useState([
		{ value: 1, label: 'Cálculo' },
		{ value: 2, label: 'Física' },
		{ value: 3, label: 'Algoritmia y Programación' },
	]);

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
			status: 'Próximo',
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
			status: 'Próximo',
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
			status: 'Próximo',
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
			status: 'Completado',
		},
	]);

	const [completedConsultancies, setCompletedConsultancies] = useState([
		{
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
			status: 'Sin calificar',
		},
		{
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
			status: 'Sin calificar',
		},
		{
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
			status: 'Sin calificar',
		},
	]);

	const [header, setHeader] = useState([
		{ label: 'Asesor', path: 'advisor' },
		{ label: 'Asignatura', path: 'subject' },
		{ label: 'Fecha', path: 'date' },
		{ label: 'Salón', path: 'room' },
		{ label: 'Estado', path: '' },
	]);

	return (
		<>
			<br />
			<div className='select-none grid grid-cols-3'>
				<div className='flex flex-col col-span-2 items-center '>
					<Searchbar items={items} />
					<br />
					<ConsultanciesTable
						title={`Encuentros`}
						header={header}
						items={consultancies}
					/>

					<br />
					<ConsultanciesTable
						title={`Encuentros pasados`}
						header={header}
						items={completedConsultancies}
					/>
				</div>
				<div className='flex flex-col items-center mt-12'>
					<br />
					<NotificationsTable />
				</div>
			</div>
		</>
	);
};
