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
			{
				pipeId: 'pipe_race_938475029385750293857502938575029385750293857',
				pipeName: 'race',
				pipeDescription:
					'A pipe race permite que você execute vários observáveis ​​simultaneamente e retorne o primeiro que emitir um valor. Isso é útil quando você deseja obter o primeiro resultado de várias fontes de dados diferentes.',
				pipeObservation:
					'É importante notar que a pipe race não garante que os observáveis ​​não emitirão mais valores após o primeiro valor emitido. Isso significa que, se você deseja parar de ouvir outros observáveis ​​após o primeiro valor emitido, deve usar o operador take.',
				pipeUtilities: [
					'Encontrar o primeiro resultado de várias fontes de dados diferentes',
					'Interromper ouvir observáveis ​​após o primeiro valor emitido',
					'Escolher entre vários observáveis ​​com base no primeiro valor emitido',
					'Combinar vários observáveis ​​em um único fluxo de dados',
				],
				pipeTips: [
					'Lembre-se de usar o operador take para interromper ouvir observáveis ​​após o primeiro valor emitido',
					'Tenha cuidado ao usar a pipe race com observáveis ​​intermináveis',
					'A pipe race é útil para escolher entre várias fontes de dados diferentes',
					'Você pode combinar a pipe race com outros operadores, como map e filter, para processar os dados antes de escolher entre eles',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/race',
					},
					{
						pipeSiteName: 'RxJS em português',
						pipeSiteURL: 'https://rxjs-pt.github.io/operators/combination/race',
					},
					{ pipeSiteName: 'RxJS documentation', pipeSiteURL: 'https://rxjs.dev/api/operators/race' },
				],
				pipeVideo: 'Z_7snklhY2g',
			},
			{
				pipeId: 'pipeStartWith_80caracteres_150caracteres',
				pipeName: 'startWith',
				pipeDescription:
					'A pipe startWith é usada para emitir um valor antes de emitir os valores do observable original. Isso é útil quando queremos adicionar um valor inicial ao observable.',
				pipeObservation:
					'A pipe startWith pode não ser tão útil quando não há necessidade de adicionar um valor inicial ao observable.',
				pipeUtilities: [
					'Adicionar um valor inicial ao observable',
					'Inicializar um observable com um valor padrão',
					'Emitir um valor antes de emitir os valores do observable original',
					'Adicionar um valor default ao observable',
				],
				pipeTips: [
					'Sempre lembre de passar o valor inicial como primeiro argumento para a pipe startWith',
					'A pipe startWith pode ser usada em conjunto com outras pipes para transformar o observable',
					'A pipe startWith é uma pipe não encadeável, ou seja, deve ser aplicada antes de qualquer outra pipe',
					'A pipe startWith é uma pipe de curto circuito, ou seja, ela encerra o fluxo de dados assim que o valor inicial é emitido',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/startwith',
					},
					{
						pipeSiteName: 'RxJS - Documentação Oficial',
						pipeSiteURL: 'https://rxjs-dev.firebaseapp.com/api/index/function/startWith',
					},
					{
						pipeSiteName: 'RxJS - Blog',
						pipeSiteURL: 'https://rxjs-dev.firebaseapp.com/blog/2019-08-20-startwith-operator',
					},
				],
				pipeVideo: 'S0FzUNYE0kY',
			},
			{
				pipeId: 'withLatestFromPipe1234567890',
				pipeName: 'withLatestFrom',
				pipeDescription:
					'A pipe withLatestFrom combina o valor mais recente de um Observable com o valor mais recente de outro Observable, emitindo o resultado como um novo Observable. É útil quando precisamos combinar o valor de dois ou mais Observables de forma assíncrona.',
				pipeObservation:
					'A pipe withLatestFrom pode não ser tão útil em situações em que os Observables combinados são muito grandes ou emitem muitos valores, pois isso pode causar problemas de desempenho e tornar o código difícil de gerenciar.',
				pipeUtilities: [
					'Combinar valores de dois ou mais Observables de forma assíncrona',
					'Filtrar valores de um Observable baseado no valor mais recente de outro Observable',
					'Combinar valores de dois ou mais fluxos de dados para criar uma nova saída',
					'Combinar valores de dois ou mais Observables para criar uma nova saída reativa',
				],
				pipeTips: [
					'Lembre-se de que a pipe withLatestFrom combina somente o valor mais recente de cada Observable, então é importante garantir que os Observables combinados sejam emitidos com frequência suficiente',
					'Se você estiver combinando muitos Observables, é importante considerar a ordem em que eles são combinados, pois isso pode afetar o resultado final',
					'Tenha cuidado ao usar a pipe withLatestFrom com Observables que emitem valores infinitamente, pois isso pode causar problemas de desempenho',
					'Lembre-se de que a pipe withLatestFrom combina somente o valor mais recente de cada Observable, então é importante garantir que os Observables combinados sejam emitidos com frequência suficiente',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/withlatestfrom',
					},
					{
						pipeSiteName: 'RxJS Docs',
						pipeSiteURL: 'https://rxjs.dev/api/operators/withLatestFrom',
					},
					{
						pipeSiteName: 'RxJS Marbles',
						pipeSiteURL: 'https://rxmarbles.com/withlatestfrom',
					},
				],
				pipeVideo: 'kFRU1I30Cvc',
			},
			{
				pipeId: 'rxjs-zip-pipe-83729103847293847392847',
				pipeName: 'zip',
				pipeDescription:
					'A pipe zip combina os valores de dois ou mais observáveis de acordo com a posição do valor. Ela emite um novo valor quando todos os observáveis emitem um novo valor, e cada valor combinado é uma tupla com os valores correspondentes de cada observável.',
				pipeObservation:
					'A pipe zip pode não ser tão útil quando os observáveis não possuem a mesma quantidade de emissões, pois pode gerar tuplas com valores undefined.',
				pipeUtilities: [
					'Combinar dados de diferentes fontes para criar um novo fluxo de dados',
					'Sincronizar ações entre diferentes fluxos de dados',
					'Criar tuplas com valores correspondentes de diferentes observáveis',
					'Combinar valores de um array com valores de um objeto',
					'Sincronizar requisições assíncronas',
				],
				pipeTips: [
					'Sempre verifique se os observáveis possuem a mesma quantidade de emissões antes de utilizar a pipe zip',
					'Utilize a pipe zip com observáveis que possuem a mesma duração',
					'Lembre-se que a pipe zip emite um novo valor somente quando todos os observáveis emitem um novo valor',
					'A pipe zip não funciona com observáveis infinitos',
					'Utilize a pipe zip para combinar valores de diferentes observáveis e não para combinar valores de um mesmo observável',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/zip',
					},
					{ pipeSiteName: 'RxMarbles', pipeSiteURL: 'https://rxmarbles.com/zip/' },
					{ pipeSiteName: 'RxJS Docs', pipeSiteURL: 'https://rxjs.dev/api/index/function/zip' },
					{
						pipeSiteName: 'RxJS GitHub',
						pipeSiteURL: 'https://github.com/ReactiveX/rxjs/blob/main/src/internal/observable/zip.ts',
					},
				],
				pipeVideo: '91nDEXiJJEM',
			},
		],
	},
	{
		group: 'Condição',
		icon: 'wifi_protected_setup',
		description:
			'As pipes de condicionais (conditional) do RxJS são operações que permitem a você tomar decisões sobre como um fluxo de dados deve ser manipulado com base em determinadas condições.',
		pipes: [
			{
				pipeId: 'rxjs_pipe_defaultIfEmpty_0123456789',
				pipeName: 'defaultIfEmpty',
				pipeDescription:
					'A pipe defaultIfEmpty é usada para emitir um valor padrão caso a stream de entrada esteja vazia. Isso é útil para evitar erros de null ou undefined quando a stream esperada não emite valores.',
				pipeObservation:
					'A pipe defaultIfEmpty pode não ser tão útil em situações onde é esperado que a stream de entrada esteja realmente vazia, pois ela irá emitir o valor padrão independentemente disso.',
				pipeUtilities: [
					'Permitir que a stream continue em caso de falha',
					'Fornecer valor padrão para usar em caso de stream vazia',
					'Tratar situações de entrada vazia de forma segura',
					'Usar como uma forma de inicialização de valores',
				],
				pipeTips: [
					'Tenha cuidado ao usar com stream que podem realmente estar vazias',
					'Lembre-se de definir o valor padrão adequado para a sua situação específica',
					'Use junto com outras pipes para tratar situações de erro',
					'Experimente usar com diferentes tipos de stream, como observáveis e subjects',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/conditional/defaultifempty',
					},
					{ pipeSiteName: 'RxJS Docs', pipeSiteURL: 'https://rxjs.dev/api/operators/defaultIfEmpty' },
					{ pipeSiteName: 'RxMarbles', pipeSiteURL: 'https://rxmarbles.com/#defaultIfEmpty' },
				],
				pipeVideo: 'eTR1ng8rE6A',
			},
			{
				pipeId: 'pipe_rxjs_every_1529384750394',
				pipeName: 'every',
				pipeDescription:
					'A pipe every do RXJS verifica se todos os elementos de um observable cumprem uma determinada condição. Ela retorna um novo observable que emitirá true se todos os elementos cumprirem a condição e false caso contrário.',
				pipeObservation:
					'A pipe every pode não ser tão útil em casos onde é necessário verificar apenas alguns elementos de um observable, pois ela verifica todos os elementos independentemente do resultado.',
				pipeUtilities: [
					'Verificar se todos os elementos de um observable cumprem uma determinada condição',
					'Filtar elementos de um observable que não cumprem uma determinada condição',
					'Emitir um valor booleano indicando se todos os elementos cumprem uma determinada condição',
					'Trabalhar com observables de arrays ou outras estruturas de dados',
				],
				pipeTips: [
					'Sempre verificar se a condição passada para a pipe every é a desejada antes de usá-la',
					'Lembrar que a pipe every irá verificar todos os elementos de um observable, mesmo que alguns já tenham cumprido a condição',
					'Utilizar a pipe every em conjunto com outras pipes como filter ou map para trabalhar com os resultados obtidos',
					'Testar a pipe every com diferentes tipos de observables antes de usá-la em produção',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RXJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/conditional/every',
					},
					{ pipeSiteName: 'RXJS Marbles', pipeSiteURL: 'https://rxjs-marbles.com/#every' },
					{ pipeSiteName: 'RXJS Docs', pipeSiteURL: 'https://rxjs.dev/api/operators/every' },
					{
						pipeSiteName: 'RXJS GitHub',
						pipeSiteURL: 'https://github.com/ReactiveX/rxjs/blob/main/src/internal/operators/every.ts',
					},
				],
				pipeVideo: '908PDgRjlmc',
			},
			{
				pipeId: 'pipe_rxjs_iif_837293847293847283748',
				pipeName: 'iif',
				pipeDescription:
					'A pipe iif é usada para avaliar uma condição e retornar um fluxo de dados condicionalmente. Ela é útil para lidar com fluxos de dados dinâmicos e condicionais.',
				pipeObservation:
					'A pipe iif pode não ser tão útil em situações onde a condição é muito simples e pode ser facilmente resolvida com outras pipes como filter ou takeWhile.',
				pipeUtilities: [
					'Permite lidar com fluxos de dados dinâmicos',
					'Permite retornar fluxos de dados condicionalmente',
					'Pode ser usada para fazer operações condicionais complexas',
					'Pode ser combinada com outras pipes para lidar com fluxos de dados complexos',
				],
				pipeTips: [
					'Sempre verifique se a pipe iif é realmente necessária antes de usá-la',
					'Lembre-se de sempre passar as duas funções observables para a pipe iif',
					'Combine a pipe iif com outras pipes para lidar com fluxos de dados complexos',
					'Use a pipe iif com cuidado para não causar problemas de performance',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/conditional/iif',
					},
					{ pipeSiteName: 'RxJS Docs', pipeSiteURL: 'https://rxjs.dev/api/index/function/iif' },
					{
						pipeSiteName: 'RxJS Tutorials',
						pipeSiteURL: 'https://www.rxjstutorial.com/rxjs-conditional-operator-iif/',
					},
				],
				pipeVideo: 'Yh_ymXzRIsI',
			},
			{
				pipeId: 'pipe-sequenceEqual-59f4029e4d1a',
				pipeName: 'sequenceEqual',
				pipeDescription:
					'A pipe sequenceEqual é utilizada para comparar dois observáveis e retornar verdadeiro se todos os seus elementos são iguais e emitidos na mesma ordem. Caso contrário, retorna falso.',
				pipeObservation:
					'A pipe sequenceEqual pode não ser tão útil em situações em que a ordem dos elementos não é importante ou quando os elementos possuem diferentes tipos.',
				pipeUtilities: [
					'Comparar duas fontes de dados para verificar se são iguais',
					'Verificar se a ordem dos elementos é importante',
					'Comparar objetos complexos como arrays e objetos',
					'Utilizar em testes unitários para verificar a igualdade de observáveis',
				],
				pipeTips: [
					'Utilize a pipe sequenceEqual em conjunto com outras pipes para uma comparação mais detalhada',
					'Lembre-se de que a ordem dos elementos é importante na comparação feita pela pipe',
					'A pipe sequenceEqual compara somente o valor dos elementos, não as referências',
					'Não utilize a pipe sequenceEqual para comparar elementos de tipos diferentes',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Documentação oficial RxJS',
						pipeSiteURL: 'https://rxjs.dev/api/operators/sequenceEqual',
					},
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/conditional/sequenceEqual',
					},
					{
						pipeSiteName: 'Blog do Fabio Akita',
						pipeSiteURL: 'https://akitaonrails.com/blog/2022/01/19/utilizando-o-rxjs-com-angular',
					},
				],
				pipeVideo: 'zy1-JZDJ53M',
			},
		],
	},
	{
		group: 'Criação',
		icon: 'create_new_folder',
		description:
			'As pipes de criação (creation) do RxJS são operações que permitem a você criar novos fluxos de dados a partir de fontes de dados existentes ou não',
		pipes: [
			{
				pipeId: 'rxjs-ajax-pipe-0123456789',
				pipeName: 'ajax',
				pipeDescription:
					'A pipe ajax é usada para fazer requisições assíncronas a recursos externos. É uma operação de criação que permite fazer requisições HTTP e retornar um observable com a resposta da requisição.',
				pipeObservation:
					'A pipe ajax pode não ser tão útil em casos em que é necessário fazer requisições síncronas, pois ela só retorna a resposta quando a requisição for concluída.',
				pipeUtilities: [
					'Permite fazer requisições HTTP assíncronas',
					'Retorna um observable com a resposta da requisição',
					'Pode ser usada com outras pipes para manipular a resposta da requisição',
					'Permite definir configurações adicionais na requisição',
					'Suporta retornos de tipos diferentes, como JSON e texto',
				],
				pipeTips: [
					'Não é indicada para requisições síncronas',
					'É necessário importar a biblioteca rxjs/ajax antes de usá-la',
					'Sempre verifique se a requisição foi bem sucedida antes de manipular a resposta',
					'Use o método pipe para combinar a pipe ajax com outras pipes',
					'Sempre verifique as configurações adicionais necessárias antes de fazer uma requisição',
				],
				pipeLinks: [
					{
						pipeSiteName: 'Learn RxJS',
						pipeSiteURL: 'https://www.learnrxjs.io/learn-rxjs/operators/creation/ajax',
					},
					{ pipeSiteName: 'Site de exemplo', pipeSiteURL: 'https://exemplo.com/rxjs-ajax' },
					{ pipeSiteName: 'Documentação oficial', pipeSiteURL: 'https://rxjs.dev/api/index/function/ajax' },
				],
				pipeVideo: 'oF8bk8HFg2A',
			},
		],
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
