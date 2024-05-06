import {PrismaClient, Post} from '@prisma/client'
import {arweave} from '../arweave'

const prisma = new PrismaClient()

export async function GET() {
  const posts = await prisma.post.findMany()
  return Response.json({posts})
}
// 1. Create all generated property values
// 2. Get Wallet details
// 3. Imprvove with minting
export async function POST(request: Request) {
  const key = await arweave.generateWallet()
  console.log('key:', key)
  const address = await arweave.jwkToAddress(key)
  console.log('address:', address)
  const balance = await arweave.getBalance(address)
  console.log('balance:', balance)
  const lastTransactionId = await arweave.getLastTransactionID(address)
  console.log('lastTransactionId:', lastTransactionId)

  const resp = await request.json()
  console.log('resp:', resp)

  // const post = await prisma.post.create({data: body})
  return Response.json({post: 'success'})
}
