package com.drinounet._BooksAndMore.configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;

@Configurable
public class OpenAIConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                    .title("100 Books API")
                    .version("1.0")
                    .license(new License().name("Apache 2.0").url("https://springdoc.org"))
                );
    }
}
