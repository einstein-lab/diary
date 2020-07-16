export default function (
	type: string,
	keyWord: string,
	process: string,
	branch: string
) {
	let content = '';
	switch (type) {
		case 'dev': {
			keyWord &&
				keyWord.split('，').forEach((kw, i) => {
					const processes = process.split('，');
					content = `${content}<br/>${dev1(kw, branch)}，${dev2(
						parseInt(processes[i])
					)}，${dev3(branch)}`;
				});
			break;
		}
		case 'modify': {
			keyWord &&
				keyWord.split('，').forEach((kw, i) => {
					const processes = process.split('，');
					content = `${content}<br/>${modify1(kw)}，${modify2(
						parseInt(processes[i])
					)}，${dev3(branch)}`;
				});
			break;
		}
		case 'help': {
			keyWord &&
				keyWord.split('，').forEach((kw) => {
					content = `${content}<br/>${help1(kw)}，${help2(kw)}`;
				});
			break;
		}
	}
	return content;
}

const dev1 = (keyWord: string, branch: string) => {
	const content = [
		`开发了${keyWord}相关的需求`,
		`开发${branch}版本的${keyWord}需求`,
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

const dev3 = (branch: string) => {
	const content = [
		`代码提交到了${branch}分支`,
		`暂时还未提交`,
		`还需要进一步优化下`,
		``,
		`代码提交了`,
	];
	return content[Math.floor(Math.random() * 5)];
};

const modify1 = (keyWord: string) => {
	const content = [
		`修改${keyWord}相关的问题`,
		`配合测试，修改${keyWord}的问题`,
		`根据产品提出的方案，优化${keyWord}的问题`,
		`修改${keyWord}报错的问题`,
		`和产品讨论后，优化${keyWord}的问题`,
		`对${keyWord}的问题进行修改`,
		`对测试提出的的${keyWord}相关的问题进行了修改`,
		`完善${keyWord}相关的问题，修补一些漏洞`,
		`定位了${keyWord}的问题`,
		`在测试同学的协助下确认${keyWord}问题`,
	];
	return content[Math.floor(Math.random() * 10)];
};

const modify2 = (process: number) => {
	if (process <= 6) {
		const content = [
			`目前进度${process * 10}%`,
			`不过暂时进展还不大`,
			`因为涉及逻辑比较复杂，暂时进度${process * 10}%`,
			`涉及组件比较多，目前完成${process * 10}%`,
			`暂时仅完成${process * 10}%`,
		];
		return content[Math.floor(Math.random() * 5)];
	} else if (process <= 9 && process > 6) {
		const content = [
			`目前大部分都已经修改完成`,
			`当前进度${process * 10}%`,
			`已经完成${process * 10}%，还有一些细节需要明天和产品讨论下`,
			`目前完成${process * 10}%，仅剩部分逻辑，需要后台配合`,
			`还剩大概${100 - process * 10}%未修改`,
		];
		return content[Math.floor(Math.random() * 5)];
	} else {
		const content = [`目前已经全部修改完成`, `当前进度100%`, `已经完成修改`];
		return content[Math.floor(Math.random() * 3)];
	}
};

const help1 = (keyWord: string) => {
	const content = [
		`学习了${keyWord}相关的内容`,
		`由于项目需要，看了些关于${keyWord}的文档`,
		`了解了一些${keyWord}相关的内容`,
		`对${keyWord}以及相关内容进行了学习`,
		`阅读了与${keyWord}有关的文档`,
		`对自己在${keyWord}上的相关的问题进行了整理`,
		`梳理与${keyWord}的一些要点`,
		`看了与关于${keyWord}的书`,
	];
	return content[Math.floor(Math.random() * 8)];
};

const help2 = (keyWord: string) => {
	const content = [
		`对${keyWord}有了比较深入的了解`,
		`积累了部分与${keyWord}有关的学习经验`,
		`较好的掌握了${keyWord}相关的知识`,
		`了解了${keyWord}的用法，以及一些相关知识点`,
		`但感觉了解的还不够透彻，还要后续继续学习`,
	];
	return content[Math.floor(Math.random() * 5)];
};
