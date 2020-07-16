import React, { Fragment, useState } from 'react';
import { Input, Card, Button, Switch } from 'antd';
import diaryModel from './tools';

const styles = require('./style.module.scss');

const Diary: React.SFC = () => {
	const [devKeyWord, setDevKeyWord] = useState(
		'记一笔新增，记一笔详情，额度分类，账单详情'
	);
	const [modifyKeyWord, setModifyKeyWord] = useState(
		'官网首页，官网关于我们，薪收支工作台'
	);
	const [helpKeyWord, setHelpKeyWord] = useState('react，tyscript，nodejs');
	const [diary, setDiary] = useState('');
	const [devProcess, setDevProcess] = useState('10，5，6，8');
	const [modifyProcess, setModifyProcess] = useState('10，6，7');
	const [branch, setBranch] = useState('0720');
	const [sort, setSort] = useState(false);

	const onSubmit = () => {
		let _diary = '';
		_diary =
			_diary +
			diaryModel('dev', devKeyWord, devProcess, branch) +
			diaryModel('modify', modifyKeyWord, modifyProcess, branch) +
			diaryModel('help', helpKeyWord, '', branch);
		if (sort) {
			_diary = _diary
				.split('<br/>')
				.map((item, i, arr) =>
					i === arr.length - 1 ? item : `${item}<br/>${i + 1}.`
				)
				.join('');
		}
		setDiary(_diary);
	};
	return (
		<Fragment>
			是否排序：
			<Switch onChange={(checked) => setSort(checked)} />
			<Card>
				<div>
					<header className={styles['header']}>分支：（形如：0720）</header>
					<div className={styles['input']}>
						<label>分支名称</label>
						<Input value={branch} onChange={(e) => setBranch(e.target.value)} />
					</div>
				</div>
			</Card>
			<Card>
				<div>
					<header className={styles['header']}>
						开发：（关键字用，分割）,进度（1-10）
					</header>
					<div className={styles['input']}>
						<label>关键字</label>
						<Input
							value={devKeyWord}
							onChange={(e) => setDevKeyWord(e.target.value)}
						/>
					</div>
					<div className={styles['input']}>
						<label>进度</label>
						<Input
							value={devProcess}
							onChange={(e) => setDevProcess(e.target.value)}
						/>
					</div>
				</div>
			</Card>
			<Card>
				<div>
					<header className={styles['header']}>
						bug：（关键字用，分割）,进度（1-10）
					</header>
					<div className={styles['input']}>
						<label>关键字</label>
						<Input
							value={modifyKeyWord}
							onChange={(e) => setModifyKeyWord(e.target.value)}
						/>
					</div>
					<div className={styles['input']}>
						<label>进度</label>
						<Input
							value={modifyProcess}
							onChange={(e) => setModifyProcess(e.target.value)}
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
				提交
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
