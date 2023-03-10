import { PrismaClient } from "@prisma/client";
export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.name) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Name not found' })
    }
    const prisma = new PrismaClient();
    try{
        const result = await prisma.event.create({
            data: {
              name: body.name,
              type: body.type,
              description: body.description,
            },
          })
        //   return result;
          res.status(200).json({ data: `${body.name}` })
    }
    catch(err){
        console.log(err);
    }
    
    // Found the name.
    // Sends a HTTP success code
    // res.status(200).json({ data: `${body.name}` })
  }