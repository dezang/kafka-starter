from kafka import KafkaConsumer

consumer = KafkaConsumer('test', group_id='python-test-group', bootstrap_servers=['localhost:9092'])

for message in consumer:
    print (message)