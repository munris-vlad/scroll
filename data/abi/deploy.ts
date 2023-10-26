export const deployAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
] as const

export const deployData = '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610258806100606000396000f3fe6080604052600436106100385760003560e01c806312065fe0146100445780632e1a7d4d1461006f5780638da5cb5b146100aa5761003f565b3661003f57005b600080fd5b34801561005057600080fd5b506100596100eb565b6040518082815260200191505060405180910390f35b34801561007b57600080fd5b506100a86004803603602081101561009257600080fd5b81019080803590602001909291905050506100f3565b005b3480156100b657600080fd5b506100bf6101fe565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4f6e6c7920746865204f776e65722063616c6c2074686973206d6574686f640081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156101fa573d6000803e3d6000fd5b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea26469706673582212200e37ede00b52138cd97343ee0b979ed1ae10992c82f64d42a97932fbebb9e4e164736f6c63430007060033' as const