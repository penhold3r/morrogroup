//--------------------------------------------------------
//>>   DETECT CSS TRANSITION & ANIMATION END
//--------------------------------------------------------
/**
 *
 * @param {HTMLElement} element
 * @param {Function} callback
 */
export const animationEnded = (element, callback) => {
	const el = document.createElement('dummy')
	const animations = {
		OAnimation: 'oAnimationEnd',
		MozAnimation: 'animationend',
		WebkitAnimation: 'webkitAnimationEnd',
		animation: 'animationend'
	}
	let type
	for (let a in animations) {
		if (el.style[a] !== undefined) {
			type = animations[a]
		}
	}
	element.addEventListener(type, e => callback(e), false)
}

export const transitionEnded = (element, callback) => {
	const el = document.createElement('dummy')
	const transitions = {
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
		transition: 'transitionend'
	}
	let type
	for (let t in transitions) {
		if (el.style[t] !== undefined) {
			type = transitions[t]
		}
	}
	element.addEventListener(type, e => callback(e), false)
}
