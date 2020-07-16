import React from 'react';
import styles from './style.module.scss';

interface IProps {}

interface IState {}

export default class Button extends React.Component<IProps, IState> {
	render() {
		return <div className={styles.button}>portals冒泡事件测试</div>;
	}
}
