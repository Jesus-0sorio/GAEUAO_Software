import React, { useState } from 'react';
import { ConsultanciesTable } from '../components/ConsultanciesTable/ConsultanciesTable';
import { NotificationsTable } from '../components/NotificationsTable/NotificationsTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingConsultancies } from '../store/slices/consultancies/thunks';
import { stringify } from 'postcss';

export const Home = () => {

	const [consultancies, setConsultancies] = useState();

	const dispatch = useDispatch();

	const { token } = useSelector((state) => state.auth);

	
	useEffect( () => {
		(()=> dispatch(getUpcomingConsultancies(token.id, token.access_token)))()
		console.log(consultancies)
	}, []);
	
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
			status: 'Completado',
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
			status: 'Completado',
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
			status: 'Completado',
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
		<div>
			<div className='select-none grid grid-cols-3 pt-32'>
				<div className='flex flex-col col-span-2 items-center'>
					{/* <Searchbar /> */}
					<br />
					<ConsultanciesTable
						title={`Encuentros`}
						header={header}
						items={consultancies}
						className='w-3/4'
					/>

					<br />
					<ConsultanciesTable
						title={`Encuentros pasados`}
						header={header}
						items={completedConsultancies}
						className='w-3/4'
					/>
				</div>
				<div className='flex flex-col items-center'>
					<br />
					<NotificationsTable />
				</div>
			</div>
			</div>
		</>
	);
};
