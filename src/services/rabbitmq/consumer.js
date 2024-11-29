import amqplib from "amqplib";

async function consumeMessage(queue){
    try{
   //connect to RabbitMQ server
   const connection = await amqplib.connect('amqp://localhost');
   const channel = await connection.createChannel();

   //Assert a channel
   await channel.assertQueue(queue, {durable:true});

   //consume message
   channel.consume(queue,(msg)=>{
     if(msg){
        console.log(" [x] Received %s", msg.content);
     }
   });

 }catch(error){
    console.log('Error in consumeMessages:', error);
 }
}

consumeMessage('myQueue');
