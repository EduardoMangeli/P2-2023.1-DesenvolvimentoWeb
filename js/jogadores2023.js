const jogadores = [
    {
        "elenco": "feminino",
        "nome": "MARI ZANELLA",
        "posicao": "Goleira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/mari-zanella.png",
        "descricao": "Mari iniciou sua carreira vestindo a camisa do Foz Cataratas e, logo em seguida, passou pela equipe do Santos. Pelo Internacional conquistou os títulos do Brasileiro sub-16 e 20, e o Gauchão sub-18. Ainda pela equipe colorada, fez sua estreia na categoria profissional, tornando-se a goleira mais jovem a disputar o Campeonato Brasileiro em 2022. Em seu início no Botafogo, foi convocada pela primeira vez para a Seleção Brasileira sub-20.",
        "nome_completo": "Mariana Zanella Steiak",
        "nascimento": "07/04/2004, Cascavel (PR)",
        "altura": "1.73"
    },
    {
        "elenco": "feminino",
        "nome": "INGRID SABINO",
        "posicao": "Goleira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/ingrid-sabino.png",
        "descricao": "A goleira possui uma forte ligação com o futebol desde pequena. Assim como a maioria, Ingrid iniciou sua trajetória jogando com os meninos na rua. Como sempre se destacou entre os demais, passou a disputar campeonatos amadores espalhados pelo Rio até passar pela peneira realizada pelo Botafogo em 2020, onde foi aprovada e escolhida para fazer parte das Gloriosas.",
        "nome_completo": "Ingrid Sabino de Oliveira",
        "nascimento": "25/06/1997, Rio de Janeiro (RJ)",
        "altura": "1,72"
    },
    {
        "elenco": "feminino",
        "nome": "YASMIM",
        "posicao": "goleira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/yasmin.png",
        "descricao": "A arqueira se destaca pela boa imposição física, experiência e muita técnica. Yasmim é a responsável por fechar o gol das Gloriosas e por grandes defesas.",
        "nome_completo": "Yasmim Cristina Seabra Pereira",
        "nascimento": "11/06/1995, Rio de Janeiro (RJ)",
        "altura": "1,77"
    },
    {
        "elenco": "feminino",
        "nome": "KELLY",
        "posicao": "goleira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/chiavaro.png",
        "descricao": "Nascida no Canadá e com nacionalidade italiana, Kelly iniciou sua carreira nos Estados Unidos antes de desembarcar em solo europeu. Em 2022 a goleira disputou três partidas pela Seleção Italiana de beach soccer, pela Eurocopa da modalidade. Chiavaro chega no Botafogo para somar com sua segurança nas jogadas e muita técnica.",
        "nome_completo": "Kelly Chiavaro",
        "nascimento": "03/07/1996, Montreal (Canadá)",
        "altura": "1,74"
    },
    {
        "elenco": "feminino",
        "nome": "BRUNA SOUZA",
        "posicao": "Lateral-direita",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/bruna.png",
        "descricao": "Apaixonada por futebol desde criança, Bruna iniciou sua trajetória jogando com os meninos. Foram 5 anos fazendo parte de escolinhas até chegar ao Centro Olímpico. Lateral voluntariosa, de muita força e de extrema regularidade. Chegou ao Glorioso em agosto de 2018, conquistou o acesso para a série A1 em 2020 e dois títulos cariocas nos últimos anos.",
        "nome_completo": "Bruna de Souza dos Santos",
        "nascimento": "14/12/2000, São Paulo",
        "altura": "1,69"
    },
    {
        "elenco": "feminino",
        "nome": "LUANA",
        "posicao": "lateral-direita",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/luana.png",
        "descricao": "Luana é uma lateral com características ofensivas, excelente nos cruzamentos e muito disciplinada taticamente. Com ela, disposição nunca falta em campo.",
        "nome_completo": "Luana Mayara Neves",
        "nascimento": "05/08/1997, Volta Redonda (RJ)",
        "altura": "1,58"
    },
    {
        "elenco": "feminino",
        "nome": "JÉSSICA BAHIA",
        "posicao": "Lateral-direita",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/jessica-bahia.png",
        "descricao": "Jéssica chama a atenção na lateral-direita por sua velocidade e agilidade. Iniciou sua trajetória no campo mais tradicional das crianças: a rua. Incentivada pelo ex-treinador e pela família, passou por um teste no São Francisco do Conde (BA), seu primeiro clube. A lateral chega ao Botafogo após duas temporadas no Fluminense.",
        "nome_completo": "Jessica Alves Sousa",
        "nascimento": "23/08/1991, Salvador (BA)",
        "altura": "1,70"
    },
    {
        "elenco": "feminino",
        "nome": "CHAI",
        "posicao": "Lateral-esquerda",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/chai.png",
        "descricao": "Lateral esquerda de técnica apurada, comprometida com a equipe e diferenciada nas bolas paradas. Chai está em sua terceira temporada no Glorioso e faz parte do grupo das atletas que conquistaram o acesso para a série A1 em 2020. A atleta é peça essencial da equipe.",
        "nome_completo": "Chaiane Locatelli",
        "nascimento": "20/02/1995, Garibaldi (RS)",
        "altura": "1,63"
    },
    {
        "elenco": "feminino",
        "nome": "SANDRA",
        "posicao": "Zagueira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/sandra.png",
        "descricao": "Sandra chegou ao Botafogo em 2019 e é uma das atletas que faz parte do primeiro time formado pelo Clube. Revelada pelo São Bernardo, equipe de sua cidade natal, a zagueira seguiu encantando e mostrando seu futebol mundo a fora. Ao chegar no Glorioso, a atleta conquistou o acesso para a série A1 em 2020 e dois títulos cariocas.",
        "nome_completo": "Sandra Figueiredo",
        "nascimento": "08/01/1987, São Bernardo do Campo (SP)",
        "altura": "1.68"
    },
    {
        "elenco": "feminino",
        "nome": "KÁREN",
        "posicao": "Zagueira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/karen.png",
        "descricao": "Karen se destaca na zaga Gloriosa pelo seu cabeceio e garra nas disputas de bola. A atleta conta com passagens em clubes nacionais e internacionais, além de fazer parte do elenco que garantiu o acesso para a série A1 na temporada 2020. No ano de 2022, a zagueira conquistou o segundo título Carioca com o Glorioso.",
        "nome_completo": "Káren Bender",
        "nascimento": "21/02/1996, Passo Fundo (RS)",
        "altura": "1,75"
    },
    {
        "elenco": "feminino",
        "nome": "THAMIRES",
        "posicao": "Zagueira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/thamires.png",
        "descricao": "Identificada com o clube desde o berço, representa a torcida dentro de campo com sua garra e técnica. Durante sua carreira, a zagueira defendeu diferentes clubes do cenário nacional que somaram em sua bagagem na modalidade. Thamires conta com um título carioca em sua passagem pelo Vasco e na terceira temporada seguida pelo Botafogo, a atleta soma dois títulos estaduais.",
        "nome_completo": "Thamires Ferreira Alves dos Santos",
        "nascimento": "26/04/1994, Rio de Janeiro",
        "altura": "1.72"
    },
    {
        "elenco": "feminino",
        "nome": "JANA QUEIROZ",
        "posicao": "Zagueira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/jana-queiroz.png",
        "descricao": "Jana Queiroz iniciou sua carreira aos 14 anos no futsal em sua cidade natal e, ao realizar uma peneira, iniciou sua carreira no Santos, onde fez a transição para o campo. Ainda no clube paulista, a zagueira recebeu sua primeira convocação para a Seleção Brasileira Sub-20, onde foi campeã sul-americana. A atleta possui passagens pela Europa e por outros clubes do Brasil.",
        "nome_completo": "Janaina Queiroz Cavalcante",
        "nascimento": "02/04/1988, Fortaleza (CE)",
        "altura": "1.73"
    },
    {
        "elenco": "feminino",
        "nome": "NALON",
        "posicao": "zagueira",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/nalon.png",
        "descricao": "Após período na categoria Sub-20 das Gloriosas, a zagueira reforça a equipe principal e tem como principal característica a sua força no combate contra as adversárias.",
        "nome_completo": "Natalie Gabrieli Nalon",
        "nascimento": "21/09/2002, Bituruna (PR)",
        "altura": "1.69"
    },
    {
        "elenco": "feminino",
        "nome": "JU SANTOS",
        "posicao": "Volante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/ju-santos.png",
        "descricao": "Ju Santos chegou ao Botafogo em 2022 para reforçar o meio-campo das Gloriosas e têm como características força física e bom passe. Possui diversos títulos nos clubes por onde passou e conquistou uma Libertadores com a Ferroviária.",
        "nome_completo": "Juliana Santos Cardoso",
        "nascimento": "24/04/1995, Curitiba (PR)",
        "altura": "1,65"
    },
    {
        "elenco": "feminino",
        "nome": "TREYCI",
        "posicao": "volante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/treyci.png",
        "descricao": "Treyci representa muita força e agilidade no meio de campo. A defensora também fez parte da campanha do Napoli no Campeonato Brasileiro da Série A2 em 2020, ano onde o time subiu para a primeira divisão.",
        "nome_completo": "Treyci da Silva Campos",
        "nascimento": "27/02/1998, Porto Alegre (RS)",
        "altura": "1,60"
    },
    {
        "elenco": "feminino",
        "nome": "Japa",
        "posicao": "Meia",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/japa.png",
        "descricao": "Japa se destaca pela sua inteligência nas tomadas de decisões e possui uma técnica apurada. Chegou no Botafogo para a categoria Sub-20, onde conquistou o título inédito de campeã carioca em 2022. Na temporada 2023, a meia compõe a equipe principal das Gloriosas.",
        "nome_completo": "Ana Paula Emy Satake Yamada",
        "nascimento": "11/06/2002, São Paulo",
        "altura": "1,69"
    },
    {
        "elenco": "feminino",
        "nome": "DRIELY",
        "posicao": "meia",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/driely.png",
        "descricao": "Conhecida pela sua garra nas disputas de bola, a experiente volante é respeitada por toda a equipe. A jogadora fez parte do elenco do São Paulo na conquista do Campeonato Brasileiro A2.",
        "nome_completo": "Driely Severino Ferreira",
        "nascimento": "06/07/1990, Formosas (GO)",
        "altura": "1,66"
    },
    {
        "elenco": "feminino",
        "nome": "CAMILA OLIVEIRA",
        "posicao": "meia",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/camila.png",
        "descricao": "Camila chegou ao Botafogo em 2021 e agrega valor com sua técnica e visão de jogo. A meia marcou a temporada 2022 com um belíssimo gol de falta na final do Campeonato Carioca contra o Flamengo, que ajudou a dar o título de campeão para o Glorioso.",
        "nome_completo": "Camila Cristina de Oliveira Cruz",
        "nascimento": "26/10/1990, Rio de Janeiro (RJ)",
        "altura": "1,61"
    },
    {
        "elenco": "feminino",
        "nome": "VITORINHA",
        "posicao": "meia",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/vitorinha.png",
        "descricao": "A atleta chegou ao Glorioso em 2022 para agregar a equipe com sua técnica. Vitorinha é o tipo de volante clássica com uma visão apurada, assim ela comanda o meio-campo alvinegro.",
        "nome_completo": "Josefa Victoria da Silva Souza",
        "nascimento": "14/08/1999, União dos Palmares (AL)",
        "altura": "1.61"
    },
    {
        "elenco": "feminino",
        "nome": "MAYARA VAZ",
        "posicao": "Meia atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/mayara-vaz.png",
        "descricao": "Conhecida como o motorzinho da equipe, Mayara possui agilidade e velocidade com a bola nos pés. Meia experiente, possui passagem em clubes importantes no Brasil e pela China.",
        "nome_completo": "Mayara Andreia Vaz Moreira",
        "nascimento": "22/04/1995, Belém (PA)",
        "altura": "1.6"
    },
    {
        "elenco": "feminino",
        "nome": "ELISA",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/elisa.png",
        "descricao": "Elisa iniciou sua trajetória no futsal, a transição para o campo ocorreu na sua ida para o Kindermann. Com o incentivo da família, a atacante seguiu buscando maiores objetivos. Ela se destaca pela sua inteligência, mobilidade e forte finalização",
        "nome_completo": "Elisa Lopes Amorim",
        "nascimento": "05/01/1998, São Francisco do Sul (SC)",
        "altura": "1,62"
    },
    {
        "elenco": "feminino",
        "nome": "VÂNIA",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/vania.png",
        "descricao": "Vânia iniciou sua trajetória no Menina Olímpica, projeto social localizado no Maranhão e chegou ao Botafogo em 2022 para fazer parte da equipe Sub-20. A atleta se destaca pela sua velocidade e boa finalização.",
        "nome_completo": "Elisvânia de Paz de Sousa",
        "nascimento": "27/06/2002, Codó (MA)",
        "altura": "1,56"
    },
    {
        "elenco": "feminino",
        "nome": "KÉLEN",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/kelen.png",
        "descricao": "A trajetória de Kelen no futebol iniciou em um campo de terra e de pés descalços, assim como a maioria das atletas. A atacante se destaca pela sua velocidade, habilidade, cabeceio e finalização. A atleta chegou ao Botafogo no ano de 2019, conquistando o acesso para a série A1 em 2020 e conta com dois títulos cariocas.",
        "nome_completo": "Kélen Bender",
        "nascimento": "21/02/1996, Passo Fundo (RS)",
        "altura": "1.76"
    },
    {
        "elenco": "feminino",
        "nome": "MAISA",
        "posicao": "atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/maisa.png",
        "descricao": "A atacante iniciou sua trajetória no Inter de Limeira. Depois de se destacar na equipe do interior paulista, a atleta passou pela Ferroviária, em 2019, onde jogou nos últimos quatro anos. Maísa chega ao Botafogo para reforçar o ataque para a temporada de 2023, se destaca pela sua velocidade, agilidade e boa finalização.",
        "nome_completo": "Maisa Aparecida Caverzan",
        "nascimento": "23/06/2002, Limeira (SP)",
        "altura": "1.59"
    },
    {
        "elenco": "feminino",
        "nome": "KAMILLA",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/kamilla.png",
        "descricao": "Kamilla se destaca na equipe pela sua garra em campo, boa técnica e visão de jogo. A atleta está no Botafogo desde 2021 e um dos seus jogos marcantes foi a final do Campeonato Carioca de 2022, onde marcou um gol fora da área, abrindo o placar na conquista sobre o Flamengo.",
        "nome_completo": "Kamilla Morais Sotero",
        "nascimento": "25/08/1994, Belo Horizonte (MG)",
        "altura": "1,64"
    },
    {
        "elenco": "feminino",
        "nome": "LARISSA NASCIMENTO",
        "posicao": "atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/larissa-nascimento.png",
        "descricao": "Atleta em formação que tem como principais características a velocidade e obediência tática. Larissa surgiu em uma escolinha no bairro da Vila Kennedy (RJ). Neste período, disputou a Taça das Favelas e recebeu a proposta de teste para o Vasco, clube onde iniciou sua caminhada aos 15 anos de idade. Em 2022, chegou ao Botafogo para a equipe Sub-20, onde conquistou o título inédito da categoria e hoje incorpora a categoria principal.",
        "nome_completo": "Larissa Nascimento da Silva",
        "nascimento": "28/04/2002, Rio de Janeiro (RJ)",
        "altura": "1,59"
    },
    {
        "elenco": "feminino",
        "nome": "THAYNARA",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/thaynara.png",
        "descricao": "Thaynara se destaca pela sua velocidade e boa finalização. A jogadora se apresenta na temporada 2023 das Gloriosas como uma das armas ofensivas da categoria.",
        "nome_completo": "Thaynara Virgílio Ribeiro",
        "nascimento": "02/07/2000, São Luís (MA)",
        "altura": "1.69"
    },
    {
        "elenco": "feminino",
        "nome": "VALÉRIA",
        "posicao": "atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/valeria.png",
        "descricao": "Atacante de muita velocidade e agilidade para buscar a finalização. Valéria é do interior do Acre e iniciou sua carreira vestindo a camisa do Assermurb por 8 anos, após esse período passou por diversos clubes no Brasil até chegar na Europa, onde atuou por 4 temporadas. Em 2022, chegou ao Botafogo e agrega valor à equipe.",
        "nome_completo": "Valéria Paula de Lima",
        "nascimento": "08/07/1993, Plácido de Castro (AC)",
        "altura": "1,70"
    },
    {
        "elenco": "feminino",
        "nome": "DRIKA",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/drika.png",
        "descricao": "Natural do Maranhão, Drika se destaca em campo pela sua velocidade e agilidade em transitar na defesa adversária. O chute forte também é uma característica marcante em seu jogo.",
        "nome_completo": "",
        "nascimento": "12/01/1998, Coelho Neto (MA)",
        "altura": "1.58"
    },
    {
        "elenco": "masculino",
        "nome": "Gatito Fernández",
        "posicao": "Goleiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/gatito.png",
        "descricao": "Filho do goleiro Gato Fernández, que fez história e jogou na seleção paraguaia, Gatito seguiu a profissão do pai. Com passagens por clubes importantes da América do Sul, veio para o Brasil em 2014, teve boas atuações por Vitória e Figueirense, até chegar ao Botafogo.",
        "nome_completo": "Roberto Júnior Fernández Torres",
        "nascimento": "29/03/1988, em Assunção (PAR)",
        "altura": "1,91m"
    },
    {
        "elenco": "masculino",
        "nome": "Douglas Borges",
        "posicao": "Goleiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/douglas.png",
        "descricao": "Eleito o melhor goleiro do Campeonato Carioca de 2020, Douglas Borges chega para reforçar a meta alvinegra na temporada 2021. Experiente, o arqueiro chega para elevar o nível de competitividade na meta do Glorioso.",
        "nome_completo": "Douglas Borges",
        "nascimento": "30/03/1990, em Franca (SP)",
        "altura": "1,86m"
    },
    {
        "elenco": "masculino",
        "nome": "Igo Gabriel",
        "posicao": "Goleiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/igo-gabriel.png",
        "descricao": "Cria das categorias de base do Botafogo, Igo Gabriel foi peça importante durante a temporada do do Sub-20 alvinegro, que foi campeão da Copa Rio OPG e vice-campeão da Copa do Brasil em 2021. Um dos destaques do time, o goleiro se firmou com excelentes atuações na base e agora espera repetir o sucesso incorporando o elenco profissional do Glorioso.",
        "nome_completo": "Igo Gabriel Santos Prereira",
        "nascimento": "13/10/2001, em Maceió-AL",
        "altura": "1,90m"
    },
    {
        "elenco": "masculino",
        "nome": "Lucas Perri",
        "posicao": "Goleiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/lucasperri.png",
        "descricao": "Goleiro promissor, Lucas Perri iniciou sua trajetória no futebol com a camisa do São Paulo e obteve inúmeras convocações para as seleções brasileiras de base. Após um ano de bastante destaque pelo Náutico, o arqueiro chega ao Glorioso para agregar valor para a defesa da meta alvinegra.",
        "nome_completo": "Lucas Estella Perri",
        "nascimento": "12/10/1997, em Valinhos (SP)",
        "altura": "1,97cm"
    },
    {
        "elenco": "masculino",
        "nome": "João Fernando",
        "posicao": "Goleiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/joaofernando.png",
        "descricao": "João Fernando chega ao Glorioso muito motivado e preparado para vestir a camisa do Fogão na temporada de 2023. O jovem goleiro de 21 anos conta com convocações para a seleção brasileira e acumula títulos do Campeonato Brasileiro Sub-20, Copa do Brasil Sub-17 e Estaduais.",
        "nome_completo": "João Fernando Monteiro Siqueira",
        "nascimento": "01/03/2001, em Volta Redonda (RJ)",
        "altura": "1m86"
    },
    {
        "elenco": "masculino",
        "nome": "Hugo",
        "posicao": "Lateral",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/hugo.png",
        "descricao": "Jovem promissor, Hugo despontou no sub-20 do Botafogo e foi integrado gradativamente aos profissionais. O lateral-esquerdo trabalha com afinco para agarrar as oportunidades.",
        "nome_completo": "Hugo Gonçalves Ferreira Neto",
        "nascimento": "20/09/2001, em João Pessoa (PB)",
        "altura": "1,75m"
    },
    {
        "elenco": "masculino",
        "nome": "Rafael",
        "posicao": "Lateral",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/rafael-pereira.png",
        "descricao": "Escolhido pelo Botafogo desde sempre, chegou o momento de Rafael realizar o sonho de atuar em seu clube de coração. Com uma vasta experiência adquirida, após anos atuando entre os grandes do futebol europeu, o lateral se caracteriza por sua polivalência, um forte espírito de competitividade e boa técnica em campo.",
        "nome_completo": "Rafael Pereira da Silva",
        "nascimento": "09/07/1990, em Petrópolis (RJ)",
        "altura": "1,72m"
    },
    {
        "elenco": "masculino",
        "nome": "Daniel Borges",
        "posicao": "Lateral",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/daniel-borges.png",
        "descricao": "Melhor lateral-direito da Série B de 2020, Daniel Borges chega ao Botafogo após ótima passagem pelo Mirassol no Campeonato Paulista. Com características ofensivas, o lateral possui boa vivência na competição e vem para ajudar o Alvinegro na temporada.",
        "nome_completo": "Daniel Fortunato Borges",
        "nascimento": "23/03/1993, em São José dos Campos (SP)",
        "altura": "1,74m"
    },
    {
        "elenco": "masculino",
        "nome": "Marçal",
        "posicao": "Lateral",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/marcal.png",
        "descricao": "Jogador de grande experiência no futebol internacional, Fernando Marçal volta ao Brasil após 12 anos para defender o Botafogo. O lateral-esquerdo, que se destaca pela força física e polivalência, chega após uma temporada na Premier League, onde defendeu o Wolverhampton.",
        "nome_completo": "Fernando Marçal Oliveira",
        "nascimento": "19/02/1989, em São Paulo (SP)",
        "altura": "1,78m"
    },
    {
        "elenco": "masculino",
        "nome": "Di Plácido",
        "posicao": "Lateral",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/diplacido.png",
        "descricao": "Aguerrido e voluntarioso, Di Plácido chega ao Botafogo após anos de destaque no futebol argentino. O atleta passa a ser uma opção a mais para a lateral-direita e promete entregar o máximo de sí para defender as cores alvinegras em campo.",
        "nome_completo": "Leonel Di Plácido",
        "nascimento": "28/01/1994, em Buenos Aires-ARG",
        "altura": "1m74"
    },
    {
        "elenco": "masculino",
        "nome": "Joel Carli",
        "posicao": "Zagueiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/joelcarli.png",
        "descricao": "Reconhecido por sua raça, liderança e respeito pela camisa alvinegra, o zagueiro argentino retorna para agregar experiência ao elenco na missão de reconstrução em 2021. O xerife da defesa do Fogão possui mais do que 100 jogos pelo Botafogo e foi decisivo no título conquistado pelo Alvinegro, em 2018, diante do Vasco, no Maracanã.",
        "nome_completo": "Mauro Joel Carli",
        "nascimento": "19/10/1986, em Mar del Plata (ARG)",
        "altura": "1,93m"
    },
    {
        "elenco": "masculino",
        "nome": "Philipe Sampaio",
        "posicao": "Zagueiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/philipe-sampaio.png",
        "descricao": "Formado no Santos, o defensor fez carreira e atuou por oito temporadas no futebol europeu. Conhecido como \"General\" na França, Sampaio fez parte da linha defensiva que ficou 700 minutos seguidos sem levar gols. Motivado com o desafio de construir uma nova história junto ao Glorioso, Sampaio chega como a primira contratação da Era John Textor.",
        "nome_completo": "Philipe Sampaio Azevedo",
        "nascimento": "11/11/1994, em São Paulo (SP)",
        "altura": "1,91m"
    },
    {
        "elenco": "masculino",
        "nome": "Victor Cuesta",
        "posicao": "Zagueiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/cuesta.png",
        "descricao": "Experiente defensor, Victor Cuesta chega para agregar valor ao setor defensivo do Botafogo. Eleito um dos melhores zagueiros do Campeonato Brasileiro nas temporadas 2018 e 2020, o Argentino tem um espírito de liderança característicos e chega com vontade de construir uma história de glórias com a camisa alvinegra.",
        "nome_completo": "Víctor Leandro Cuesta",
        "nascimento": "19/11/1988, em La Plata, Argentina",
        "altura": "1,87m"
    },
    {
        "elenco": "masculino",
        "nome": "Adryelson",
        "posicao": "Zagueiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/adryelson.png",
        "descricao": "Após uma breve passagem pelo futebol árabe, Adryelson chega ao Alvinegro para reforçar o setor defensivo. O zagueiro se destaca pela força, velocidade e impulsão.",
        "nome_completo": "Adryelson Shawann Lima Silva",
        "nascimento": "23/03/1998",
        "altura": "1,82m"
    },
    {
        "elenco": "masculino",
        "nome": "Segovia",
        "posicao": "Zagueiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/segovia.png",
        "descricao": "Segovia chega ao Brasil para defender as cores do Botafogo e reforçar o elenco alvinegro. O defensor equatoriano foi revelado pelo El Nacional, do Equador, e esteva no Independiente desde 2019, conquistando duas Copas Sul-Americana e um título nacional. Segovia conta com convocações para a Seleção Equatoriana de base e profissional.",
        "nome_completo": "Luis Geovanny Segovia Vega",
        "nascimento": "Nascimento: 26/10/1997, em Quito-ECU",
        "altura": "1,82cm"
    },
    {
        "elenco": "masculino",
        "nome": "Lucas Mezenga",
        "posicao": "Zagueiro",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/mezenga.png",
        "descricao": "Após disputar o Campeonato Carioca profissional pelo Nova Iguaçu, Mezenga foi observado pelo departamento captação das categorias de base do Botafogo e chegou para reforçar a equipe Sub-20. Em pouco tempo, o defensor mostrou potencial na base e logo teve a oportunidade de subir ao time principal. Com boa técnica e poder de marcação, Lucas busca agora se firmar no time de cima.",
        "nome_completo": "Lucas de Souza Mombra Rosa",
        "nascimento": "20/10/2001, em Rio de Janeiro-RJ",
        "altura": "1,85cm"
    },
    {
        "elenco": "masculino",
        "nome": "kayque",
        "posicao": "Volante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/kayque.png",
        "descricao": "-",
        "nome_completo": "Kayque Luiz Pereira",
        "nascimento": "12/07/2000, no Rio de Janeiro (RJ)",
        "altura": "1,76m"
    },
    {
        "elenco": "masculino",
        "nome": "Tchê Tchê",
        "posicao": "Volante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/tchetche.png",
        "descricao": "Volante de elevada qualidade técnica, Tchê Tchê coleciona conquistas na carreira. Tricampeão Brasileiro, da Copa do Brasil, entre outros títulos, o meia assume a histórica camisa 6 de Nilton Santos e chega ao Glorioso com o objetivo de ajudar na construção do novo projeto alvinegro.",
        "nome_completo": "Danilo das Neves Pinheiro",
        "nascimento": "30/08/1992, em São Paulo",
        "altura": "1,75m"
    },
    {
        "elenco": "masculino",
        "nome": "Danilo Barbosa",
        "posicao": "Volante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/danilobarbosa.png",
        "descricao": "Volante moderno, Danilo tem um currículo que reune muita experiência no futebol europeu. Revelado pelo Vasco, saiu muito cedo do país e atuou em Portugal, Espanha, Bélgica e França, antes de voltar ao Brasil para ser campeão da Libertadores pelo Palmeiras. Motivado, o volante quer voltar a jogar futebol com alegria pelo Botafogo.",
        "nome_completo": "Danilo Barbosa da Silva",
        "nascimento": "28/02/1996, em Simões Filho, (BA)",
        "altura": "1,83cm"
    },
    {
        "elenco": "masculino",
        "nome": "Patrick de Paula",
        "posicao": "Volante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/patrick-paula.png",
        "descricao": "Bicampeão da Libertadores e oriundo da Taça das Favelas do Rio de Janeiro, Patrick de Paula chegou ao Botafogo como a contratação mais cara da história alvinegra. Meio-campista reconhecido pelo talento e vigor físico, PK tem o toque de versatilidade que todo time precisa em campo.",
        "nome_completo": "Patrick de Paula Carreiro",
        "nascimento": "08/09/1999, em Rio de Janeiro, RJ",
        "altura": "1,78m"
    },
    {
        "elenco": "masculino",
        "nome": "Marlon Freitas",
        "posicao": "Volante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/marlon.png",
        "descricao": "Marlon Freitas chega ao Glorioso após se destacar na Sul-Americana e no Campeonato Brasileiro atuando pelo Atlético-GO. Marlon vem para somar ao elenco Alvinegro com sua força, visão de jogo e técnica. Revelado pelo Fluminense, o meio-campista também reúne experiências ao atuar fora do Brasil.",
        "nome_completo": "Marlon Rodrigues de Freitas",
        "nascimento": "27/03/1995, em Magé (RJ)",
        "altura": "1,85cm"
    },
    {
        "elenco": "masculino",
        "nome": "Breno",
        "posicao": "Volante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/breno.png",
        "descricao": "Jovem marcador, Breno Chega ao Glorioso após de destacar defendendo o Goiás. O Volante tem como característica o equilibrio no setor do meio-campo, destruindo jogadas e dando suporte na saída de bola. É mais uma opção para somar forças ao elenco alvinegro.",
        "nome_completo": "Breno Washington Rodrigues da Silva",
        "nascimento": "01/09/2000, em Goiânia-GO",
        "altura": "1,77m"
    },
    {
        "elenco": "masculino",
        "nome": "JP",
        "posicao": "Volante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/jp.png",
        "descricao": "Volante que alia versatilidade, combatividade e boa técnica, JP foi um atleta observado pelo departamento de scouting do Botafogo para integrar a equipe Sub-23. Após boas apresentações, o jovem conquistou seu espaço e foi opotunizado ao time principal em 2023.",
        "nome_completo": "João Pedro Galvão de Carvalho",
        "nascimento": "07/05/2001, em Cabo Frio (RJ)",
        "altura": "1m84"
    },
    {
        "elenco": "masculino",
        "nome": "Lucas Piazon",
        "posicao": "Meia",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/lucas-piazon.png",
        "descricao": "Lucas Piazon retorna ao Brasil para atuar pela primeira vez como profissional e agregar valor ao elenco alvinegro com suas qualidades e experiências. Revelado pelo São Paulo e com convocações para a Seleção Brasileira de base, o meia foi negociado em 2011, ainda muito jovem, junto ao Chelsea. Lucas atuou também pelo futebol espanhol, holandês, alemão, italiano e português.",
        "nome_completo": "Lucas Domingues Piazón",
        "nascimento": "20/01/1994, em São Paulo (SP)",
        "altura": "1,82m"
    },
    {
        "elenco": "masculino",
        "nome": "Lucas Fernandes",
        "posicao": "Meia",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/lucas-fernandes.png",
        "descricao": "Meia de muita qualidade técnica, Lucas foi revelado pelo São Paulo e, desde muito jovem, se destacou com convocações para as Seleções Brasileiras de base. Após um período produtivo e de evolução no futebol português, Fernandes chega ao Botafogo para somar forças ao setor criativo da equipe.",
        "nome_completo": "Lucas Fernandes da Silva",
        "nascimento": "20/09/1997, em São Bernardo do Campo, SP",
        "altura": "1,75m"
    },
    {
        "elenco": "masculino",
        "nome": "Eduardo",
        "posicao": "Meia",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/eduardo.png",
        "descricao": "Meio-campista objetivo e com alto poder de definição, Eduardo construiu uma carreira sólida fora do país. Com experiências no futebol português e francês, o meia conquistou inúmeros títulos e se tornou ídolo na Arábia Saudita. Motivado com o desafio de defender o Glorioso, Eduardo espera conquistar também a torcida alvinegra.",
        "nome_completo": "Carlos Eduardo de Oliveira Alves",
        "nascimento": "17/10/1989, em Ribeirão Preto (SP)",
        "altura": "1,84cm"
    },
    {
        "elenco": "masculino",
        "nome": "Gabriel Pires",
        "posicao": "Meia",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/gabrielpires.png",
        "descricao": "Escolhido pelo Botafogo, Gabriel Pires é um meio-campo de muita qualidade técnica e com um bom toque de bola. Após fazer a base no Resende, o meia fez carreira na Europa e chega para realizar o sonho de atuar pelo clube de coração.",
        "nome_completo": "Gabriel Appelt Pires",
        "nascimento": "18/09/1993, Resende (RJ)",
        "altura": "1,87cm"
    },
    {
        "elenco": "masculino",
        "nome": "Jacob Montes",
        "posicao": "Meia",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/jacobmontes.png",
        "descricao": "Com passagens por Crystal Palace e RWD Molenbeek, Jacob Montes é um dos representantes do conceito multiclubes ideializado pelo acionista majoritário John Textor. O atleta norte-americano chega ao Botafogo para um intercâmbio e busca se adaptar a cultura brasileira.",
        "nome_completo": "Jacob Christian Montes",
        "nascimento": "20/10/1998, em Flórida-EUA",
        "altura": "1,80cm"
    },
    {
        "elenco": "masculino",
        "nome": "Raí",
        "posicao": "Meia",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/rai.png",
        "descricao": "Meia de muita habilidade e com notável qualidade nos passes, Raí chegou ao Botafogo com 11 anos de idade e tem orgulho de dizer que foi formado pela #BaseForte alvinegra. Após de destacar com o Sub-20 alvinegro, o jovem espera fazer bonito também na equipe profissional.",
        "nome_completo": "Rai da Silva Pessanha",
        "nascimento": "21/04/2002, em Duque de Caxias (RJ)",
        "altura": "1,71m"
    },
    {
        "elenco": "masculino",
        "nome": "Bernardo Valim",
        "posicao": "Meia",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/valim.png",
        "descricao": "Bernardo Valim é cria do Glorioso, formado nas divisões de base do Clube e integrado ao profissional desde o final de 2022. O meio-campista acumula convocações para a Seleção Brasileira e esteve na excursão à Londres. O jovem talento alvinegro carrega em sua bagagem títulos com a amarelinha e no Fogão.",
        "nome_completo": "Bernardo da Silva Rocha Valim",
        "nascimento": "31/01/2006, em Niterói (RJ)",
        "altura": "1m86"
    },
    {
        "elenco": "masculino",
        "nome": "Gustavo Sauer",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/gustavo-sauer.png",
        "descricao": "Após boas atuações no futebol português com a camisa do Boavista por quatro temporadas, Gustavo Sauer está empolgado com o novo desafio de vestir a camisa alvinegra. De volta ao Brasil, o atacante que possui um perfil completo para um jogador de frente, espera elevar o nível ofensivo da equipe e conquistar grandes objetivos pelo Glorioso.",
        "nome_completo": "Gustavo Affonso Sauerbeck",
        "nascimento": "em 30/04/1993, em Joinville, SC",
        "altura": "1,81m"
    },
    {
        "elenco": "masculino",
        "nome": "Luis Henrique",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/luishenrique.png",
        "descricao": "Cria da base alvinegra, Luis Henrique está nem sua segunda passagem pelo Glorioso. O atacante retorna após vivência futebol europeu, ainda mais desenvolvido fisicamente. Se destaca em campo por bastante força, velocidade e objetividade nas ações ofensivas.",
        "nome_completo": "Luis Henrique Tomaz de Lima",
        "nascimento": "14/12/2001, em João Pessoa (PB)",
        "altura": "1,81cm"
    },
    {
        "elenco": "masculino",
        "nome": "Victor Sá",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/victor-sa.png",
        "descricao": "Atacante com passagem longa pelo futebol internacional, Victor Sá retorna ao Brasil para defender o Botafogo. Habilidoso e rápido, o jogador se apresenta como uma das ferramentas ofensivas do Clube na temporada.",
        "nome_completo": "João Victor Sá",
        "nascimento": "27/03/1994, em São José dos Campos, SP",
        "altura": "1,78m"
    },
    {
        "elenco": "masculino",
        "nome": "Matheus Nascimento",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/matheus-nascimento.png",
        "descricao": "Cria do Botafogo, centroavante goleador desde muito cedo, Matheus Nascimento tem passagem pela Seleção Brasileira sub-15 e diversos gols no início da carreira. Em 2020, com apenas 16 anos e muito futuro pela frente, assinou contrato e passou a treinar com os profissionais do Botafogo.",
        "nome_completo": "Matheus Nascimento de Paula",
        "nascimento": "03/03/2004, no Rio de Janeiro (RJ)",
        "altura": "1,82m"
    },
    {
        "elenco": "masculino",
        "nome": "Tiquinho Soares",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/tiquinho.png",
        "descricao": "Natural de Sousa, na Paraíba, Tiquinho Soares desenvolveu sua carreira no futebol português e conquistou muitos títulos na Europa. Goleador por onde passou, Soares volta ao seu país para assumir a missão ser o homem forte do ataque do Glorioso.",
        "nome_completo": "Francisco das Chagas Soares dos Santos",
        "nascimento": "17/01/1991, em Sousa (PB)",
        "altura": "1,87cm"
    },
    {
        "elenco": "masculino",
        "nome": "Carlos Alberto",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/carlosalberto.png",
        "descricao": "Carlos Alberto reforça a equipe do Glorioso e traz como principais características precisão e habilidade. O jovem atacante de 20 anos, revelado pelo América Mineiro, conta com convocações para a Seleção Brasileira de base e é um atleta com um futuro promissor.",
        "nome_completo": "Carlos Alberto Gomes da Silva Filho",
        "nascimento": "14/04/2002, em João Pessoa (PB)",
        "altura": "1,79cm"
    },
    {
        "elenco": "masculino",
        "nome": "Janderson",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/janderson.png",
        "descricao": "Artilheiro do Bahia de Feira na Série D de 2022, Janderson foi mais um jovem observado pelo departamento de scouting alvinegro para atuar pelo time Sub-23. Centroavante de bastante vigor físico e com bom aproveitamento nas finalizações, o jovem busca se firmar na equipe profissional em 2023.",
        "nome_completo": "Janderson de Carvalho Costa",
        "nascimento": "06/05/1999, em São João de Meriti (RJ)",
        "altura": "1m89"
    },
    {
        "elenco": "masculino",
        "nome": "Junior Santos",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/juniorsantos.png",
        "descricao": "Chegando do futebol asiático, Junior Santos é um atacante de bastante força e movimentação. O centroavante baiano, que é dono de um carisma peculiar fora do campo, chega para somar valor ao setor ofensivo do Alvinegro dentro das quatro linhas.",
        "nome_completo": "José Antonio dos Santos Júnior",
        "nascimento": "11/10/1994, em Conceição de Jacuípe (BA)",
        "altura": "1,88cm"
    },
    {
        "elenco": "masculino",
        "nome": "Matías Segovia",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/matias-segovia.png",
        "descricao": "Matías é um meia canhoto de bom drible e bastante velocidade, o atleta chega ao Glorioso para somar forças no setor ofensivo. Segovia Iniciou sua trajetória no Guaraní (PAR) e coleciona passagens nas categorias de base da Seleção Paraguaia, onde atuou como titular e foi um dos destaques no último Sul-Americano Sub-20.",
        "nome_completo": "Matías Emanuel Segovia Torales",
        "nascimento": "04/01/2003, em Caaguazú (PAR)",
        "altura": "Altura: 1,65m"
    },
    {
        "elenco": "masculino",
        "nome": "Diego Hernández",
        "posicao": "Atacante",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/diego-hernandez.png",
        "descricao": "Destaque do Montevideo Wanderers, Hernández é um jovem de muito potencial. Colecionando convocações para a Seleção celeste, o uruguaio se destaca em campo pela sua objetividade e boa finalização. Versátil, atua em mais de uma posição no campo ofensivo e chega elevar o nível do elenco.",
        "nome_completo": "Diego Manuel Hernández González",
        "nascimento": "22/06/2000, em Montevideo (URU)",
        "altura": "1,75m"
    }
];