package pl.polsl.ToDoBackendApp.ToDo;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class ToDo {
    @Id
    @SequenceGenerator(
            name = "todo_sequence",
            sequenceName = "todo_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "todo_sequence"
    )
    private Long id;
    private String text;
    private Boolean done;
    private LocalDate creationDate;
    private LocalDate dueDate;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public ToDo() {

    }

    public ToDo(String text, Boolean done, LocalDate dueDate) {
        this.text = text;
        this.done = done;
        this.dueDate = dueDate;
        this.creationDate = LocalDate.now();
    }

    public ToDo(Long id, String text, Boolean done, LocalDate creationDate, LocalDate dueDate) {
        this.id = id;
        this.text = text;
        this.done = done;
        this.creationDate = creationDate;
        this.dueDate = dueDate;
    }

    @Override
    public String toString() {
        return "ToDo{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", done=" + done +
                ", creationDate=" + creationDate +
                ", dueDate=" + dueDate +
                '}';
    }
}
