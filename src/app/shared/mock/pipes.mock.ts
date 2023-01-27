export const mockPipes = [
	{
		group: 'Combinação',
		icon: 'merge',
		description:
			'As pipes de combinação (combination) do RxJS são operações que combinam várias fontes de dados em uma única saída',
		pipes: [
			{
				pipeId: 'pipe-rxjs-combineAll-v23fjd837fh4',
				pipeName: 'combineAll',
				pipeDescription:
					'A pipe combineAll do RXJS é utilizada para combinar todas as emissões de vários observables em um único observable. Isso significa que, ao utilizar essa pipe, o fluxo de dados de todos os observables será combinado em um único fluxo de dados.',
				pipeObservation:
					'A pipe combineAll pode não ser tão útil em casos em que é necessário manter o controle sobre a ordem das emissões dos observables, pois ela combina todas as emissões de forma independente.',
				pipeUtilities: [
					'Combinar múltiplos fluxos de dados de observables em um único fluxo de dados',
					'Tratar todas as emissões de observables de forma conjunta',
					'Simplificar o tratamento de dados de múltiplos observables',
					'Centralizar o fluxo de dados de múltiplos observables',
				],
				pipeTips: [
					'Utilizar com cuidado, pois pode causar problemas na ordem das emissões',
					'Combinar somente observables relacionados entre si',
					'Testar a ordem das emissões antes de utilizar em produção',
					'Utilizar junto com outras pipes para melhorar o controle sobre as emissões',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/combineall',
					},
					{
						pipeSiteName: 'RXJS na prática',
						pipeSiteURL: 'https://rxjs-na-pratica.netlify.app/operators/combination/combineall',
					},
					{
						pipeSiteName: 'RXJS Brasil',
						pipeSiteURL: 'https://rxjs-brasil.netlify.app/operators/combination/combineall',
					},
				],
				pipeVideo: '5ZUZFyxgktE',
			},
		],
	},
	{
		group: 'Condição',
		icon: 'wifi_protected_setup',
		description:
			'As pipes de condicionais (conditional) do RxJS são operações que permitem a você tomar decisões sobre como um fluxo de dados deve ser manipulado com base em determinadas condições.',
		pipes: [],
	},
	{
		group: 'Criação',
		icon: 'create_new_folder',
		description:
			'As pipes de criação (creation) do RxJS são operações que permitem a você criar novos fluxos de dados a partir de fontes de dados existentes ou não',
		pipes: [],
	},
	{
		group: 'Tratamento de erro',
		icon: 'error',
		description:
			'As pipes de tratamento de erro (Error Handling) do RxJS são operações que permitem a você lidar com erros que possam ocorrer em um fluxo de dados.',
		pipes: [],
	},
	{
		group: 'Transmição de dados',
		icon: 'cell_tower',
		description:
			'As pipes de transmição de dados (Multicasting) do RxJS são operações que permitem a você compartilhar um fluxo de dados entre vários observadores. Com elas, é possível evitar que uma fonte de dados seja compartilhada entre vários observadores, o que pode economizar recursos e melhorar o desempenho.',
		pipes: [],
	},
	{
		group: 'Filtragem',
		icon: 'filter',
		description:
			'As pipes de filtragem (filtering) do RxJS são operações que permitem a você filtrar valores emitidos por um fluxo de dados com base em determinadas condições.',
		pipes: [],
	},
	{
		group: 'Transformação',
		icon: 'transform',
		description:
			'As pipes de transformação (transform) em RxJS são usadas para modificar ou transformar os dados emitidos por um Observável antes que eles cheguem ao seu assinante. Elas são usadas para aplicar uma ou mais operações de transformação aos dados emitidos, como filtrar, mapear, agrupar, etc.',
		pipes: [],
	},
	{
		group: 'Utilitários',
		icon: 'miscellaneous_services',
		description:
			'As pipes de Utilitários (utility) do RxJS são operações que permitem a você realizar tarefas comuns, como aguardar a conclusão de um fluxo de dados ou executar uma função para cada valor emitido por um fluxo de dados.',
		pipes: [],
	},
	{
		group: 'Subjects',
		icon: 'code',
		description:
			'Os Subjects no RxJS são objetos que implementam tanto a interface de fluxo de dados quanto a interface de observador. Isso significa que eles podem emitir valores e também podem ser inscritos em outros fluxos de dados.',
		pipes: [],
	},
];
