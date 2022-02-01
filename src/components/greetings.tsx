import { default as styled, keyframes } from 'styled-components';

import { animation as anim, greetings } from '../constants';

const Greetings = () => <>
	{ Object.keys(greetings).map((lang, i) => {
		const greeting = greetings[lang];

		const animation = keyframes`
			0% {
				transform: translateY(0);
				opacity: 0;
			}
			${i * anim.frac}% {
				transform: translateY(0);
				opacity: 0;
			}
			${i * anim.frac + anim.diff}% {
				transform: translateY(-${anim.charLen}em);
				opacity: 1;
			}
			${(i + 1) * anim.frac - anim.diff}% {
				transform: translateY(-${anim.charLen}em);
				opacity: 1;
			}
			${(i + 1) * anim.frac}% {
				transform: translateY(-${anim.charLen * 2}em);
				opacity: 0;
			}
			100% {
				transform: translateY(-${anim.charLen * 2}em);
			}
		`;

		const CustomH1 = styled.h1`
			position: relative;
			opacity: 0;
			user-select: none;
			animation: ${animation} ${anim.len}s infinite forwards;
		`;

		return <div key={i} className='greeting-minidiv' style={{
			position: 'absolute',
			transform: 'translateY(8em)',
			left: 0,
			right: 0,
			marginLeft: 0,
			marginRight: 0,
			zIndex: -(anim.len + 1)
		}}>
			<CustomH1 className='greeting' key={i} >
				{ greeting }
			</CustomH1>
		</div>;
	}) }
</>;

export default Greetings;