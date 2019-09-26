from kafka import KafkaProducer
import json

with open('../config.json') as config_file:
    Config = json.load(config_file)
    print(Config)

producer = KafkaProducer(bootstrap_servers=Config['brokers'])
producer.send('test', b'Hello, Kafka in Python!')
producer.flush()