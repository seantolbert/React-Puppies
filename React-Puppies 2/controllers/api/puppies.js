const Puppy = require('../../models/puppy');

module.exports = {
	index,
	create,
	show,
};

async function index(req, res) {
	const puppies = await Puppy.find({});
	res.status(200).json(puppies);
}

async function create(req, res) {
	const puppy = await Puppy.create(req.body);
	res.status(201).json(puppy);
}

async function show(req, res) {
	const puppy = await Puppy.findById(req.params.id);
	res.status(200).json(puppy);
}
