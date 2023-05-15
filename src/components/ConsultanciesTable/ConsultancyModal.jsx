import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal } from '../Modal';
import { consultaciesServices } from '../../services/consultanciesServices';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const ConsultancyModal = ({ item, handleModal }) => {
	const { token } = useSelector((state) => state.auth);

	const location = useLocation();
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (location.pathname === '/agendar') {
			setDisabled(false);
		} else {
			setTopic(item?.topic);
		}
		//console.log(item);
	}, [ConsultancyModal]);

	const [cancelModalState, setCancelModalState] = useState('hidden');

	const handleCancelModal = (visible) => {
		if (visible) {
			setCancelModalState('block');
		} else {
			setCancelModalState('hidden');
		}
	};

	const [topic, setTopic] = useState(item.topic ? item.topic : '');

	const [reason, setReason] = useState();

	let startTime = item.start_time.split(':');
	let endTime = item.end_time.split(':');

	const cancelConsultancy = async () => {
		console.log(reason)
		if (reason == '' || !reason) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Escriba una razón de cancelación, por favor!',
			});
			return;
		}
		try {
			await consultaciesServices.updateConsultancy(
				item.id,
				JSON.stringify({
					monitoring_status: 'Disponible',
					reason: reason,
					topic: '',
				}),
				token.access_token
			);

			//window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	const scheduleConsultancy = async () => {
		if (topic == '' || !topic ) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Escriba un tema para la asesoria, por favor!',
			});
			return;
		}
		try {
			await consultaciesServices.updateConsultancy(
				item.id,
				JSON.stringify({
					monitoring_status: 'Proxima',
					student_id: token.id,
					topic: topic,
				}),
				token.access_token
			);

			//window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className='grid grid-cols-2 p-2 h-full space-x-2'>
				<div className='border border-gray-300 rounded-xl p-2 shadow-xl'>
					<h1 className='rounded-t-xl bg-red-600 text-white'>
						Detalles Asesor
					</h1>
					<div className='flex space-x-5 my-4 px-2'>
						<img
							src='https://randomuser.me/api/portraits/men/99.jpg'
							alt=''
							className='rounded-full'
						/>
						<div className='flex flex-col justify-center'>
							<h1 className='font-bold'>
								{item.professor_id
									? item.professor_id.name
									: item.monitor_id.name}
							</h1>
							<div className='text-xs'>
								{item.professor_id
									? item.professor_id.degree
									: item.monitor_id.career}
							</div>
						</div>
					</div>
					<div className='text-left'>
						<h1 className='font-bold'>Asesorias de:</h1>
						<ul className='list-disc ps-7'>
							<li>Calculo diferencial</li>
							<li>Fisica</li>
							<li>Calculo integral</li>
							<li>Algoritmia y Programación</li>
						</ul>
					</div>
				</div>
				<div className='border border-gray-300 rounded-xl pt-2 shadow-xl'>
					<h1 className='rounded-t-xl bg-red-600 text-white'>
						Detalles Asesoria
					</h1>
					<div className='text-center p-3 grid grid-cols-2'>
						<div className='space-y-2'>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Asignatura</h1>
								<span className='text-sm'>{item.subject_id.name}</span>
							</div>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Fecha</h1>
								<span className='text-sm'>{item.monitor_date}</span>
							</div>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Hora</h1>
								<span className='text-sm'>{`${startTime[0]}:${startTime[1]} - ${endTime[0]}:${endTime[1]}`}</span>
							</div>
						</div>
						<div className='space-y-2'>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Salón</h1>
								<span className='text-sm'>{item.classroom}</span>
							</div>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Aulas</h1>
								<span className='text-sm'>{`Aulas ${
									item.classroom.split('')[0]
								}`}</span>
							</div>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Piso</h1>
								<span className='text-sm'>{item.classroom.split('')[1]}</span>
							</div>
						</div>
						<div className='col-span-2'>
							<h1 className='font-bold text-sm mb-2'>Tema</h1>

							<textarea
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
								cols='30'
								rows='4'
								placeholder='Tema de la asesorias...'
								disabled={disabled}
								className={`border border-gray-300 rounded-lg w-full px-2 py-0.5`}
							/>
						</div>

						<div className='flex col-span-2 justify-end mt-3'>
							{location.pathname != '/historial' &&
								(disabled ? (
									<button
										onClick={() => handleCancelModal(true)}
										type='button'
										className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
										Cancelar
									</button>
								) : (
									<button
										onClick={() => scheduleConsultancy()}
										type='button'
										className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
										Agendar
									</button>
								))}

							<button
								onClick={() => handleModal(false)}
								type='button'
								className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
								Cerrar
							</button>
							{/* Hacer modal para confirmar si quiere cancelar */}
						</div>
					</div>
				</div>
			</div>

			<Modal
				handleModal={handleCancelModal}
				visible={cancelModalState}
				id={item.id}
				component={
					<>
						<div className='flex flex-col'>
							<h1>¿Seguro que quiere cancelar?</h1>
							<div className='mt-3'>
								<textarea
									onChange={(e) => setReason(e.target.value)}
									placeholder='Escriba el motivo de la cancelación'
									className='border border-gray-300 rounded-lg w-full px-2 py-0.5'
									value={reason}
									cols='30'
									rows='4'></textarea>
								<div>
									<button
										onClick={() => cancelConsultancy()}
										className='text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>
										Cancelar
									</button>
									<button
										onClick={() => handleCancelModal(false)}
										className=' text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>
										No cancelar
									</button>
								</div>
							</div>
						</div>
					</>
				}
			/>
		</>
	);
};
