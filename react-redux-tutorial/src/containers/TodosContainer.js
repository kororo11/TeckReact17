import React from 'react';
import { connect } from 'react-redux';
import {
	changeInsert,
	insert,
	toggle,
	remove,
	changInput,
} from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({
	input,
	todos,
	changeInsert,
	insert,
	toggle,
	remove,
}) => {
	return (
		<Todos
			input={input}
			todos={todos}
			onChangeInput={changInput}
			onInsert={insert}
			onToggle={toggle}
			onRemove={remove}
		/>
	);
};

export default connect(
	// 비구조화 할당을 통해 todos를 분리하여
	// state.todos.input 대신 todos.input 을 사용
	({ todos }) => ({
		input: todos.input,
		todos: todos.todos,
	}),
	{
		changInput,
		insert,
		toggle,
		remove,
	},
)(TodosContainer);
