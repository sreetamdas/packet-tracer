import reducers from "../src/App/reducers";

test("reducers", () => {
	let state;
	state = reducers(
		{
			nodes: {
				"node-7s0s9f": { mac: "4C:F5:A7:63:1A:5F" },
				"node-u0206s": { mac: "86:27:BE:1E:8B:C0" },
				"router-ryxfrk": { mac: "FF:20:F3:37:93:52" }
			},
			console: { open: false, id: null },
			connections: { "node-7s0s9f": ["router-ryxfrk"] },
			coordinates: { "0": [61, 484], "1": [247, 501], "2": [237, 343] },
			routers: { "router-ryxfrk": { mac: "EC:AB:8B:6D:4F:51" } },
			switches: []
		},
		{ type: "UPDATE_COORDINATES", index: 0, x: 54, y: 462 }
	);
	expect(state).toEqual({
		nodes: {
			"node-7s0s9f": { mac: "4C:F5:A7:63:1A:5F" },
			"node-u0206s": { mac: "86:27:BE:1E:8B:C0" },
			"router-ryxfrk": { mac: "FF:20:F3:37:93:52" }
		},
		console: { open: false, id: null },
		connections: { "node-7s0s9f": ["router-ryxfrk"] },
		coordinates: { "0": [54, 462], "1": [247, 501], "2": [237, 343] },
		routers: { "router-ryxfrk": { mac: "EC:AB:8B:6D:4F:51" } },
		switches: []
	});
});
