const BASE_URL = '/api/puppies';

export function getAll() {
	return fetch(BASE_URL).then(res => res.json());
}

export function create(newPuppyData) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(newPuppyData),
	}).then(res => res.json());
}