import amqplib from 'amqplib';

export async function sendMessageToQueue(queue, data){
    try{
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();

        //Assert a queue (create  if not exists)
        await channel.assertQueue(queue, { durable: true});

        //send  message to the queue
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
        
        console.log(`Message sent to queue ${queue}:`, data);

        // setTimeout(function() {
        //     connection.close();
        //     process.exit(0)
        //   }, 500);
    }catch(error){
        console.error('Error in sendMessageToQueue:', error);
    }
};

