import React from 'react';
import { TableContainer, Table, TableBody, TableCell, TableRow } from '@material-ui/core';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow>
                <TableCell>{this.props.text}</TableCell>
                <TableCell>{this.props.priority}</TableCell>
                <TableCell>{this.props.dueDate.format('DD-MM-YYYY')}</TableCell>
            </TableRow>
        );
    }

}