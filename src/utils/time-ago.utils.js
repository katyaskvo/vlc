export const timeAgo = (lastFetch) => {
	const secondsAgo = Math.floor((new Date() - new Date(lastFetch)) / 1000);

	let interval = secondsAgo / (3600 * 24 * 365);
	if (interval >= 1) {
		return `${Math.floor(interval)} ${interval > 1 ? 'years' : 'year'} ago`;
	}

	interval = secondsAgo / (3600 * 24 * 31);
	if (interval >= 1) {
		console.log(`${Math.floor(interval)} months ago`);
		return `${Math.floor(interval)} ${interval > 1 ? 'months' : 'month'} ago`;
	}

	interval = secondsAgo / (3600 * 24);
	if (interval >= 1) {
		console.log(`${Math.floor(interval)} days ago`);

		return `${Math.floor(interval)} ${interval > 1 ? 'days' : 'day'} ago`;
	}
	interval = secondsAgo / 3600;
	if (interval >= 1) {
		console.log(`${Math.floor(interval)} hours ago`);
		return `${Math.floor(interval)} ${interval > 1 ? 'hours' : 'hour'} ago`;
	}

	interval = secondsAgo / 60;
	if (interval >= 1) {
		console.log(`${Math.floor(interval)} minutes ago`);
		return `${Math.floor(interval)} ${interval > 1 ? 'minutes' : 'minute'} ago`;
	}
	return `${Math.floor(interval)} ${secondsAgo > 1 ? 'seconds' : 'second'} ago`;
};
