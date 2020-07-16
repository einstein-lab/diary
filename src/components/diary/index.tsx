import React, { Fragment, useState } from 'react';
import { Input, Card, Button } from 'antd';
import diaryModel from './tools';

const styles = require('./style.module.scss');

const Diary: React.SFC = () => {
	const [devKeyWord, setDevKeyWord] = useState('');
	const [modifyKeyWord, setModifyKeyWord] = useState('');
	const [helpKeyWord, setHelpKeyWord] = useState('');
	const [diary, setDiary] = useState('');

	const onSubmit = () => {
		let _diary = '';
		_diary =
			_diary +
			diaryModel('dev', devKeyWord) +
			diaryModel('modify', modifyKeyWord) +
			diaryModel('help', helpKeyWord);
		setDiary(_diary);
	};
	return (
		<Fragment>
			<Card>
				<div>
					<header className={styles['header']}>开发：（关键字用，分割）</header>
					<div className={styles['input']}>
						<label>关键字</label>
						<Input
							value={devKeyWord}
							onChange={(e) => setDevKeyWord(e.target.value)}
						/>
					</div>
				</div>
			</Card>
			<Card>
				<div>
					<header className={styles['header']}>bug：（关键字用，分割）</header>
					<div className={styles['input']}>
						<label>关键字</label>
						<Input
							value={modifyKeyWord}
							onChange={(e) => setModifyKeyWord(e.target.value)}
						/>
					</div>
				</div>
			</Card>
			<Card>
				<div>
					<header className={styles['header']}>
						学习技术：（关键字用，分割）
					</header>
					<div className={styles['input']}>
						<label>关键字</label>
						<Input
							value={helpKeyWord}
							onChange={(e) => setHelpKeyWord(e.target.value)}
						/>
					</div>
				</div>
			</Card>
			<Button type="primary" onClick={onSubmit}>
				组装变形
			</Button>
			<div
				className={styles['main']}
				dangerouslySetInnerHTML={{ __html: diary }}
			></div>
		</Fragment>
	);
};

export default Diary;

// 1.XXX需求开发，进度XX%；
// 2.修复Bug XXX；
// 3.同产品沟通确认XX需求；
// 4.同后台开发沟通确认XX需求；
// 5.学习XX技术，为XX项目做准备；
// 6.协助测试、运营等处理XX问题。
