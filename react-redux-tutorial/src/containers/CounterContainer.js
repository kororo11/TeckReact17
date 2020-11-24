import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';

const CounterContainer = () => {
	const number = useSelector(state => state.counter.number);
	return <Counter number={number} />;
};

export default CounterContainer;
