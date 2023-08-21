import React from 'react';

const Loading = (props: { isLoading: boolean }) => {
	return (
		<>
			{props.isLoading && (
				<div className="wrapp-loading">
					<div className="la-ball-scale-pulse la-dark">
						<div></div>
						<div></div>
					</div>
				</div>
			)}
		</>
	);
};

export default Loading;
