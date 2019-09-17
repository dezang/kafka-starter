const kafka = require('kafka-node')
const client = new kafka.KafkaClient()

/**
 * Producer
 */
const Producer = kafka.Producer
const producer = new Producer(client)

payloads = [
    { topic: 'test', messages: "hello" }
]

producer.on('ready', () => {
    setInterval(() => {
        producer.send(payloads, (err, data) => {
            console.log('send', data)
        })
    }, 2000)
})

producer.on('error', err => {})

/**
 * Consumer
 */
 const Consumer = kafka.Consumer
 const consumer = new Consumer(client, [
     { topic: 'test' }
 ])

 consumer.on('message', message => {
     console.log('receive', message)
 })