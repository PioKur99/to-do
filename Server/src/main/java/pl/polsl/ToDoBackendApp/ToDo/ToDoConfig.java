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
            ToDo sampleToDo = new ToDo("Robić backend", false, LocalDate.of(2023, Month.AUGUST, 3));
            ToDo sampleToDo_1 = new ToDo("Robić frontend", false, LocalDate.of(2023, Month.AUGUST, 2));
            ToDo sampleToDo_2 = new ToDo("Pojechac do Bystrej", true, LocalDate.of(2022, Month.AUGUST, 1));
            ToDo sampleToDo_3 = new ToDo("Robić backend", false, LocalDate.of(2023, Month.AUGUST, 3));
            ToDo sampleToDo_4 = new ToDo("Robić frontend", false, LocalDate.of(2023, Month.AUGUST, 2));
            ToDo sampleToDo_5 = new ToDo("Pojechac do Bystrej", true, LocalDate.of(2022, Month.AUGUST, 1));
            List<ToDo> toDoList = new ArrayList<ToDo>();
            toDoList.add(sampleToDo);
            toDoList.add(sampleToDo_1);
            toDoList.add(sampleToDo_2);
            toDoList.add(sampleToDo_3);
            toDoList.add(sampleToDo_4);
            toDoList.add(sampleToDo_5);
            repository.saveAll(toDoList);
        };
    }
}
