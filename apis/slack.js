const axios = require("axios");
const qs = require('qs');

module.exports = {
	postMessage: (text) => {
		var data = JSON.stringify({
			"channel": "C0477Q9PL6B",
			"text": text
		});

		var config = {
			method: 'post',
			url: 'https://slack.com/api/chat.postMessage',
			headers: {
				'Authorization': process.env.TOKEN,
				'Content-Type': 'application/json'
			},
			data: data
		};
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});

	},
	getUserInfo: async (id) => {
		var data = qs.stringify({
			'user': id
		});
		var config = {
			method: 'post',
			url: 'https://slack.com/api/users.info',
			headers: {
				'Authorization': process.env.TOKEN,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: data
		};
		return await axios(config)
	}
} 