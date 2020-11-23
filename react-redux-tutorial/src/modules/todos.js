const CHANGE_INPUT = 'todos/CHAGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // 	todo를 제거함

export const changInput = input => ({
	type: CHANGE_INPUT,
	input,
});

let id = 3; // insert 가 호출될 때마다 1씩 더해집니다.

export const insert = text => ({
	type: INSERT,
	todo: {
		id: id++,
		text,
		done: false,
	},
});

export const toggle = id => ({
	type: TOGGLE,
	id,
});

export const remove = id => ({
	type: REMOVE,
	id,
});
