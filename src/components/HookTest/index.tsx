import React, { useEffect, useState } from 'react';
import { Button, Space, Input, Card } from 'antd';
import useCommonState from '../../hooks';

const HookTest: React.SFC = () => {
	// const isOnline = useCommonState('');
	const [text, setText] = useState('状态11111111'),
		[text1, setText1] = useState('状态2222222222222'),
		[value, setValue] = useCommonState('状态2222222222222'),
		[title, setTitle] = useState(value);
	useEffect(() => {
		console.log('useEffect');
	}, []);
	return (
		<Card>
			<Space>
				<div>这是一个hook test组件</div>
				<div>{text}</div>
				<Button onClick={() => setText('111111111111')}>
					点击改变text
				</Button>
				<div>{text1}</div>
				<Button onClick={() => setText1('222222222')}>
					点击改变text
				</Button>
				<Input
					value={`${value}`}
					defaultValue={`${value}`}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<div>{title}</div>
				<Button onClick={() => setTitle(value)}>点击切换title</Button>
			</Space>
		</Card>
	);
};

export default HookTest;
