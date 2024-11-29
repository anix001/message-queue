import { Router } from "express";
import {sendMessageToQueue} from "../services/rabbitmq/producer.js";

const router = Router();

router.post("/produce",async(req, res)=>{
    const {productDetails} = req.body;

    if (!productDetails) return res.status(400).send({ error: 'Message is required' });
    
    // Send the message to RabbitMQ
  try {
    await sendMessageToQueue('myQueue', productDetails);
    res.status(200).send({ success: true });
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).send({ error: 'Failed to send message' });
  }

})

export default router;