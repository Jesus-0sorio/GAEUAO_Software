import React, { useEffect, useState } from 'react';
import { Searchbar } from '../components/Home/SearchBar';
import { ConsultanciesTable } from '../components/ConsultanciesTable/ConsultanciesTable';
import { consultaciesServices } from '../services/consultanciesServices';
import { useSelector } from 'react-redux';

export const Schedule = () => {
	const [consultancies, setConsultancies] = useState([]);
	const [allConsultanices, setAllConsultancies] = useState([]);
	const [subjects, setSubjects] = useState([]);

	const [header, setHeader] = useState([
		{ label: 'Asesor', path: 'advisor' },
		{ label: 'Asignatura', path: 'subject' },
		{ label: 'Fecha', path: 'date' },
		{ label: 'Salón', path: 'room' },
	]);

	const [subject, setSubject] = useState();

	const { token } = useSelector((state) => state.auth);

	const getAllConsultancies = async () => {
		try {
			const res = await consultaciesServices.getAllConsultancies(
				token.access_token
			);
			console.log(res.data)
			setConsultancies(res.data);
			setAllConsultancies(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const getConsultancies = async (id) => {
		console.log(id)
		if (id == '' || id == null) {
			setConsultancies(allConsultanices);
		}
		try {
			const res = await consultaciesServices.getConsultanciesBySubject(
				id,
				token.access_token
			);
			console.log(res.data)
			setConsultancies(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllConsultancies();
	}, [Schedule]);


	return (
		<>
			<div className='flex flex-col items-center pt-32'>
				<Searchbar
					item={subjects}
					getConsultancies={getConsultancies}
				/>
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
