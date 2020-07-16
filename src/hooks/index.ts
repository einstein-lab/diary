import { useState } from 'react';

const useCommonState = (
	initState: String
): [String, React.Dispatch<React.SetStateAction<String>>] => {
	const [state, setState] = useState<String>(initState);
	return [state, setState];
};

export default useCommonState;
