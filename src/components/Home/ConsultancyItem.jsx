import React from 'react';

export const ConsultancyItem = ({consultancy}) => {
	return (
		<>
			<div className='grid grid-cols-5 text-center'>
				<div className=''>{ consultancy.subject }</div>
				<div className=''>{ consultancy.date }</div>
				<div className=''>{ consultancy.time }</div>
				<div className=''>{ consultancy.room }</div>
				<div className=''>{ consultancy.advisor }</div>
			</div>
		</>
	);
};
