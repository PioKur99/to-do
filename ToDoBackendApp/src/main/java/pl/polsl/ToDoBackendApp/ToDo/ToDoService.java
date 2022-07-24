package pl.polsl.ToDoBackendApp.ToDo;

import org.springframework.stereotype.Component;

@Component
public class ToDoService {
    public ToDo getToDo() {
        return new ToDo(1L, "Zrobić backend na magisterke");
    }
}
