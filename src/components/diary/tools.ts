export default function (type: string, keyWord: string) {
	let content = '';
	switch (type) {
		case 'dev': {
			keyWord &&
				keyWord.split('，').forEach((kw) => {
					content = `${content}</br>${dev1(kw)}，${dev2(3)}`;
				});
			break;
		}
		case 'modify': {
			keyWord &&
				keyWord.split('，').forEach((kw) => {
					content = `${content}<br/>修改了${kw}的问题，和测试了解了问题产生场景，重现后已经解决，并且提交到了0720分支`;
				});
			break;
		}
		case 'help': {
			keyWord &&
				keyWord.split('，').forEach((kw) => {
					content = `${content}<br/>阅读了${kw}相关的文档，并对相关的只是有了一些了解`;
				});
			break;
		}
	}
	return content;
}

const dev1 = (keyWord: string) => {
	const content = [
		`开发了${keyWord}相关的需求`,
		`开发0720版本的${keyWord}需求`,
		`继续开发${keyWord}的需求`,
		`对${keyWord}相关的需求进行开发`,
		`在和产品讨论后，开发${keyWord}的需求`,
		`根据产品给出的原型，开发${keyWord}相关的需求`,
		`按照原型开发${keyWord}的需求`,
		`增加了${keyWord}相关的业务逻辑代码`,
		`写了${keyWord}需求相关的逻辑`,
		`和产品还有设计对接后，按照UI图，开发了${keyWord}的需求`,
	];
	return content[Math.floor(Math.random() * 10)];
};

const dev2 = (process: number) => {
	if (process <= 4) {
		const content = [
			`由于逻辑较复杂，目前完成${process * 10}%`,
			`当前进度${process * 10}%，逻辑上遇到些阻塞，需要和产品沟通后继续开发`,
			`完成程度${process * 10}%`,
			`由于配合修改生产问题，目前进度较慢`,
			`产品临时修改了一些细节部分，目前完成度较低`,
		];
		return content[Math.floor(Math.random() * 5)];
	} else if (process <= 7 && process > 4) {
		const content = [
			`由于后台同学还未提供接口，目前完成${process * 10}%`,
			`目前页面UI已经全部完成，当前进度${process * 10}%`,
			`完成程度${process * 10}%`,
			`主要逻辑已经完成，还剩一些样式以及次要逻辑需要修改`,
			`目前${process * 10}%已经完成`,
		];
		return content[Math.floor(Math.random() * 5)];
	} else if (process <= 9 && process > 7) {
		const content = [
			`目前完成${process * 10}%，仅剩一个接口还未对接`,
			`目前${process * 10}%都已经完成`,
			`完成程度${process * 10}%`,
			`大部分都已经完成，仅剩一些细节还需要完善`,
			`当前主流程已经基本跑通，不过还有些条件逻辑需要优化`,
		];
		return content[Math.floor(Math.random() * 5)];
	} else {
		const content = [
			`和后台同学对接了接口，目前已经全部完成`,
			`完成度100%`,
			`当前需求已经全部完成`,
			`当前进度100%`,
			`总体上全部完成`,
		];
		return content[Math.floor(Math.random() * 5)];
	}
};

const dev3 = (process: number, duration: number) => {
	if (process <= 4) {
		const content = [`预计还需${duration}%天完成，达到提测要求`];
		return content[Math.floor(Math.random() * 5)];
	} else if (process <= 7 && process > 4) {
		const content = [
			`已加快开发速度，预计还需${duration}%天完成，达到提测要求`,
		];
		return content[Math.floor(Math.random() * 5)];
	} else if (process <= 9 && process > 7) {
		const content = [`根据后端同事提供接口的时间，联调好之后方能达到提测要求`];
		return content[Math.floor(Math.random() * 5)];
	}
};

const modify1 = (keyWord: string) => {
	const content = [
		`修改了${keyWord}相关的问题`,
		`配合测试，修改${keyWord}的问题`,
		`根据产品提出的方案，优化了${keyWord}的问题`,
		`修改${keyWord}报错的问题`,
		`和产品讨论后，优化了${keyWord}的问题`,
		`对${keyWord}的问题进行了修改`,
		`对测试提出的的${keyWord}相关的问题进行了修改`,
		`完善了${keyWord}相关的问题，修补了一些漏洞`,
		`改正了测试环境${keyWord}的bug`,
		`改正了测试环境${keyWord}的bug`,
	];
	return content[Math.floor(Math.random() * 10)];
};
