package pl.polsl.ToDoBackendApp.ToDo;

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
            ToDo sampleToDo = new ToDo("Robić backend", false);
            ToDo sampleToDo_1 = new ToDo("Robić frontend", false);
            List<ToDo> toDoList = new ArrayList<ToDo>();
            toDoList.add(sampleToDo);
            toDoList.add(sampleToDo_1);
            repository.saveAll(toDoList);
        };
    }
}
