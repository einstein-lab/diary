import React, { useState } from 'react';
import { Input, Button, Modal } from 'antd';
import axios from 'axios';

const styles = require('./style.module.scss'),
	img = require('../../assets/login.jpeg');

type TProps = { history: { push: Function } };

const Login: React.SFC<TProps> = (props: TProps) => {
	const [keyWord, setKeyWord] = useState('');

	const handleClick = async () => {
		if (!!(await checkAuth())) {
			// window.location.href = 'diary';
			props.history.push('/diary');
		}
	};

	const checkAuth = async () => {
		try {
			const {
				data: { state, token, message },
			} = await axios.post('/api/mine/diaryAuth', {
				keyWord,
			});
			if (!(state * 1)) {
				throw new Error(message);
			}
			return token;
		} catch (e) {
			Modal.error({ title: '出错啦', content: e.message });
		}
	};

	return (
		<div className={styles['layout']}>
			<div className={styles['main']}>
				<div className={styles['img']}>
					<img src={'img'} />
				</div>
				<div className={styles['section']}>
					<div className={styles['question']}>
						问题：<span>22222222222</span>
					</div>
					<Input value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />
					<div className={styles['operator']}>
						<span>请回答问题登录</span>
						<Button type="primary" onClick={handleClick}>
							确定
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
