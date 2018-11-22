import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUp,
	faExchangeAlt,
	faCircle
} from "@fortawesome/free-solid-svg-icons";

const NewRouter = () => {
	return (
		<div>
			<FontAwesomeIcon icon={faArrowUp} size="3x" />
			<FontAwesomeIcon icon={faArrowUp} size="3x" rotation={90} />
			<FontAwesomeIcon icon={faArrowUp} size="3x" rotation={270} />
			<FontAwesomeIcon icon={faArrowUp} size="3x" rotation={180} />
		</div>
	);
};

const Router = () => {
	return (
		<img
			alt="Router"
			draggable="false"
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASFSURBVGhDxdpZqFVVHMfxm7MmSqgNFkUp4hiSNEATZAYRRVQaDuCDCCoIFoakQcNDkY32FASRQZBRkQSRDz7UQ6WUpaRB0UCjllHZQIMN39+mc1l33985ew3n6A8+L+ess84+++691n+tffu6lKE4H7dhK97Cl/gB/+JnHMR7eA734EqMwXHPCbgMT6B1wKl+x0u4CSNxTDMEi6Cz6w4u11e4FSei59Hl8zbcgXSLfpBOVE8yHPfjb7gv74WXMQFdy2l4E+7LYnyG3BPwOS5CcabhU7gvifEANCgsxB//v5bqV1yN7EyFhkzXeYwNCLMAOijXtsmfuA7JOQOfwHUaYyNc5qPkL6PhPjq6sd+A6yzGg+iUG5B7z3yLyYjKZrhOYuyAZvmm3AX3+Rivo/E7NE/knq0vMAkx0YG8CtdPjLVoG83YJZOd5pmUXAvXT4wfcSpsNJu6D8VS3fQOdDJkFOp5Bq33v4frJ9YjGBSN9d2unTR813MYrm2O33AyBkTDmmtcoj5UjoNrV2LQMK9S3DUssQRh5sK1K3EA/dEIkrue6OQOhFkM167UuahyAVwDR/fR44gZoj+EBpDZuAZ74NrVvYLttdc6WYcq6+EaOGugXIXv4NrkUj11CzTw6Cy7No5WmFWehmvgrEYrZ2I/XLtUurQvRytz4No5qgmraKPANXDCH6Jo4bMLrm0sVdgaCMKk/JCjqNb7Ki1cAy2m7sVyaCjVX8DVOOOR+2NUBOoecjkFF+JmbMKLcH3I2aim+/obP2EsYqMa6wPU++lEW0Q60JS8BtdXNXK5N3YjNVpruL7aUQWcmofg+roE1Zmpv6HNtZTokksZMuUjxFbLrTwL19d56PsmeCGkPaZ5mIhO0XD5FFwfTd6F7rFO0SU+C1qQuZMuVV23N3ihHRVomuBuRBj9JTRBus/E0qByEsJMwftw96+jOq7ai3VvOuHwOwLb4Nql2odwfZEy/H6NKnfDNXBaP0SbEyV7XY7uy4uhpPyQnaiibRrXwHkBy6Dx370fOoLHoLLmPsRcJipTbsedwWtN+ke/0dDqzjUqock0zEq4dqUGrHtSh84YKxBGl41rV0LlzTD0R6ORa1hCD3LCaM5w7UoMWrdrBNLd7xrnmoF6foFrm0NropkYFE2A7gO53ESnucG1zfE8bDSDagh0H4rxJFx13C66h1w/Mf5C/xLXRSWz+2AMrWt0icZG17frJ8YWNEZPityHY9hNMxMNLv/A9dFEz2uqkqQpWvXpSZHrpIkObik6RbN2bA1Vp0cSSWsYNc59KKMva/eE6Ry0W5HGWIXk6AlRyUOZKxDmLGgN4trH0D8ZZEc/RiW867iJyp7roUxH7uUqKmyLo2VkTJHoaIdD2025m9cqIrMup3Y5HXpS5L6sV/RYuyuPputRcaYnRb3YJw5psnsUTUvg4ugfCDRf5I5q7ah20nqn44zdi+ghixZBqftZdYfwMLTBcNyjs6hdca1rPoZucnfQoipby1Ot7C5FSn12zKO9WG1jak9XN6y2lbQzElVapKev7z9H0CJtEklKDQAAAABJRU5ErkJggg=="
		/>
	);
};

const Switch = props => {
	return (
		<div className="shrink fa-stack fa-2x" id={props.id}>
			<FontAwesomeIcon
				id={props.id}
				icon={faCircle}
				className="fa-stack-2x line-element"
			/>
			<FontAwesomeIcon
				id={props.id}
				icon={faExchangeAlt}
				className="fa-stack-1x line-element"
				inverse
			/>
		</div>
	);
};
export { Router, Switch, NewRouter };
