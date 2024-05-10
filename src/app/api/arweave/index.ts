import Arweave from 'arweave'

export interface JWKPublicInterface {
  kty: string
  e: string
  n: string
}
export interface JWKInterface extends JWKPublicInterface {
  d?: string
  p?: string
  q?: string
  dp?: string
  dq?: string
  qi?: string
}

class ArweaveHelper {
  private arweave: Arweave

  constructor() {
    this.arweave = Arweave.init({
      host: 'localhost',
      port: 80,
      logging: true,
    })
  }
  // TODO: type
  async generateWallet(): Promise<JWKInterface> {
    const key = await this.arweave.wallets.generate()
    return key
  }

  async jwkToAddress(key: JWKInterface): Promise<string> {
    const address = await this.arweave.wallets.jwkToAddress(key)
    console.log('ArweaveHelper.jwkToAddress() address:', address)
    return address
  }

  async getBalance(address: string): Promise<number> {
    let winston
    try {
      const balance = await this.arweave.wallets.getBalance(address)
      console.log('ArweaveHelper.getBalance() balance:', balance)
      winston = balance
      const ar = this.arweave.ar.winstonToAr(balance)

      console.log(ar)
    } catch (error) {
      console.error(error)
    }
    return Number(winston)
  }

  async getLastTransactionID(address: string): Promise<string> {
    const transactionId = await this.arweave.wallets.getLastTransactionID(
      address,
    )
    console.log(
      'ArweaveHelper.getLastTransactionID() transactionId:',
      transactionId,
    )
    return transactionId
  }
}

const arweave = new ArweaveHelper()
export {arweave}
