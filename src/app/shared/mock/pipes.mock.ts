export const mockPipes = [
	{
		group: 'Combinação',
		icon: 'merge',
		description:
			'As pipes de combinação (combination) do RxJS são operações que combinam várias fontes de dados em uma única saída',
		pipes: [
			{
				pipeId: 1,
				pipeName: 'combineAll',
				pipeDescription:
					'A função combineAll do RxJS é usada para combinar todas as emissões de vários observáveis ​​em um único observável. Ele é semelhante à função mergeAll, mas ao invés de emitir os valores de todos os observáveis ​​em paralelo, ele aguarda até que todos os observáveis ​​emitam pelo menos um valor antes de combinar todas as emissões em uma matriz.',
				pipeUtilities: [
					'Combinação de vários observáveis: Se você tem vários observáveis ​​que emitem valores e deseja combiná-los em um único observável, você pode usar a função combineAll. Isso é útil quando você deseja trabalhar com todos os valores de vários observáveis ​​como um conjunto.',
					'Agrupamento de valores: Se você deseja agrupar valores de vários observáveis ​​em uma matriz, você pode usar a função combineAll. Isso é útil quando você deseja organizar os valores de vários observáveis ​​em conjuntos lógicos.',
					'Combinação de valores de saída: Se você deseja combinar os valores de saída de várias operações assíncronas em um único observável, você pode usar a função combineAll. Isso é útil quando você precisa aguardar até que todas as operações sejam concluídas antes de processar os valores de saída.',
					'Combinação de resultados de várias consultas a API: Se você deseja combinar os resultados de várias consultas a API em um único observável, você pode usar a função combineAll. Isso é útil quando você precisa aguardar até que todas as consultas sejam concluídas antes de processar os resultados.',
				],
				pipeLinks: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/combineall',
				pipeVideos: 'https://youtu.be/nwNrhW-rOKM',
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
