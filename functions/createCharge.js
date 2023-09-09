const Gerencianet = require('gn-api-sdk-node')
// const options = require('../../credentials')
const options = {
	sandbox: true,
	client_id: 'Client_Id_2e3dc6c5732517f617bc46752113c39fd0a686d6',
	client_secret: 'Client_Secret_e3ff9ca77f6ca4270cafe3042602282f8e48a788',
	certificate: '../certificados/homologacao-493471-VibraBlockApp.p12',
}

let body = {
	calendario: {
		expiracao: 3600,
	},
	devedor: {
		cpf: '94271564656',
		nome: 'Gorbadock Oldbuck',
	},
	valor: {
		original: '123.45',
	},
	chave: '039577bb-6b84-4e61-89d0-d63c7887bc02', // Informe sua chave Pix cadastrada na gerencianet	//o campo abaixo é opcional
	infoAdicionais: [
		{
			nome: 'Pagamento em',
			valor: 'NOME DO SEU ESTABELECIMENTO',
		},
		{
			nome: 'Pedido',
			valor: 'NUMERO DO PEDIDO DO CLIENTE',
		},
	],
}

let params = {
	txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmDbVq111',
}

const gerencianet = new Gerencianet(options)

gerencianet.pixCreateCharge(params, body)
	.then((resposta) => {
		console.log('resultado: ', resposta)
	})
	.catch((error) => {
		console.log(error)
	})