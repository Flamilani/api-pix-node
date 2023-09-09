const Endpoints = require('./../gn-api-sdk-node/lib/endpoints')
const constants = require('./../gn-api-sdk-node/lib/constants')

class Gerencianet {
	constructor(options) {

		if (options.pix_cert) {
			options.certificate = options.pix_cert
		}

		let methods = {}

		console.log(options)

		Object.keys(constants.APIS).forEach((api) => {
			Object.assign(methods, constants.APIS[api].ENDPOINTS)
		})

		Object.keys(methods).forEach(function (api) {
			Gerencianet.prototype[api] = function (params, body) {
				let endpoints = new Endpoints(options, constants)
				console.log(endpoints)
				return endpoints.run(api, params, body)
			}
		})
	}
}

module.exports = Gerencianet
