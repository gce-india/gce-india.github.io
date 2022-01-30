const TITLE = 'Campus Experts India';

const GREETINGS: { [lang: string]: String } = {
	English: 			'Hello!',
	Hindi: 				'नमस्ते ।',
	Punjabi: 			'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ ।',
	Bangla: 			'নমস্কার ।',
	Kashmiri: 			'आदाब ।',
	Urdu: 				'السلام عليكم۔',
	// Common for many Uttar Pradeshi and Bihari languages
	UPBihar: 			'𑂣𑂩𑂝𑂰𑂧 𑃀',
	Marathi: 			'नमस्कार ।',
	Gujarati: 			'નમસ્તે.',
	Tamil: 				'வணக்கம்.',
	Malayalam: 			'നമസ്കാരം.',
	Telugu: 			'నమస్కరం.',
	Kannada: 			'ನಮಸ್ತೆ.',
	Braj:				'राधे राधे ।',
	Odia: 				'ନମସ୍କାର ।',
	Tibetan: 			'བཀྲ་ཤིས་བདེ་ལེགས།',
	Manipuri:			'ꯈꯨꯔꯨꯝꯖꯔꯤ ꯫',
	Marwari: 			'𑅖𑅬𑅬𑅐 𑅘𑅢𑅑 ।',
	Mizo: 				'Chibai!',
	Ao: 				'Salem!',
	Chokri: 			'Vebatho!',
	Kokborok: 			'Khulumkha!'
};

const ANIMATION: { [k: string]: number } = {
	diff: 0.5,
	len: Object.keys(GREETINGS).length,
	charLen: 2
};

ANIMATION.frac = parseFloat((100 / ANIMATION.len).toFixed(4));

export const title = TITLE;
export const greetings = GREETINGS;
export const animation = ANIMATION;