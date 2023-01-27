export interface RxjsInterface {
	group: string;
	icon: string;
	description: string;
	pipes: Array<PipesInterface>;
}

export interface PipesInterface {
	pipeId: string;
	pipeName: string;
	pipeDescription: string;
	pipeObservation: string;
	pipeUtilities: Array<string>;
	pipeTips: Array<string>;
	pipeLinks: Array<PipeLinksInterface>;
	pipeVideo: string;
}

export interface PipeLinksInterface {
	pipeSiteName: string;
	pipeSiteURL: string;
}

export interface PipeFoundInterface {
	group: string;
	description: string;
	icon: string;
	pipeId: string;
	pipeName: string;
	pipeDescription: string;
	pipeUtilities: Array<string>;
	pipeTips: Array<string>;
	pipeObservation: string;
	pipeLinks: Array<PipeLinksInterface>;
	pipeVideo: string;
}
