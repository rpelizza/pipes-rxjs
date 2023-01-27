export const mockPipes = [
	{
		group: 'Combinação',
		icon: 'merge',
		description:
			'As pipes de combinação (combination) do RxJS são operações que combinam várias fontes de dados em uma única saída',
		pipes: [
			{
				pipeId: '4EZNSSzT65RZ7pH8vyOuTnTsvJuUH9NuBF9zgTVCyiwJ98o4yaV8wpbuqQvSldZ2dM1ATwmDTH65q13Uivq9x4I1WVjQUjFVWnHS',
				pipeName: 'combineAll',
				pipeDescription:
					'A função combineAll do RxJS é usada para combinar todas as emissões de vários observáveis ​​em um único observável. Ele é semelhante à função mergeAll, mas ao invés de emitir os valores de todos os observáveis ​​em paralelo, ele aguarda até que todos os observáveis ​​emitam pelo menos um valor antes de combinar todas as emissões em uma matriz.',
				pipeUtilities: [
					'Combinação de vários observáveis: Se você tem vários observáveis ​​que emitem valores e deseja combiná-los em um único observável, você pode usar a função combineAll. Isso é útil quando você deseja trabalhar com todos os valores de vários observáveis ​​como um conjunto.',
					'Agrupamento de valores: Se você deseja agrupar valores de vários observáveis ​​em uma matriz, você pode usar a função combineAll. Isso é útil quando você deseja organizar os valores de vários observáveis ​​em conjuntos lógicos.',
					'Combinação de valores de saída: Se você deseja combinar os valores de saída de várias operações assíncronas em um único observável, você pode usar a função combineAll. Isso é útil quando você precisa aguardar até que todas as operações sejam concluídas antes de processar os valores de saída.',
					'Combinação de resultados de várias consultas a API: Se você deseja combinar os resultados de várias consultas a API em um único observável, você pode usar a função combineAll. Isso é útil quando você precisa aguardar até que todas as consultas sejam concluídas antes de processar os resultados.',
				],
				pipeTips: [
					'Quando você precisa combinar todos os valores emitidos por um observável de observáveis ​​em uma única emissão.',
					'Quando você precisa combinar todos os resultados de uma série de solicitações HTTP em uma única emissão.',
					'Quando você precisa combinar todos os resultados de uma série de observáveis ​​em uma única emissão.',
					'Quando você precisa agrupar todas as emissões de um observável de observáveis ​​em uma única emissão.',
					'Quando você precisa combinar todas as emissões de um observável de observáveis ​​em uma única emissão para poder trabalhar com elas de maneira eficiente.',
				],
				pipeObservation: [
					'No entanto, é importante notar que o combineAll pode não ser a melhor opção em todas as situações, pois existem outros operadores semelhantes como o mergeAll e concatAll que podem ser usados ​​em diferentes situações. Portanto, é importante avaliar seu caso de uso específico e comparar os operadores disponíveis para determinar qual é a melhor opção para sua aplicação.',
				],
				pipeLinks: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/combineall',
				pipeVideo: '5ZUZFyxgktE',
			},
			{
				pipeId: 'pbYpcmWMdN6zkXIaD1RT4gaLYedkETLLcwTJFPcHO15feoSLXyC7tkbcDESV5nHGf8iOXulCJ0VDik9IgAFZnYRrK4RfBvt6HGmo',
				pipeName: 'combineLatest',
				pipeDescription:
					'O operator combineLatest do RxJS é usado para combinar o último valor emitido de várias fontes de observáveis ​​e emitir esses valores combinados como uma matriz. Ele é semelhante ao operator zip, mas ao invés de esperar por todas as fontes de observáveis ​​para emitir um valor antes de combiná-los, o combineLatest combina os últimos valores emitidos de cada fonte de observáveis. Além disso, o combineLatest pode ser usado com mais de dois observáveis, e o número de observáveis ​​é ilimitado, e cada valor emitido será combinado com os valores emitidos pelos outros observáveis ​​e emitido como uma matriz. É importante mencionar que o combineLatest só emite valores depois que todos os observáveis ​​emitiram pelo menos um valor, e ele só emite novamente quando pelo menos um dos observáveis ​​emitir um novo valor.',
				pipeUtilities: [
					'Quando você quer combinar os valores emitidos por vários observáveis ​​e exibir esses valores combinados em sua interface do usuário. Por exemplo, você pode usar combineLatest para combinar o valor de uma barra de progresso com a mensagem de status e exibir esses valores juntos em uma tela de carregamento.',
					'Quando você precisa tomar uma ação baseada em vários valores emitidos por diferentes observáveis. Por exemplo, você pode usar combineLatest para combinar o valor de uma entrada de texto com o valor de um seletor de data e, quando ambos os valores são válidos, habilitar um botão de submit.',
					'Quando você precisa reagir a mudanças em várias fontes de dados ao mesmo tempo. Por exemplo, você pode usar combineLatest para combinar as coordenadas do GPS com o valor de um sensor de orientação e, quando ambos os valores mudarem, atualizar o mapa em sua aplicação.',
					'Quando você precisa combinar vários observáveis ​​para criar um novo observável. Por exemplo, você pode usar combineLatest para combinar o valor de uma entrada de texto com o valor de um seletor de categoria e criar um novo observável que emita uma pesquisa filtrada baseada nesses valores.',
				],
				pipeTips: [
					'Quando você precisa combinar os valores emitidos por vários campos de formulário e habilitar ou desabilitar um botão de submit de acordo com a validade desses valores.',
					'Quando você precisa combinar os valores emitidos por vários sensores ou fontes de dados e tomar uma ação baseada nesses valores.',
					'Quando você precisa combinar vários observáveis ​​para criar um novo observável que represente uma combinação desses valores.',
					'Quando você precisa combinar vários observáveis ​​para exibir informações em sua interface do usuário.',
					'Quando você precisa combinar vários observáveis ​​para realizar uma ação ou para filtrar uma busca.',
				],
				pipeObservation: [
					'No entanto, é importante notar que o combineLatest pode não ser a melhor opção em todas as situações, pois existem outros operadores semelhantes como o zip, merge e concat, que podem ser usados ​​em diferentes situações. Portanto, é importante avaliar seu caso de uso específico e comparar os operadores disponíveis para determinar qual é a melhor opção para sua aplicação.',
				],
				pipeLinks: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/combinelatest',
				pipeVideo: 'aHMYE3cg9D4',
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
