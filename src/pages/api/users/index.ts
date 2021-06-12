import { NextApiRequest, NextApiResponse } from 'next'


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {method} = req

    if(method === 'GET'){

      res.status(200).json([
        {id: 1, name: "Giovanna", method},
        {id: 2, name: "Giovanna1", method},
        {id: 3, name: "Giovanna2", method},
      ])
    }else{
      res.status(405).json({ statusCode: 405, message: "Unsupported method" })  
    }

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
