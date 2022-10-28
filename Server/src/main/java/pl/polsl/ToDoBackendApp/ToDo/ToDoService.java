package pl.polsl.ToDoBackendApp.ToDo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class ToDoService {

    private final ToDoRepository toDoRepository;

    @Autowired
    public ToDoService(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    public List<ToDo> getToDos() {
        return this.toDoRepository.findAll();
    }

    @PostMapping
    public void addNewToDo(@RequestBody ToDo item) {
        if(LocalDate.now().isAfter(item.getDueDate())) {
            throw new IllegalStateException("Termin wykonania zadania nie może być wcześniejszy niż obecny.");
        }
        toDoRepository.save(item);
    }

    public void deleteToDo(Long id) {
        boolean exists = toDoRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("Nie znaleziono zadania o id" + id + ".");
        }
        toDoRepository.deleteById(id);
    }

    @Transactional
    public void updateToDo(Long id, Boolean done) {
        ToDo item = toDoRepository.findById(id).
                orElseThrow(() -> new IllegalStateException("Nie znaleziono zadania o id" + id + "."));

        if(!Objects.equals(item.getDone(), done)) {
            item.setDone(done);
        }

    }

    public List<ToDo> sortToDosByDueDate() {
        List<ToDo> todos = this.toDoRepository.findAll();
        List<ToDo> sortedByDate = todos.stream()
                .sorted(Comparator.comparing(ToDo::getDueDate))
                .collect(Collectors.toList());
        return sortedByDate;
    }
}
