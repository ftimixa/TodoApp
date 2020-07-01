const express = require('express');
const router = express.Router();

const users = [
	{id: 0, name: 'Не выбрано'},
	{id: 1, name: 'Alex'},
	{id: 2, name: 'Mike'},
	{id: 3, name: 'Samuel'},
];

router.get('/users', (req, res, next) => {
	try {
		return res.json(users)
	} catch(err) {
		next(err)
	}
});

let tasks = [
	{
	id: 1,
	description: 'Kiss unknown girl',
	executor: 'Alex',
	priority: 1
	},
	{
	id: 2,
	description: 'To repay a debt to Alex',
	executor: 'Mike',
	priority: 10
	},
	{
	id: 3,
	description: 'Buy new cup',
	executor: 'Samuel',
	priority: 8
	},
];

router.get('/tasks', (req, res, next) => {
	try {
		return res.status(200).json(tasks)
	} catch(err) {
		next(err)
	}	
});	

router.get('/tasks/:id', (req, res, next) => {
	try {
		const taskId = parseInt(req.params.id, 10);
		const task = tasks.find(task => task.id === taskId);
		if(!task) {
			return res.status(404).send(`task with id:${taskId} not found!`)
		}
		return res.status(200).json(task)
	} catch(err) {
		next(err)
	}
	
});	
 
router.post('/tasks', (req, res, next) => {
	try {
		const task = req.body;
		tasks.push(task);
		return res.status(200).json(tasks);
	} catch(err) {
		next(err)
	}
});

router.put('/tasks/:id', (req, res, next) => {
	try {
		const taskId = parseInt(req.params.id, 10);
		const nameAction = req.body.nameAction;
		if(nameAction === 'increase') {
			tasks = tasks.map(task => {
				if(task.id === taskId) {
					++task.priority
				}
				return task;
			});
		} else if(nameAction === 'decrease') {
			tasks = tasks.map(task => {
				if(task.id === taskId) {
					--task.priority
				}
				return task;
			});
		}	
		return res.status(200).json(tasks)
	} catch(err) {
		next(err)
	}
});

router.delete('/tasks/:id', (req, res, next) => {
	try {
		const taskId = parseInt(req.params.id, 10);
		tasks = tasks.filter(task => task.id !== taskId);
		return res.status(200).json(tasks)
	} catch(err) {
		next(err)
	}
});

module.exports = router;