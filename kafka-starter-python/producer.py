from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers='localhost:9092')
producer.send('test', b'Hello, Kafka in Python!')
producer.flush()