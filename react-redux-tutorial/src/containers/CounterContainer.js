import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
	return <Counter nu={number} onIncrease={increase} onDecrease={decrease} />;
};

const mapStateToProps = state => ({
	number: state.counter.number,
});

const mapDispatchToProps = dispatch => ({
	// 임시함수
	increase: () => {
		console.log('increase');
	},
	decrease: () => {
		console.log('decrease');
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
