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
				pipeCode: 'https://gist.github.com/rpelizza/b2bc8c4c0e0205ae3da9b02e3ea4e147.js',
			},
			{
				pipeId: 'pipe_rxjs_combineLatest_20221231',
				pipeName: 'combineLatest',
				pipeDescription:
					'A pipe combineLatest é utilizada para combinar o valor mais recente de múltiplos observáveis ​​em um único observable. Ele emite o valor mais recente de cada observable assim que qualquer um deles emite um novo valor, combinando esses valores em um array.',
				pipeObservation:
					'É importante notar que a pipe combineLatest só emite valores quando todos os observáveis ​​emitirem pelo menos um valor, portanto, é possível que ela não seja tão útil em situações onde alguns dos observáveis ​​nunca emitem valores.',
				pipeUtilities: [
					'Combinar vários observáveis ​​em um único observable.',
					'Manipular dados de múltiplas fontes de uma só vez.',
					'Sincronizar dados de múltiplos observáveis.',
					'Combinar dados de diferentes fontes em uma única saída.',
				],
				pipeTips: [
					'Lembre-se de que a pipe combineLatest só emite valores quando todos os observáveis ​​emitirem pelo menos um valor.',
					'CombineLatest é uma operação síncrona, então ele não é recomendado para uso com fluxos de dados grandes.',
					'É possível passar um valor de projeção para a pipe combineLatest para transformar os valores antes de serem emitidos.',
					'Lembre-se de importar a pipe combineLatest do rxjs/operators',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/combinelatest',
					},
					{
						pipeSiteName: 'RxJS - Docs',
						pipeSiteURL: 'https://rxjs-dev.firebaseapp.com/api/index/function/combineLatest',
					},
					{ pipeSiteName: 'rxmarbles', pipeSiteURL: 'https://rxmarbles.com/#combineLatest' },
				],
				pipeVideo: 'aHMYE3cg9D4',
			},
			{
				pipeId: 'pipe-rxjs-concat-1234abcd',
				pipeName: 'concat',
				pipeDescription:
					'A pipe concat é utilizada para concatenar um ou mais observables em um único observable. Ela é útil quando é preciso juntar dois ou mais fluxos de dados, garantindo que a ordem de emissão seja mantida. A pipe concat só emite valores depois que o observable anterior completar.',
				pipeObservation:
					'A pipe concat pode não ser tão útil em casos em que é preciso que os observables sejam emitidos de forma paralela e não sequencial.',
				pipeUtilities: [
					'Concatenar múltiplos observables em um único observable',
					'Manter a ordem de emissão dos observables',
					'Esperar o observable anterior completar antes de emitir valores do próximo observable',
					'Combinar fluxos de dados de diferentes fontes',
				],
				pipeTips: [
					'É importante lembrar que a pipe concat só emite valores depois que o observable anterior completar.',
					'Não use a pipe concat se você precisar que os observables sejam emitidos de forma paralela.',
					'A pipe concat é útil para combinar fluxos de dados de diferentes fontes em uma única sequência.',
					'Não esqueça de importar o concat de rxjs/operators antes de usá-lo.',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/concat',
					},
					{
						pipeSiteName: 'RxJS - Concat',
						pipeSiteURL: 'https://rxjs-dev.firebaseapp.com/api/operators/concat',
					},
					{
						pipeSiteName: 'RxJS - Concatenando observables',
						pipeSiteURL: 'https://medium.com/@luiz.vieira/rxjs-concatenando-observables-3e7a77a1f9d7',
					},
				],
				pipeVideo: 'blKxEy6mAv4',
			},
			{
				pipeId: 'pipeConcatAll_8qw7ertyuiopasdfghjklzxcvbnm',
				pipeName: 'concatAll',
				pipeDescription:
					'A pipe concatAll é utilizada para concatenar todos os observáveis emitidos por um observable anterior e emitir esses valores como um único observable. Isso é útil quando deseja-se juntar vários observáveis em um só antes de continuar o processamento.',
				pipeObservation:
					'A pipe concatAll pode não ser tão útil em situações em que é necessário processar os observáveis de forma paralela, pois ela espera que cada observable anterior termine antes de emitir os próximos valores.',
				pipeUtilities: [
					'Concatenar vários observáveis em um só',
					'Garantir ordem de emissão dos observáveis',
					'Trabalhar com fluxos de dados dependentes',
					'Juntar resultados de várias chamadas de API',
				],
				pipeTips: [
					'Não utilize concatAll quando é necessário processar observáveis de forma paralela',
					'Sempre verifique se o observable anterior realmente terminou antes de emitir os próximos valores',
					'Lembre-se de que a pipe concatAll retorna um novo observable',
					'Não confunda concatAll com o operador merge, que une vários observáveis em um só sem garantir ordem de emissão',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/concatall',
					},
					{
						pipeSiteName: 'RxJS Docs',
						pipeSiteURL: 'https://rxjs-dev.firebaseapp.com/api/index/function/concatAll',
					},
					{ pipeSiteName: 'RxMarbles', pipeSiteURL: 'https://rxmarbles.com/concatall' },
				],
				pipeVideo: 'vJHbjf4MTWM',
			},
			{
				pipeId: 'pipe-rxjs-endWith-0123456789',
				pipeName: 'endWith',
				pipeDescription:
					'A pipe endWith é utilizada para emitir um valor ou valores adicionais após o fluxo de dados original ter sido completado. Isso é útil para adicionar um valor de finalização ou uma ação de limpeza após o fluxo de dados original.',
				pipeObservation:
					'A pipe endWith pode não ser tão útil em situações em que não é necessário emitir valores adicionais após o fluxo de dados original. Além disso, essa pipe pode causar problemas de performance em fluxos de dados muito grandes.',
				pipeUtilities: [
					'Adicionar um valor de finalização ao fluxo de dados original',
					'Realizar ações de limpeza após o fluxo de dados original',
					'Emular o comportamento de um observable completado',
					'Adicionar valores adicionais a um fluxo de dados já finalizado',
				],
				pipeTips: [
					'Utilize a pipe endWith com moderação para evitar problemas de performance',
					'Lembre-se de que os valores emitidos pela pipe endWith são emitidos após o fluxo de dados original ter sido completado',
					'Não confunda a pipe endWith com a pipe concat que concatena dois fluxos de dados',
					'A pipe endWith pode ser utilizada com qualquer tipo de fluxo de dados, incluindo observables, promises e iteráveis',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/endwith',
					},
					{
						pipeSiteName: 'RxJS na Prática',
						pipeSiteURL: 'https://rxjs-na-pratica.netlify.app/operators/endwith',
					},
					{
						pipeSiteName: 'RxJS: Entendendo o Básico',
						pipeSiteURL: 'https://rxjs-entendendo-o-basico.netlify.app/operators/endwith',
					},
				],
				pipeVideo: 'hoMNpEa9vRI',
			},
			{
				pipeId: 'pipeForkJoin_155023',
				pipeName: 'forkJoin',
				pipeDescription:
					'A pipe forkJoin é utilizada para combinar várias fontes de dados observáveis em um único objeto. Ele espera receber um array de observables e retorna um observable que emite um array de valores emitidos pelos observables originais, na ordem em que foram passados. É útil quando precisamos combinar informações de diferentes fontes antes de prosseguir com o fluxo de dados.',
				pipeObservation:
					'A pipe forkJoin pode não ser tão útil em situações em que os dados precisam ser combinados de forma dinâmica ou em fluxos de dados assíncronos, pois ela espera receber todos os observables de entrada antes de emitir um valor.',
				pipeUtilities: [
					'Combinar informações de diferentes fontes antes de prosseguir com o fluxo de dados',
					'Combinar resultados de várias requisições HTTP',
					'Combinar dados de diferentes componentes de uma aplicação',
					'Combinar dados de diferentes streams de dados',
				],
				pipeTips: [
					'Tenha cuidado ao utilizar forkJoin em fluxos de dados assíncronos',
					'Lembre-se de que forkJoin espera que todos os observables emitições antes de emitir um valor',
					'ForkJoin é uma operação síncrona',
					'ForkJoin não segue ordem de entrada dos observables',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin',
					},
					{
						pipeSiteName: 'RxJS Docs',
						pipeSiteURL: 'https://rxjs-dev.firebaseapp.com/api/index/function/forkJoin',
					},
					{ pipeSiteName: 'RxJS marbles', pipeSiteURL: 'https://rxmarbles.com/#forkJoin' },
				],
			},
			{
				pipeId: 'pipe_merge_9374857392857392857392857392857',
				pipeName: 'merge',
				pipeDescription:
					'A pipe merge permite juntar vários observáveis em um único observável. Ela faz isso emitindo todas as emissões dos observáveis juntos, na ordem em que elas são emitidas. É útil quando precisamos trabalhar com várias fontes de dados simultaneamente.',
				pipeObservation:
					'A pipe merge pode não ser tão útil em casos em que precisamos manter as emissões dos observáveis distintas, pois ela as junta em uma única emissão.',
				pipeUtilities: [
					'Juntar vários observáveis em um único observável',
					'Trabalhar com várias fontes de dados simultaneamente',
					'Manter a ordem das emissões',
					'Combinar dados de diferentes fontes',
				],
				pipeTips: [
					'Lembre-se de que a pipe merge junta as emissões dos observáveis em uma única emissão',
					'Use-a com cuidado se precisar manter as emissões dos observáveis distintas',
					'Combine-a com outras pipes para trabalhar com os dados de maneira mais eficiente',
					'Teste-a antes de usá-la em produção para garantir que ela atende às suas necessidades',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/merge',
					},
					{ pipeSiteName: 'RxMarbles', pipeSiteURL: 'https://rxmarbles.com/merge/' },
					{ pipeSiteName: 'RxJS Documentação', pipeSiteURL: 'https://rxjs.dev/api/index/function/merge' },
				],
				pipeVideo: 'avZiH2LHqNc',
			},
			{
				pipeId: 'pipe_mergeAll_1234567890',
				pipeName: 'mergeAll',
				pipeDescription:
					'A pipe mergeAll é utilizada para combinar múltiplas observables em uma única saída. Ela funciona de maneira semelhante à pipe merge, mas diferencia-se dela no fato de que ela espera que todas as observables fornecidas emitam pelo menos uma vez antes de emitir sua saída. Isso garante que todas as observables fornecidas sejam completadas antes de emitir a saída final.',
				pipeObservation:
					'É importante observar que a pipe mergeAll pode não ser tão útil quando se deseja combinar observables que podem emitir valores de forma assíncrona, pois ela espera que todas as observables emitam pelo menos uma vez antes de emitir sua saída.',
				pipeUtilities: [
					'Combinar observables que precisam ser completadas antes de emitir sua saída',
					'Combinar observables que precisam emitir valores de forma síncrona',
					'Combinar observables que precisam emitir valores de forma ordenada',
					'Combinar observables que precisam emitir todos os seus valores antes de emitir sua saída',
				],
				pipeTips: [
					'Tenha cuidado ao utilizar a pipe mergeAll com observables que podem emitir valores de forma assíncrona, pois isso pode causar problemas com a saída final',
					'Lembre-se de que a pipe mergeAll espera que todas as observables fornecidas emitam pelo menos uma vez antes de emitir sua saída',
					'A pipe mergeAll pode ser útil quando se deseja combinar observables que precisam emitir valores de forma ordenada',
					'Lembre-se de que a pipe mergeAll emite todos os valores das observables fornecidas antes de emitir sua saída final',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/mergeall',
					},
					{ pipeSiteName: 'Documentação do RxJS', pipeSiteURL: 'https://rxjs.dev/api/operators/mergeAll' },
					{
						pipeSiteName: 'Blog do RxJS',
						pipeSiteURL: 'https://blog.rxjs.dev/learn-rxjs-operators-mergeall/',
					},
				],
				pipeVideo: '4kylB0siYNE',
			},
			{
				pipeId: 'pipe_pairwise_84957a9e9d23b9f3a7ed8e73',
				pipeName: 'pairwise',
				pipeDescription:
					'A pipe pairwise é utilizada para emitir um valor quando dois valores consecutivos são emitidos pelo observable. Ela retorna um novo observable que emite arrays de dois elementos, onde o primeiro elemento é o valor anterior emitido pelo observable original e o segundo elemento é o valor atual.',
				pipeObservation:
					'A pipe pairwise pode não ser tão útil em casos onde não é necessário comparar valores consecutivos emitidos pelo observable.',
				pipeUtilities: [
					'Comparar valores consecutivos emitidos pelo observable',
					'Analisar mudanças de estado em aplicações',
					'Criar lógicas de negócio baseadas em valores consecutivos',
					'Manipular informações de forma mais precisa',
				],
				pipeTips: [
					'Lembre-se de que a pipe pairwise sempre retorna um novo observable',
					'Sempre verifique se a pipe pairwise é realmente necessária antes de utilizá-la',
					'A pipe pairwise só irá emitir valores quando houver pelo menos dois valores consecutivos emitidos pelo observable original',
					'Lembre-se de que a pipe pairwise não irá emitir um valor inicial, somente valores consecutivos',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/transformation/pairwise',
					},
					{ pipeSiteName: 'RxJS Documentation', pipeSiteURL: 'https://rxjs.dev/api/operators/pairwise' },
					{ pipeSiteName: 'RxMarbles', pipeSiteURL: 'https://rxmarbles.com/pairwise' },
				],
				pipeVideo: 'xIZ8GYVPQqA',
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
