package com.example.mortgageil;

import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.auth.AuthenticationService;
import jakarta.annotation.Resource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import static com.example.mortgageil.Models.User.RoleName.ADMIN;

@SpringBootApplication
public class MortgageIlApplication {

    @Resource(name = "userService")
    private com.example.mortgageil.Service.db.UserService userService;

    private com.example.mortgageil.Models.User.User admin;



    public static void main(String[] args) {
        SpringApplication.run(MortgageIlApplication.class, args);
    }


    @Bean
    public CommandLineRunner commandLineRunner(AuthenticationService service) {
        return args -> {
            admin = User.builder()
                    .firstName("חגי")
                    .lastName("אלבז")
                    .email("admin@mail.com")
                    .password("admin-pw")
                    .roleName(ADMIN)
                    .build();

            if(userService.findByEmail(admin.getEmail()) == null){
                service.register(admin);
            }
        };
    }

}
