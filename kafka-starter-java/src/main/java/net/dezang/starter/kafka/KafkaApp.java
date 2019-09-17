package net.dezang.starter.kafka;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@EnableScheduling
@SpringBootApplication
public class KafkaApp {
    public static void main(String[] args) {
        SpringApplication.run(KafkaApp.class);
    }

    @Component
    @RequiredArgsConstructor
    static class Producer {
        private final KafkaTemplate<String, String> kafkaTemplate;

        @Scheduled(fixedRate = 3000)
        public void send() {
            kafkaTemplate.send("test", LocalDateTime.now().toString());
        }
    }

    @Slf4j
    @Component
    static class Consumer {
        @KafkaListener(topics = "test", groupId = "test-group")
        void receive(ConsumerRecord<String, String> consumerRecord) {
            log.info("Receiver on topic: {}", consumerRecord.toString());
        }
    }
}
