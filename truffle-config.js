require("dotenv").config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "*" // Match any network id
		},

		goerli: {
			provider: function () {
				return new HDWalletProvider(
					['91e9fd542e63cbb30c654e6313423af7a576ece6916dee7358ce38049d3d72a3'],
					"wss://eth-goerli.g.alchemy.com/v2/ktWHh8FcZXM8zKiQkrZIwDBx9evxY6GE" // URL to Ethereum Node
				)
			},
			network_id: 5
		},

		matic: {
			provider: function () {
				return new HDWalletProvider(
					[process.env.DEPLOYER_PRIVATE_KEY],
					`https://polygon-rpc.com`
				)
			},
			network_id: 137
		}
	},

	contracts_directory: './src/contracts/',
	contracts_build_directory: './src/abis/',

	compilers: {
		solc: {
			version: '0.8.9',
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	},

	plugins: [
		'truffle-plugin-verify'
	],

	api_keys: {
		etherscan: process.env.ETHERSCAN_API_KEY
	}
}
