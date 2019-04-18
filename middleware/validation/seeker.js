module.exports = {
	seekerValidation,
	updateSeekerValidation
};

function seekerValidation(req, res, next) {
	const { userId, seeker } = req.body;

	const {
		firstName,
		lastName,
		month,
		day,
		year,
		country,
		state,
		city,
		zipcode
	} = seeker;

	if (!userId) {
		return res.status(400).json({
			message: 'Please provide a user id'
		});
	}

	if (!firstName) {
		return res.status(400).json({
			message: 'Please provide a first name'
		});
	}

	if (!lastName) {
		return res.status(400).json({
			message: 'Please provide a last name'
		});
	}

	if (!month) {
		return res.status(400).json({
			message: 'Please provide a birth month'
		});
	}

	if (!day) {
		return res.status(400).json({
			message: 'Please provide a birthday'
		});
	}

	if (!year) {
		return res.status(400).json({
			message: 'Please provide a birth year'
		});
	}

	if (!country) {
		return res.status(400).json({
			message: 'Please provide a country'
		});
	}

	if (!state) {
		return res.status(400).json({
			message: 'Please provide a state'
		});
	}

	if (!city) {
		return res.status(400).json({
			message: 'Please provide a city'
		});
	}

	if (!zipcode) {
		return res.status(400).json({
			message: 'Please provide a zip code'
		});
	}

	next();
}

function updateSeekerValidation(req, res, next) {
	const {
		firstName,
		lastName,
		month,
		day,
		year,
		country,
		state,
		city,
		zipcode
	} = req.body;

	if (!firstName) {
		return res.status(400).json({
			message: 'Please provide a first name'
		});
	}

	if (!lastName) {
		return res.status(400).json({
			message: 'Please provide a last name'
		});
	}

	if (!month) {
		return res.status(400).json({
			message: 'Please provide a birth month'
		});
	}

	if (!day) {
		return res.status(400).json({
			message: 'Please provide a birthday'
		});
	}

	if (!year) {
		return res.status(400).json({
			message: 'Please provide a birth year'
		});
	}

	if (!country) {
		return res.status(400).json({
			message: 'Please provide a country'
		});
	}

	if (!state) {
		return res.status(400).json({
			message: 'Please provide a state'
		});
	}

	if (!city) {
		return res.status(400).json({
			message: 'Please provide a city'
		});
	}

	if (!zipcode) {
		return res.status(400).json({
			message: 'Please provide a zip code'
		});
	}

	next();
}
