// https://www.npmjs.com/package/kafka-node
const kafka = require('kafka-node')
const Config = require('../config.json')

const client = new kafka.KafkaClient({
    kafkaHost: Config.brokers.join()
})

/**
 * Producer
 */
const Producer = kafka.Producer
const producer = new Producer(client)

payloads = [
    { topic: 'test', messages: "hello message from node.js" }
]

producer.on('ready', () => {
    setInterval(() => {
        producer.send(payloads, (err, data) => {
            console.log('send', data)
        })
    }, 3000)
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