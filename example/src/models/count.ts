const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const model = {
	namespace: "count",
	state: {
		num: 0,
	},
	reducers: {
		add(state: any) {
			state.num += 1;
		},
	},
	effects: {
		*addAsync(_action: any, { put }: any) {
			yield delay(1000);
			yield put({ type: "add" });
		},
	},
};

export default model;
