package pl.polsl.ToDoBackendApp.ToDo;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ToDoConfig {

    @Bean
    CommandLineRunner commandLineRunner(ToDoRepository repository) {
        return args -> {
            List<ToDo> toDoList = new ArrayList<ToDo>();
            int counter = 0;
            int mockDataSize = 5;
            while(counter < mockDataSize) {
                ToDo mockToDo = new ToDo("Robić Magisterkę", false, LocalDate.of(2023, Month.AUGUST, 3));
                toDoList.add(mockToDo);
                counter++;
            }
            repository.saveAll(toDoList);
        };
    }
}
