import React from 'react';
import { Todo } from './Todo'
import { TableHead, TableRow, TableCell, TableContainer, Table, TableBody } from '@material-ui/core';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate} />
            );
        });

        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Task</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Due Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoList}
                    </TableBody>
                </Table>
            </TableContainer>
        );


    }

}