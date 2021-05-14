package main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
@Configuration
@ComponentScan({"controller","service"})
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

}
