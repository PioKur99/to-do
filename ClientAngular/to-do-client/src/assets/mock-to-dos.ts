import { ToDo } from "src/app/models/to-do-model";

export const mockTodos: ToDo[] = [
    {
        id: '1',
        text: 'Robić frontend Angular na magisterke',
        done: false,
        creationDate: '27.10.2022',
        dueDate: '01.10.2023'
    },
    {
        id: '2',
        text: 'Robić backend na magisterke',
        done: false,
        creationDate: '27.10.2022',
        dueDate: '01.10.2023'
    },
    {
        id: '3',
        text: 'Robić frontend Vue na magisterke',
        done: false,
        creationDate: '27.10.2022',
        dueDate: '01.10.2023'
    },
    {
        id: '4',
        text: 'Założyć repo na gicie',
        done: true,
        creationDate: '27.10.2022',
        dueDate: '01.10.2023'
    }
]