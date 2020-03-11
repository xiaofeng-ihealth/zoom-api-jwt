const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
        APIKey : 'Ab9xbNfiR0Sr9pvkRXQHBA',
		APISecret : '1vWzdniSzWYVFbAtjV8rqEUZrDJtMggEUUhU'
	},
	production:{
        APIKey : 'Ab9xbNfiR0Sr9pvkRXQHBA',
		APISecret : '1vWzdniSzWYVFbAtjV8rqEUZrDJtMggEUUhU'
	}
};

module.exports = config[env]
