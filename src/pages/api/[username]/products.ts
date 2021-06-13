import { NextApiRequest, NextApiResponse } from 'next'
import {connectToDatabase} from '../../../utils/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {method, query} = req

    if(method === 'GET'){
        const {db} = await connectToDatabase()
        const data = await db.collection('user').find().toArray()

      res.status(200).json(data) 
    }else{
      res.status(405).json({ statusCode: 405, message: "Unsupported method" })  
    }

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
