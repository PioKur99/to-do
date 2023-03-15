package pl.polsl.ToDoBackendApp.ToDo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(path = "/todo")
public class ToDoController {

    private final ToDoService toDoService;

    @Autowired
    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @GetMapping
    public List<ToDo> getToDos() {
        return  this.toDoService.sortToDosByDueDate();
    }

    @PostMapping
    public void registerNewToDo(@RequestBody ToDo item) {
        toDoService.addNewToDo(item);
    }
    @GetMapping(path = {"/populate/{count}"})
    public List<ToDo> populateData(@PathVariable("count") Long count) {
        return toDoService.populateData(count);
    }
    @DeleteMapping(path = "{toDoId}")
    public void deleteToDo(@PathVariable("toDoId") Long id) {
        toDoService.deleteToDo(id);
    }

    @PutMapping(path = "{toDoId}")
    public void updateToDo(
            @PathVariable("toDoId") Long id,
            @RequestParam(required = false) Boolean done
    ) {
        toDoService.updateToDo(id, done);
    }
}
