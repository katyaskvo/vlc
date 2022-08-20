export const timeAgo = (lastFetch) => {
	const lastFetchDate = new Date(lastFetch);
	const timeNow = new Date();
	const secondsAgo = Math.floor((timeNow - lastFetchDate) / 1000);

	let interval = secondsAgo / (3600 * 24 * 365);
	if (interval >= 1) {
		return `${Math.floor(interval)} ${interval > 1 ? 'years' : 'year'} ago`;
	}

	interval = secondsAgo / (3600 * 24 * 31);
	if (interval >= 1) {
		return `${Math.floor(interval)} ${interval > 1 ? 'months' : 'month'} ago`;
	}

	interval = secondsAgo / (3600 * 24);
	if (interval >= 1) {
		return `${Math.floor(interval)} ${interval > 1 ? 'days' : 'day'} ago`;
	}
	interval = secondsAgo / 3600;
	if (interval >= 1) {
		return `${Math.floor(interval)} ${interval > 1 ? 'hours' : 'hour'} ago`;
	}

	interval = secondsAgo / 60;
	if (interval >= 1) {
		return `${Math.floor(interval)} min ago`;
	}

	return `${Math.floor(interval)} sec ago`;
};
