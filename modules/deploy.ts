import { Hex } from "viem"
import { makeLogger } from "../utils/logger"
import { getPublicScrollClient, getScrollWalletClient } from "../utils/scrollClient"
import { deployAbi, deployData } from "../data/abi/deploy"
import { waitGas } from "../utils/getCurrentGas"

export class Deploy {
    privateKey: Hex
    logger: any
    scrollClient: any
    scrollWallet: any
    walletAddress: Hex

    constructor(privateKey:Hex) {
        this.privateKey = privateKey
        this.logger = makeLogger("Deploy")
        this.scrollClient = getPublicScrollClient()
        this.scrollWallet = getScrollWalletClient(privateKey)
        this.walletAddress = this.scrollWallet.account.address
    }

    async deploy() {
        await waitGas()
        this.logger.info(`${this.walletAddress} | Deploy contract`)

        const txHash = await this.scrollWallet.deployContract({
            abi: deployAbi,
            bytecode: deployData
        })

        this.logger.info(`${this.walletAddress} | Success contract deployed: https://scrollscan.com/tx/${txHash}`)
    }
}