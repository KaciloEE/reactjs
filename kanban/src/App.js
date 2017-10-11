import React, {Component} from 'react';
//import KanbanBoard from './KanbanBoard';
import KanbanBoardContainer from './KanbanBoardContainer';
import './App.css';

// let cardsList = [
//     {
//         id: 1,
//         title: "Read the Book",
//         description: "I should read the **whole** book",
//         color: '#BD8D31',
//         status: "in-progress",
//         tasks: []
//     },
//     {
//         id: 2,
//         title: "Read the Book1",
//         description: "I should read the **whole** book1",
//         color: '#BD8D31',
//         status: "in-progress",
//         tasks: []
//     },
//     {
//         id: 3,
//         title: "Write some code",
//         description: "Code along with the samples in the book",
//         color: '#3A7E28',
//         status: "todo",
//         tasks: [
//             {
//                 id: 1,
//                 name: "ContactList Example",
//                 done: true
//             },
//             {
//                 id: 2,
//                 name: "Kanban Example",
//                 done: false
//             },
//             {
//                 id: 3,
//                 name: "My own experiments",
//                 done: false
//             }
//         ]
//     },
//     {
//         id: 4,
//         title: "Write some code1",
//         description: "Code along with the samples in the book",
//         color: '#3A7E28',
//         status: "todo",
//         tasks: [
//             {
//                 id: 1,
//                 name: "ContactList Example",
//                 done: true
//             },
//             {
//                 id: 2,
//                 name: "Kanban Example",
//                 done: false
//             },
//             {
//                 id: 3,
//                 name: "My own experiments",
//                 done: false
//             }
//         ]
//     }
// ];

class App extends Component {
    render() {
        //return <KanbanBoard cards={cardsList} />
        return <KanbanBoardContainer />
    }
}

export default App;