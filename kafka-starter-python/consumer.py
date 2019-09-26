from kafka import KafkaConsumer
import json

with open('../config.json') as config_file:
    Config = json.load(config_file)
    print(Config)

consumer = KafkaConsumer('test', group_id='python-test-group', bootstrap_servers=Config['brokers'])

for message in consumer:
    print (message)
