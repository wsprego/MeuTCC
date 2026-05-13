// Data for guidelines topics
const guidelinesData = {
    "cores": {
        group: "Vocabulário Visual e Textual",
        title: "01 - Cores",
        description: `As cores não devem ser o único recurso para transmitir informações. É importante garantir um bom contraste entre a cor de fundo e os elementos em primeiro plano para facilitar a distinção dos itens, a diferenciação de conteúdos ou a relação entre informações semelhantes. <br><br>Além disso, o conteúdo precisa ser compreensível mesmo sem imagens ou estilos visuais, usando as cores apenas como um complemento para ajudar a identificar ou relacionar elementos.`,
        skills: "Atenção, Leitura, Compreensão verbal ou linguística, Compreensão visual",
        why: `Quando usamos apenas cores para transmitir uma mensagem, muitas pessoas — principalmente crianças ou pessoas com TEA — podem não entender o que aquele elemento quer dizer. <br><br>Além disso, se o contraste entre o fundo e o texto ou objeto for baixo, fica difícil de ler e compreender, o que pode prejudicar a atenção. Por outro lado, cores bem usadas e com bom contraste ajudam a guiar o olhar, separar informações e organizar melhor o conteúdo.`,
        how: `Escolha cores de fundo diferentes das cores dos elementos em primeiro plano, garantindo contraste suficiente;
        Prefira fundos claros ou brancos, pois ajudam a destacar textos e objetos;
        Use cores para diferenciar seções ou para mostrar que elementos estão relacionados, mas sempre com apoio de texto ou ícones;
        O conteúdo deve ser entendível mesmo sem cores ou imagens;
        Adicione rótulos ou textos explicativos aos elementos;
        Se tiver dúvida sobre o contraste, utilize ferramentas de verificação online para checar se as combinações estão acessíveis.`,
        examples: [
            { type: "text", content: "Exemplo de paleta de cores acessível:" },
            { type: "image", src:"../diretriz/imagens/paleta-cores-azul.png", alt: "Exemplo de paleta de cores acessível" },
            { type: "text", content: "Exemplo de tela com contraste adequado:" },
            { type: "image", src: "../diretriz/imagens/tela-azul.jpg", alt: "Exemplo de tela com contraste adequado" },
            { type: "text", content: "Exemplo de tela com baixo contraste (EVITAR):" },
            { type: "image", src: "../diretriz/imagens/site-design-erro.webp", alt: "Exemplo de tela com baixo contraste (EVITAR)" }
        ]
    },
    "textos": {
        group: "Vocabulário Visual e Textual",
        title: "02 - Textos",
        description: "Use sempre uma linguagem simples, tanto no texto quanto nos elementos visuais. Evite jargões, erros de ortografia, metáforas, abreviações ou siglas difíceis. Escolha termos, expressões, nomes e símbolos que sejam familiares e fáceis de entender para o seu público.",
        skills: "Atenção, leitura, compreensão verbal ou linguística.",
        why: "Pessoas com TEA podem ter dificuldade para entender textos longos, complexos ou com linguagem figurada. Metáforas, expressões populares ou textos com muitos detalhes podem confundir ou distrair, dificultando a compreensão. <br><br>Além disso, textos simples ajudam a manter a atenção e facilitam a aprendizagem de vocabulário, principalmente no caso de crianças.",
        how: "Use uma linguagem clara, objetiva e fácil de entender; Evite jargões técnicos, expressões regionais ou palavras difíceis; Não use metáforas, linguagem figurada ou textos que possam ser interpretados de formas diferentes; Evite abreviações e siglas que não sejam amplamente conhecidas; Prefira textos curtos, sem parágrafos muito longos; Escreva rótulos e botões de forma clara e consistente, usando termos simples e diretos.; Escolha palavras e nomes que façam sentido para todos os usuários, não apenas para quem conhece uma área ou contexto específico; Utilize símbolos e ícones que sejam fáceis de reconhecer, com formas claras e contornos que ajudem a identificar o que representam.",
        examples: [
        { "type": "text", "content": "Exemplo de texto claro e acessível:" },
        { "type": "html", "content": "<p>Para criar uma conta, clique no botão azul <strong>Registrar</strong> e preencha seus dados.</p>" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-texto-acessivel.png", "alt": "Página com textos acessivel" },
        { "type": "text", "content": "Exemplo de texto confuso (EVITAR):" },
        { "type": "html", "content": "<p>Dê o primeiro passo rumo à sua jornada digital clicando na aurora azul da criação de perfis!</p>" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-texto-confuso.png", "alt": "Página com texto confuso" }
    ]
    },
    "legibilidade": {
        group: "Vocabulário Visual e Textual",
        title: "03 - Legibilidade",
        description: "Mantenha os textos curtos e diretos. Evite parágrafos longos e use marcações que ajudam na leitura, como listas, títulos e subtítulos para dividir o conteúdo. <br><br>Além de usar uma linguagem simples (veja a recomendação na aba 02-Textos), é importante organizar o texto de forma que fique fácil de ler. Usar subtítulos, listas e dividir o conteúdo em blocos menores facilita muito a leitura. Também é essencial cuidar do tamanho das linhas e do espaçamento.",
        skills: "Atenção, leitura, compreensão verbal, compreensão visual.",
        why: "Parágrafos longos e complexos podem confundir ou desviar a atenção, principalmente para pessoas com TEA. Textos bem divididos, com listas e subtítulos, ajudam a guiar a leitura, facilitam a compreensão e tornam a experiência mais agradável.",
        how: "Divida o texto em parágrafos curtos; Use listas (como esta!) para organizar informações; Adicione títulos e subtítulos para separar os temas; Evite linhas muito longas (de preferência, até 80 caracteres por linha); Mantenha um bom espaçamento entre linhas para não 'apertar' o texto; Não alinhe o texto à direita; Use letras minúsculas, evite escrever tudo em caixa alta; Prefira fontes sem serifa, como Arial, Verdana, Helvetica ou Tahoma; Use linguagem simples, sem erros e sem expressões difíceis ou siglas; Seja objetivo e claro.",
        examples: [
        { "type": "text", "content": "Exemplo de texto com boa legibilidade:" },
        { "type": "html", "content": "<div style='font-family: Poppins, Arial, sans-serif; font-size: 18px; line-height: 1.7; text-align: left; max-width: 600px; background-color: #f0f8ff; padding: 15px; border-radius: 8px;'> <h3 style='color: #2f6da0;'>Como organizar o conteúdo</h3> <p>Separe o texto em blocos menores e utilize subtítulos para indicar novas ideias.</p> <ul><li>Use frases curtas;</li><li>Evite termos difíceis;</li><li>Prefira espaçamento confortável entre linhas.</li></ul> </div>" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-boa-legibilidade.png", "alt": "Exemplo de layout com boa legibilidade" },
        { "type": "text", "content": "Exemplo de texto com baixa legibilidade (EVITAR):" },
        { "type": "html", "content": "<div style='font-family: Times New Roman, serif; font-size: 14px; line-height: 1.1; text-align: justify; max-width: 600px; background-color: #ffe6e6; padding: 15px; border-radius: 8px; color: #660000;'> <h3 style='text-transform: uppercase;'>Como organizar o conteúdo</h3> <p>É importante que se observe a estrutura do conteúdo em seus mais variados aspectos, de forma que haja uma conexão conceitual e harmônica entre as partes do texto para promover uma leitura produtiva e integral.</p> </div>" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-ruim-legibilidade.png", "alt": "Exemplo de texto com hierarquia visual confusa e má distribuição de informações" }
    ]
    },
    "compatibilidade_mundo_real": {
        group: "Vocabulário Visual e Textual",
        title: "04 - Compatibilidade com mundo real",
        description: "Os ícones, imagens, nomes de botões e menus devem ser parecidos com o que as pessoas já conhecem na vida real. Eles precisam representar ações concretas e do dia a dia, para que sejam fáceis de reconhecer. <br><br>Pessoas com TEA podem ter dificuldade para entender metáforas ou imagens que exigem imaginação. Por isso, é importante usar elementos visuais que sejam claros e baseados em situações reais. Em sites e aplicativos para crianças, essa prática também ajuda no aprendizado de novas palavras e ações que poderão usar no cotidiano.",
        skills: "Memorização, atenção, leitura, compreensão verbal, compreensão visual.",
        why: "Pessoas com TEA podem não entender imagens ou símbolos abstratos, fantasiosos ou que representem algo de forma indireta. Usar ações, ícones e elementos parecidos com o mundo real facilita o reconhecimento e torna a interação mais intuitiva.",
        how: "Escolha ícones e imagens que mostrem claramente ações reais, evitando metáforas; Prefira símbolos que as pessoas já veem ou usam no dia a dia; Para crianças, use ações e interações que elas possam aprender e aplicar na vida real; Em dispositivos móveis (como tablets), aproveite gestos e toques já conhecidos, como arrastar ou deslizar; Use imagens, gráficos e personagens que ajudem a manter o foco e a entender melhor as tarefas; Relacione as atividades com experiências comuns e habilidades que a criança já conhece; Reproduza ações, objetos e interações que sejam familiares e fáceis de identificar.",
        examples: [
        { "type": "text", "content": "Exemplo: Ícone de 'casa' para 'Início' (familiar)." },
        { "type": "image", "src": "../diretriz/imagens/icons8-casa-64.png", "alt": "Ícone de casa representando a página inicial" },
        { "type": "text", "content": "Exemplo: Ícone de 'lixeira' para 'Excluir' (ação concreta e comum)." },
        { "type": "image", "src": "../diretriz/imagens/icons8-lixeira-64.png", "alt": "Ícone de lixeira representando excluir" },
        { "type": "text", "content": "Exemplo: Botão com linguagem comum ('Salvar'):" },
        { "type": "html", "content": "<button style='background-color:#4c8bf5; color:white; border:none; padding:10px 20px; border-radius:6px; font-family:Poppins,sans-serif; cursor:pointer;'>Salvar</button>" },
        { "type": "text", "content": "Exemplo ruim (EVITAR): botão com linguagem técnica ('Persistir Dados'):" },
        { "type": "html", "content": "<button style='background-color:#ff6666; color:white; border:none; padding:10px 20px; border-radius:6px; font-family:Poppins,sans-serif;'>Persistir Dados</button>" },
        { "type": "text", "content": "Exemplo de interface com ícones familiares:" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-icones-bom1.png", "alt": "Interface com ícones familiares como casa, lupa e engrenagem" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-icones-bom2.png", "alt": "Interface com ícones familiares como casa, lupa e engrenagem" },
        { "type": "text", "content": "Exemplo de ícones que pode dificultar o entendimento (EVITAR):" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-icones-ruim1.png", "alt": "Ícones abstratos e difíceis de interpretar" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-icones-ruim2.png", "alt": "Ícones abstratos e difíceis de interpretar" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-icones-ruim3.png", "alt": "Ícones abstratos e difíceis de interpretar" }
    ]
    },
    "customizacao_visual": {
        group: "Customização",
        title: "05 - Customização visual",
        description: "A customização visual consiste em oferecer ao usuário a possibilidade de ajustar elementos da interface — como cores, tamanho de texto, fontes e sons — de acordo com suas preferências. Essa flexibilidade permite que cada pessoa adapte a experiência de uso para torná-la mais confortável e adequada às suas necessidades.",
        skills: "Atenção, leitura, compreensão verbal ou linguística, compreensão visual e adaptação a mudanças ou transições.",
        why: "Pessoas no espectro autista (TEA) apresentam uma grande diversidade de preferências visuais e sensoriais, o que torna difícil identificar padrões universais. Uma cor que pode ser agradável para uma pessoa pode ser incômoda para outra. Por isso, oferecer opções de personalização garante maior inclusão, permitindo que cada indivíduo configure a interface de forma mais adequada à sua experiência sensorial e cognitiva.",
        how: "Disponibilize controles para ajuste do tamanho do texto, mesmo que navegadores já possuam funções nativas; Permita alterar esquemas de cores, incluindo um modo de alto contraste; Ofereça opções para escolher diferentes fontes tipográficas; Possibilite a personalização de sons e vozes utilizadas em botões com narração; Forneça configurações para alterar o posicionamento da navegação e controlar a execução de sons ou narrativas.",
        examples: [
        { "type": "text", "content": "Exemplo de seletor de tema (claro/escuro):" },
        { "type": "html", "content": "<div style='display:flex;align-items:center;gap:10px;padding:15px;background:#f2f2f2;border-radius:8px;width:max-content;'><label style='font-family:Poppins,sans-serif;'>Tema:</label><button style='background:#333;color:#fff;border:none;border-radius:6px;padding:8px 16px;cursor:pointer;'>🌙 Escuro</button><button style='background:#fff;color:#333;border:1px solid #ccc;border-radius:6px;padding:8px 16px;cursor:pointer;'>☀️ Claro</button></div>" },
        { "type": "text", "content": "Exemplo de controle de tamanho de texto:" },
        { "type": "html", "content": "<div style='font-family:Poppins,sans-serif;padding:15px;background:#eaf3ff;border-radius:8px;'><label for='fontRange'>Tamanho do texto:</label><input id='fontRange' type='range' min='14' max='28' value='18' style='width:150px;'><p style='font-size:18px;margin-top:10px;'>Exemplo de texto ajustável</p></div>" },
        { "type": "text", "content": "Exemplo de seletor de fonte:" },
        { "type": "html", "content": "<div style='font-family:Poppins,sans-serif;background:#f9f9f9;padding:15px;border-radius:8px;'><label for='fontSelect'>Fonte:</label><select id='fontSelect' style='margin-left:8px;'><option>Poppins</option><option>Open Sans</option><option>Verdana</option></select><p style='margin-top:10px;font-size:16px;'>Texto de exemplo para visualizar a fonte.</p></div>" },
        { "type": "text", "content": "Exemplo visual: interface com opção de personalização de tema e contraste:" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-controle-personalizar-tela.png", "alt": "Tela de site com seletor de modo claro e escuro e ajuste de contraste" }
    ]
    },
    "customizacao_informacional": {
        group: "Customização",
        title: "06 - Customização informacional",
        description: "A customização informacional consiste em permitir que o usuário escolha como deseja receber as informações, seja por meio de texto, áudio ou imagens. Essa flexibilidade é especialmente importante para pessoas no espectro autista (TEA), pois reconhece que cada indivíduo pode ter diferentes formas de processar e compreender conteúdos.",
        skills: "Atenção, leitura, compreensão visual, adaptação a mudanças",
        why: "Indivíduos com TEA podem apresentar sensibilidades e preferências distintas: alguns são mais receptivos a estímulos visuais, outros a estímulos sonoros, e há aqueles que necessitam de textos ou narrativas para compreender melhor as informações. Assim, embora seja recomendável oferecer múltiplas formas de apresentação (representações redundantes), também é essencial dar ao usuário o controle para escolher as que mais se adequam às suas necessidades. <br><br>Por exemplo, crianças em fase de letramento podem preferir imagens e instruções sonoras em vez de textos escritos..",
        how: "Permitir que botões exibam apenas texto, apenas símbolos ou a combinação de ambos; Tornar sons, incluindo músicas, opcionais e com controle de volume; Disponibilizar opções para alterar cores, fontes e vozes utilizadas em botões narrados; Permitir personalizar as cores e sons do site ou aplicação.",
        examples: [
    {"type": "text", "content": "Exemplo 1: Alternar entre diferentes modos de exibição (texto / imagem / áudio):"},
    {"type": "html", "content": "<div style='display:flex;align-items:center;gap:10px;padding:15px;background:#f2f2f2;border-radius:8px;width:max-content;font-family:Poppins,sans-serif;'><label style='font-weight:500;'>Modo de exibição:</label><button style='background:#fff;color:#333;border:1px solid #ccc;border-radius:6px;padding:8px 16px;cursor:pointer;'>📝 Texto</button><button style='background:#fff;color:#333;border:1px solid #ccc;border-radius:6px;padding:8px 16px;cursor:pointer;'>🖼️ Imagem</button><button style='background:#333;color:#fff;border:none;border-radius:6px;padding:8px 16px;cursor:pointer;'>🔊 Áudio</button></div>"},
    {"type": "text", "content": "Exemplo 2: Controle de volume e narração acessível:"},
    {"type": "html", "content": "<div style='display:flex;align-items:center;gap:12px;padding:15px;background:#eaf3ff;border-radius:8px;font-family:Poppins,sans-serif;'><label for='volume' style='font-weight:500;'>🔊 Volume:</label><input type='range' id='volume' name='volume' min='0' max='100' value='70' style='width:150px;cursor:pointer;'><button style='background:#333;color:#fff;border:none;border-radius:6px;padding:8px 16px;cursor:pointer;'>🎙️ Ler texto</button></div>"},
    {"type": "text", "content": "Exemplo 3: Filtro informacional — mostrar ou ocultar elementos complementares:"},
    {"type": "html", "content": "<div style='font-family:Poppins,sans-serif;padding:15px;background:#f9f9f9;border-radius:8px;width:max-content;'><button aria-expanded='false' aria-controls='infoExtra' onclick='this.setAttribute(`aria-expanded`, this.getAttribute(`aria-expanded`)==`true`?`false`:`true`);document.getElementById(`infoExtra`).classList.toggle(`hidden`);' style='background:#333;color:#fff;border:none;border-radius:6px;padding:8px 16px;cursor:pointer;'>👁️ Mostrar detalhes</button><div id='infoExtra' class='hidden' style='margin-top:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:6px;'>Informação adicional exibida quando o botão é ativado.</div></div>"},
    {"type": "text", "content": "Exemplo visual: interface com botões de personalização informacional:"},
    {"type": "image", "src": "../diretriz/imagens/exemplo-tela-botões-informativos.png", "alt": "Interface que permite alternar entre modos de exibição, alterar áudio, alterae legenda, qualidade de vídeo..."}
]
    },
    "interfaces_flexiveis": {
        group: "Customização",
        title: "07 - Interfaces flexíveis",
        description: "Interfaces flexíveis permitem que o usuário personalize tanto a quantidade quanto a disposição dos elementos na tela, além de ajustar funcionalidades conforme suas necessidades e preferências. Essa abordagem é especialmente relevante para pessoas no espectro autista (TEA), pois reconhece que cada indivíduo interage de forma única com sistemas digitais. <br><br>Ao oferecer a possibilidade de adaptação do layout e dos recursos, o site ou aplicação torna-se mais inclusivo, acessível e confortável para diferentes perfis de usuários.",
        skills: "Atenção, leitura, compreensão visual, adaptação a mudanças e organização de informações.",
        why: "Para muitas pessoas com TEA, a previsibilidade e o controle sobre a experiência digital reduzem a ansiedade e aumentam o engajamento. Permitir ajustes na interface possibilita que o usuário adeque o conteúdo e as funcionalidades de forma que se sinta seguro e confortável. <br><br>Além disso, pais, educadores e terapeutas podem configurar a plataforma para atender às necessidades específicas de cada pessoa, personalizando desde elementos visuais até a forma de interação.",
        how: "Personalização de conteúdo: possibilitar que o usuário adicione elementos familiares ou significativos, como fotos pessoais, ícones conhecidos ou personagens preferidos, especialmente úteis para crianças; Controle da complexidade visual: permitir o ajuste da quantidade de elementos exibidos na tela, facilitando a concentração e evitando sobrecarga sensorial; Organização e acompanhamento: incluir recursos para ordenar atividades, salvar progresso e indicar a conclusão de tarefas — recurso essencial para atividades longas ou com múltiplas etapas; Flexibilidade de interação: oferecer diferentes formas de realizar a mesma tarefa (toque, arraste, comando de voz etc.), considerando particularidades do TEA, como dificuldades motoras ou sensoriais; Configurações salvas: permitir que as preferências do usuário sejam armazenadas, garantindo que ele não precise reconfigurar a aplicação a cada uso.",
        examples: [
            { type: "text", content: "Exemplo de layout responsivo (desktop):" },
            { type: "image", src: "../diretriz/imagens/exemplo-site-tela-desktop.png", alt: "Layout de desktop" },
            { type: "text", content: "Exemplo de layout responsivo (mobile):" },
            { type: "image", src: "../diretriz/imagens/exemplo-site-tela-celular.png", alt: "Layout de mobile" }
        ]
    },
    "modo_leitura": {
        group: "Customização",
        title: "08 - Modo de leitura",
        description: "O modo de leitura é um recurso que permite ao usuário focar exclusivamente no conteúdo textual, ocultando elementos visuais desnecessários e minimizando distrações. Esse recurso é especialmente importante em sites e aplicações voltados para atividades que exigem leitura, atenção e compreensão, sendo altamente recomendável para contextos educativos ou informativos, principalmente para pessoas no espectro autista (TEA). <br><br>Quando ativado, o modo de leitura remove menus, banners, anúncios e outros elementos que possam competir pela atenção, exibindo apenas o texto em um formato limpo, com cores suaves e espaçamento adequado. Esse recurso pode ser semelhante ao “modo de impressão”, que também apresenta o conteúdo de forma simplificada e organizada.",
        skills: "Atenção, leitura, compreensão visual, capacidade de manter o foco e adaptação a mudanças ou transições.",
        why: "Pessoas com TEA podem apresentar maior sensibilidade a estímulos visuais e dificuldade em manter a atenção quando há muitos elementos competindo pelo foco na tela. O modo de leitura ajuda a criar um ambiente mais calmo e organizado, reduzindo a sobrecarga sensorial e aumentando a eficiência na absorção das informações. <br><br>Além disso, ele beneficia não apenas o público-alvo, mas qualquer pessoa que precise ler textos longos sem distrações, como estudantes, pesquisadores e profissionais.",
        how: "Ativação simples: incluir um botão ou atalho de teclado para ativar e desativar rapidamente o modo de leitura.; Ajustes de personalização: permitir a alteração do tamanho e do tipo da fonte, do espaçamento entre linhas e das margens para facilitar a leitura.; Opções visuais: incluir modos de contraste (alto contraste, modo escuro, modo sépia) para atender diferentes necessidades visuais.; Modo de impressão integrado: permitir que o mesmo layout limpo seja usado tanto para leitura quanto para impressão, garantindo que o texto seja impresso sem elementos irrelevantes.; Configurações persistentes: salvar as preferências do usuário para que, ao retornar ao site ou aplicação, ele encontre o ambiente configurado conforme sua necessidade.; Compatibilidade com leitores de tela: garantir que o modo de leitura seja acessível também para usuários que utilizam tecnologias assistivas.",
        examples: [
        { "type": "text", "content": "Exemplo de botão 'Modo de Leitura':" },
        { "type": "image", "src": "../diretriz/imagens/icons8-leitura-50.png", "alt": "Botão Modo de Leitura" },
        { "type": "text", "content": "Exemplo de como a página fica antes de ativar o modo de leitura (com elementos distrativos):" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-modo leitura-desativado.png", "alt": "Página com distrações visuais" },
        { "type": "text", "content": "Exemplo de como a página fica após ativar o modo de leitura (layout limpo):" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-modo de leitura-ativado.png", "alt": "Página limpa no modo de leitura" },
        { "type": "text", "content": "Exemplo de opções de personalização no modo de leitura:" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-config-modo-leitura.png", "alt": "Configurações do modo leitura" }
    ]
    },
    "engajamento": {
        group: "Engajamento",
        title: "09 - Eliminar Distrações",
        description: "Evitar distrações visuais e sonoras é essencial para criar interfaces acessíveis, especialmente para pessoas no espectro autista (TEA). Elementos que piscam, brilham, se movem constantemente ou produzem sons automáticos podem causar desconforto, ansiedade e dificultar a concentração no conteúdo principal da tela. Em interfaces voltadas para o público com TEA, a clareza, a previsibilidade e a simplicidade visual são fatores determinantes para uma boa experiência. <br><br>Por isso, é fundamental reduzir estímulos desnecessários e, sempre que tais elementos forem indispensáveis, oferecer opções para desativá-los.",
        skills: "Atenção, foco, leitura, processamento visual e compreensão do conteúdo.",
        why: "Pessoas com TEA podem apresentar maior sensibilidade sensorial e dificuldades em filtrar estímulos irrelevantes, o que torna a presença de elementos dinâmicos ou caóticos um obstáculo significativo à compreensão e ao engajamento. Fundos complexos, padrões visuais exagerados, ícones piscando e sons automáticos podem gerar sobrecarga cognitiva e sensorial. <br><br>Ao reduzir distrações, o design favorece o foco, o conforto visual e a interpretação correta das informações — benefícios que se estendem também a outros usuários, como pessoas com TDAH, dislexia ou simplesmente aquelas que preferem uma experiência mais limpa e objetiva.",
        how: "Evite estímulos desnecessários: reduza o uso de animações, transições rápidas, brilhos intensos e efeitos sonoros automáticos.; Foco no essencial: destaque as informações principais da tela, utilizando hierarquia visual (como contraste, tamanho e espaçamento) para guiar o olhar do usuário.; Cuidado com o design de fundo: prefira fundos neutros e sem texturas complexas, mantenha contraste equilibrado entre texto e fundo para facilitar a leitura.; Controle de mídia: caso haja sons, vídeos ou animações automáticas, ofereça controles visíveis para pausar, silenciar ou desativar.; Uso de fontes legíveis: evite fontes decorativas ou de difícil leitura.; utilize tipografias simples e consistentes.; Espaçamento e organização: mantenha margens amplas e layout limpo, evitando sobreposição de elementos e excesso de informações em uma única tela.; Teste com usuários reais: sempre que possível, valide o design com pessoas no espectro autista para identificar possíveis distrações que o desenvolvedor possa não perceber.",
        examples: [
        { "type": "text", "content": "Exemplo de botão para silenciar sons automáticos:" },
        { "type": "image", "src": "../diretriz/imagens/icons8-silencioso-50.png", "alt": "Ícone de casa representando a página inicial" },
        { "type": "text", "content": "Exemplo: Página com excesso de animações e elementos piscando (evitar):" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-tela-poluida.png", "alt": "Interface com excesso de estímulos visuais" },
        { "type": "text", "content": "Exemplo: Página simplificada, sem animações desnecessárias:" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-tela-limpa.png", "alt": "Interface limpa" },
    ]
    },
    "Interface Minimalista": {
        group: "Engajamento",
        title: "10 - Interface Minimalista",
        description: "Uma interface minimalista busca apresentar apenas os elementos, funcionalidades e informações essenciais para a tarefa atual. Essa abordagem reduz a complexidade visual e cognitiva, favorecendo a concentração, a previsibilidade e a compreensão do conteúdo — fatores especialmente importantes para pessoas no espectro autista (TEA). O minimalismo no design não significa ausência de conteúdo, mas sim a organização intencional dos elementos, eliminando o que é desnecessário e mantendo o foco naquilo que realmente importa. <br><br>Assim, o usuário consegue navegar com mais tranquilidade, sem sobrecarga sensorial ou distrações que dificultem o entendimento.",
        skills: "Atenção, memorização, leitura, resolução de problemas, compreensão verbal ou linguística, compreensão visual e foco na execução de tarefas.",
        why: "Pessoas com TEA podem se sentir sobrecarregadas, ansiosas ou confusas diante de telas muito carregadas de informações. Interfaces densas, com muitos ícones, menus ou instruções simultâneas, dificultam o foco e a continuidade das ações. <br><br>Além disso, a dificuldade em reter instruções apresentadas fora de contexto pode causar frustração e perda de engajamento. Ao adotar um design minimalista, o desenvolvedor cria um ambiente mais previsível, limpo e confortável, permitindo que o usuário se concentre na tarefa principal sem distrações ou confusões visuais.",
        how: "Apresente apenas o essencial: exiba na tela somente as informações e funcionalidades necessárias para a tarefa atual. Evite sobrecarregar o usuário com opções ou instruções irrelevantes.; Divida tarefas complexas: se uma atividade exigir várias etapas, apresente-as em sequência, uma de cada vez, permitindo que o usuário mantenha o foco e perceba o progresso. Organize o layout com clareza: mantenha margens amplas, hierarquia visual clara e espaçamento entre elementos. Use ícones simples e textos diretos.; Avalie cada recurso: questione se todos os botões, menus ou animações são realmente necessários. Remova o que não contribui diretamente para a experiência do usuário.; Evite sobrecarga sensorial: reduza o uso de cores fortes, contrastes excessivos ou elementos que chamem a atenção desnecessariamente.; Promova consistência visual: mantenha o mesmo padrão de design (posicionamento, cores, tipografia) em todas as telas para criar familiaridade e previsibilidade.; Apoie a memória e o entendimento: se instruções forem necessárias, mantenha-as visíveis durante a execução da tarefa ou permita que o usuário possa revisitá-las facilmente.",
        examples: [
        { "type": "text", "content": "Exemplo de página minimalista com apenas título, texto e um botão essencial:" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-tela-limpa-simples.png", "alt": "Página com design minimalista" },

        { "type": "text", "content": "Exemplo de botão simples e direto, sem efeitos ou ornamentos:" },
        { "type": "html", "content": "<button style='padding:10px 20px; background:#4c8bf5; color:white; border:none; border-radius:6px; font-family:Poppins;'>Continuar</button>" },

        { "type": "text", "content": "Exemplo de layout com margens amplas e espaçamento organizado:" },
        { "type": "image", "src": "https://i.pinimg.com/736x/d6/d5/0b/d6d50bd79dee55fb99235b1caa5bba97.jpg", "alt": "Layout espaçado e limpo" },
    ]
    },
    "Organização Visual": {
        group: "Engajamento",
        title: "11 - Organização Visual",
        description: "Oferecer instruções e orientações objetivas é essencial para que o usuário compreenda o propósito e o funcionamento das tarefas apresentadas em uma interface. Instruções bem estruturadas ajudam o usuário a entender o que deve ser feito, de que forma e com qual objetivo — promovendo motivação, engajamento e confiança durante a interação com o sistema. Em interfaces voltadas para pessoas no espectro autista (TEA), a clareza e previsibilidade são fundamentais. Indicações confusas, linguagem ambígua ou a ausência de orientações podem gerar frustração, insegurança e desistência da tarefa. <br><br>Por isso, é importante que cada função, botão ou fluxo dentro da aplicação seja acompanhado de explicações simples, visuais e consistentes, permitindo que o usuário se sinta amparado e autônomo.",
        skills: "Resolução de problemas, memorização, atenção, leitura, compreensão verbal e linguística.",
        why: "Pessoas com TEA podem apresentar dificuldades na interpretação de instruções implícitas ou subjetivas. Quando uma interface não explica claramente o que se espera do usuário, isso pode gerar ansiedade e reduzir o engajamento. Instruções claras ajudam a construir uma rotina de uso previsível, permitindo que o usuário compreenda cada etapa do processo sem se sentir sobrecarregado. Essa prática é especialmente útil em aplicações educativas, colaborativas ou comunicacionais, em que a interação e a compreensão mútua são essenciais. <br><br>Além disso, instruções bem formuladas ajudam pais, terapeutas e educadores a orientar o uso da aplicação, fortalecendo o aprendizado e a autonomia do usuário.",
        how: "Seja claro e direto: use frases curtas e linguagem simples, evitando termos técnicos ou ambíguos. Prefira instruções como “clique no botão verde para continuar” em vez de “avance para a próxima etapa”.; Use recursos visuais de apoio: ícones, setas, ilustrações e vídeos explicativos ajudam na compreensão e tornam as instruções mais acessíveis.; Apresente as instruções no contexto certo: posicione orientações próximas aos elementos interativos (botões, formulários, menus) ou use caixas de dica (“tooltips”) que apareçam no momento da ação.; Ofereça uma visão geral da tarefa: utilize tabelas de índice, legendas ou resumos para orientar o usuário em conteúdos longos ou etapas sequenciais.; Incentive o engajamento e a comunicação: em aplicações colaborativas, utilize feedbacks positivos, mensagens de incentivo e recompensas simbólicas (como ícones de conquista) para manter o interesse do usuário.; Apoie-se em múltiplas linguagens: combine texto, imagens e sons para reforçar o significado das instruções, especialmente para crianças e adolescentes com TEA. Permita revisitar instruções: ofereça a opção de reexibir orientações sempre que necessário, sem penalizar o usuário por esquecer ou precisar de reforço.",
        examples: [
        { "type": "text", "content": "Dica para criação de uma boa página:" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-dica1.png", "alt": "dicas para uma tela minimalista" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-dica2.png", "alt": "dicas para uma tela minimalista" },
        { "type": "image", "src": "../diretriz/imagens/exemplo-dica3.png", "alt": "dicas para uma tela minimalista" }
    ]
    },
    "Forneça Instruções Claras": {
        group: "Engajamento",
        title: "12 - Forneça Instruções Claras",
        description: "Uma boa organização visual é essencial para garantir que o usuário compreenda facilmente as informações exibidas na tela. O uso adequado de espaços em branco (ou “respiro visual”) entre os elementos da página ajuda a separar conteúdos distintos, agrupar informações relacionadas e direcionar a atenção do usuário para o que realmente importa. <br><br>O espaçamento, aliado à hierarquia visual e ao alinhamento, contribui para reduzir o esforço cognitivo exigido na interpretação da interface. Uma página bem organizada transmite ordem, previsibilidade e conforto visual — fatores fundamentais para pessoas no espectro autista (TEA), que podem se sentir sobrecarregadas diante de interfaces densas ou desorganizadas.",
        skills: "Atenção, memorização, leitura, compreensão visual e foco.",
        why: "Mesmo que uma interface seja simples, a falta de espaçamento entre elementos pode causar confusão e dificultar a leitura e a navegação. Quando blocos de texto, botões ou imagens estão muito próximos, o cérebro precisa de mais esforço para distinguir onde um conteúdo termina e outro começa. Para pessoas com TEA, que frequentemente possuem sensibilidade a estímulos visuais e dificuldade em filtrar informações irrelevantes, o uso inadequado de espaçamento pode gerar ansiedade e distração. <br><br>Ao utilizar folgas visuais e organização lógica dos elementos, o designer cria uma estrutura mais previsível e agradável, facilitando o foco, a memorização e a compreensão da interface.",
        how: "Utilize espaços em branco intencionalmente: entre blocos de conteúdo distintos, reserve áreas de respiro visual para indicar separação e permitir que o olhar “descanso” entre seções.; Agrupe informações relacionadas: elementos que pertencem ao mesmo grupo (como rótulos e campos de formulário) devem estar próximos, transmitindo relação sem causar confusão visual.; Mantenha alinhamento consistente: use grades (grids) e margens uniformes para garantir harmonia e previsibilidade na disposição dos elementos.; Priorize o conteúdo principal: o espaço em branco pode ser usado para destacar áreas de maior importância, conduzindo o olhar do usuário ao foco da tela.; Evite poluição visual: não preencha cada espaço disponível com imagens, ícones ou textos. A ausência de elementos também comunica, orientando a navegação e aumentando a legibilidade.; Aplique hierarquia visual: combine espaçamento com tamanhos de fonte, cores e contrastes para guiar o usuário na ordem de leitura e importância das informações.;",
        examples: [
    {
        "type": "text",
        "content": "Exemplo de instruções curtas e diretas apresentadas antes de um formulário:"
    },
    {
        "type": "image",
        "src": "../diretriz/imagens/exemplo-orientação.png",
        "alt": "Bloco de instruções simples acima de um formulário"
    },

    {
        "type": "text",
        "content": "Exemplo de instruções divididas em passos claros para facilitar o entendimento:"
    },
    {
        "type": "image",
        "src": "../diretriz/imagens/exmplo-4passos.png",
        "alt": "Lista de instruções passo a passo"
    },

    {
        "type": "text",
        "content": "Exemplo de instruções para a interface:"
    },
    {
        "type": "image",
        "src": "../diretriz/imagens/exemplo-passo a passo.png",
        "alt": "Painel lateral com instruções de uso"
    }
]
    },
    "Múltiplos Formatos de Comunicação": {
        group: "Representação Redundante",
        title: "13 - Múltiplos Formatos de Comunicação",
        description: "Apresentar o conteúdo em diferentes formatos — como texto, imagem, áudio e vídeo — é essencial para tornar a informação mais acessível e significativa a todos os usuários, especialmente às pessoas no espectro autista (TEA). Essa abordagem reconhece que cada pessoa processa informações de forma única e que nem todos compreendem bem conteúdos puramente textuais. <br><br>Oferecer múltiplas representações (visuais, sonoras e textuais) aumenta as chances de entendimento, facilita a memorização e promove uma experiência mais inclusiva, interativa e engajante. Além disso, ajuda o usuário a reforçar o aprendizado ao permitir que a mesma informação seja percebida por diferentes canais sensoriais.",
        skills: "Resolução de problemas, memorização, atenção, leitura, compreensão verbal e visual, integração sensorial.",
        why: "Muitas pessoas com TEA apresentam preferências específicas na forma de compreender e processar informações. Algumas têm mais facilidade com estímulos visuais (como imagens, ícones e cores), enquanto outras respondem melhor a sons, narrações ou vídeos. Já certas pessoas podem se beneficiar da leitura textual para revisar e consolidar o conteúdo. <br><br>O uso de múltiplos formatos também ajuda a reduzir barreiras de comunicação, tornando o conteúdo mais inclusivo e acessível. <br><br>Para crianças em fase de alfabetização, por exemplo, o uso combinado de texto, som e imagem contribui para o desenvolvimento linguístico, o reconhecimento de palavras e a ampliação do vocabulário. Além disso, representações multimodais aumentam a motivação e o engajamento do usuário, tornando a experiência mais agradável e interativa.",
        how: "Combine diferentes mídias: apresente informações em texto acompanhadas de recursos visuais (ícones, imagens, diagramas ou vídeos) e auditivos (narrações ou sons descritivos).; Garanta proximidade entre os formatos: posicione as imagens, sons e vídeos próximos ao texto correspondente para facilitar a associação entre os elementos.; Use ícones e símbolos com função informativa: ícones universais e figuras familiares ajudam o usuário a reconhecer ações ou significados rapidamente, reduzindo o esforço cognitivo.; Forneça alternativas equivalentes: caso um conteúdo seja apresentado em áudio, ofereça também a transcrição textual; se for visual, descreva-o em palavras para garantir a compreensão.; Evite sobrecarga sensorial: use os formatos de forma equilibrada, sem excesso de estímulos que possam distrair ou confundir o usuário.; Adapte o tom e o ritmo das mídias: narrações devem ser pausadas e claras, com linguagem acessível. Vídeos e animações devem ser curtos e objetivos.; Estimule a interação multimodal: permita que o usuário escolha o formato de conteúdo mais confortável para ele (por exemplo, ativar ou desativar áudio, legenda ou imagens ilustrativas).",
        examples: [
    {
        "type": "text",
        "content": "Exemplo de apresentação da mesma ferramenta em diferentes formatos: texto, imagem e até áudio."
    },
   
    {
        "type": "image",
        "src": "../diretriz/imagens/exemplo-navbar-texto.jpg",
        "alt": "Imagem representando a ação de clicar no botão para iniciar"
    },
     { 
        type: "text", 
        content: "Exemplo de conteúdo educativo com apoio visual (texto + áudio explicativa):" 
    },
    { 
        type: "image", 
        src: "../diretriz/imagens/exemplo-audio-texto.jpeg", 
        alt: "Texto explicativo acompanhado de imagem ilustrativa que reforça o conteúdo" 
    },

    { 
        type: "text", 
        content: "Exemplo de vídeo com legenda e narração acessível:" 
    },
    { 
        type: "image", 
        src: "../diretriz/imagens/exemplo-video-legenda.png", 
        alt: "Tela de vídeo educativo com legendas ativadas e controle de áudio visível" 
    },

    { 
        type: "text", 
        content: "Exemplo de alternativa textual para conteúdo em áudio (transcrição):" 
    },
    { 
        type: "image", 
        src: "../diretriz/imagens/exemplo-descrição-audio.jpeg", 
        alt: "Conteúdo de áudio acompanhado de transcrição textual equivalente" 
    },
]
    },
    "Equivalentes Textuais": {
        group: "Representação Redundante",
        title: "14 - Equivalentes Textuais",
        description: "Garantir que símbolos, pictogramas e ícones possuam equivalentes textuais próximos é essencial para tornar as interfaces mais compreensíveis e acessíveis a todos os usuários, especialmente às pessoas com Transtorno do Espectro Autista (TEA). A presença de texto explicativo auxilia na compreensão do significado dos ícones, reduz ambiguidades e contribui para o enriquecimento do vocabulário e da associação entre imagem e palavra. <br><br>Em interfaces digitais, os ícones e símbolos são frequentemente usados para representar ações, estados ou informações, mas seu significado pode variar de acordo com o contexto cultural, visual ou linguístico. Por isso, é importante complementar essas representações com descrições textuais claras, de modo que o usuário compreenda facilmente sua função e possa reconhecer o mesmo símbolo em outras plataformas.",
        skills: "Memorização, atenção, leitura, compreensão verbal e linguística, compreensão visual.",
        why: "Muitas pessoas com TEA podem não interpretar metáforas visuais ou ícones abstratos da mesma forma que outros usuários. Um ícone que representa uma 'lixeira', por exemplo, pode não ser imediatamente associado à função “excluir”. Ao incluir uma legenda textual próxima ao símbolo, o designer facilita o entendimento imediato e reduz a carga cognitiva necessária para decifrar o significado do elemento. <br><br>Além disso, o uso de equivalentes textuais promove o aprendizado associativo — o usuário aprende a relacionar o ícone ao termo correspondente, o que ajuda no desenvolvimento da linguagem e da autonomia digital. Isso é especialmente útil em contextos educacionais e terapêuticos voltados a crianças e adolescentes com TEA. <br><br>Outro benefício é a acessibilidade universal: descrições textuais bem estruturadas também beneficiam pessoas com deficiências visuais (que utilizam leitores de tela) e usuários em contextos onde o conteúdo visual não pode ser exibido corretamente.",
        how: "Inclua texto próximo aos ícones: sempre que possível, adicione rótulos textuais ou legendas curtas ao lado ou abaixo dos símbolos para descrever sua função.; Evite metáforas visuais ambíguas: prefira ícones simples, diretos e universais, que tenham correspondência semântica clara com o texto que os acompanha.; Forneça alternativas de ajuda: insira dicas visuais (tooltips), descrições contextuais ou seções de ajuda que expliquem o significado de ícones e termos específicos.; Padronize o uso dos ícones: mantenha consistência visual e funcional entre os símbolos e suas legendas ao longo de toda a aplicação.; Apoie tecnologias assistivas: utilize textos alternativos (atributo alt em imagens e ícones) e rótulos acessíveis (como aria-label em botões) para garantir compatibilidade com leitores de tela.; Reforce o aprendizado visual: relacione ícones com palavras conhecidas pelo usuário, permitindo que ele reconheça padrões e desenvolva seu repertório linguístico e cognitivo.; Ajuste o contraste e tamanho: garanta que os ícones e seus textos sejam legíveis, com espaçamento adequado e contraste suficiente entre fundo e elemento.",
        examples: [
    { 
        "type": "text", 
        "content": "Exemplo de interface que usa corretamente equivalentes textuais e ícones:" 
    },
    { 
        "type": "image", 
        "src": "../diretriz/imagens/exemplo-navbar-texto-icone.jpg", 
        "alt": "Ícone que acompanha a ação do texto texto Excluir atividade" 
    },
    { 
        "type": "text", 
        "content": "Exemplo de ícones para usar em equivalencia textuais em interfaces:" 
    },
    { 
        "type": "image", 
        "src": "../diretriz/imagens/exemplos-icones-usar-em-tela.jpg", 
        "alt": "Ícones de disquete e texto que pode ser usados na interface" 
    },
    { 
        "type": "text", 
        "content": "Exemplos de interfaces que usa corretamente equivalentes textuais, cores e ícones para facilitar a interpretação da mensagem para o usuário:" 
    },
    { 
        "type": "image", 
        "src": "../diretriz/imagens/exemplo-alerta-intrface.jpg", 
        "alt": "Ícone de alerta acompanhado do texto Erro na atividade" 
    }
]
    },
    "Legendas e Recursos em Áudio": {
        group: "Representação Redundante",
        title: "15 - Legendas e Recursos em Áudio",
        description: "Oferecer legendas e instruções em áudio é uma prática essencial para promover acessibilidade e inclusão em interfaces digitais. No caso de pessoas com Transtorno do Espectro Autista (TEA), o uso de múltiplos meios de comunicação — como texto, som e imagem — pode facilitar a compreensão, a atenção e o engajamento com o conteúdo. <br><br>No entanto, é importante garantir que o áudio não seja a única forma de representação da informação. O ideal é que o usuário possa escolher como deseja consumir o conteúdo: ouvindo, lendo ou visualizando. Essa flexibilidade permite atender diferentes perfis cognitivos e sensoriais, já que algumas pessoas podem preferir estímulos auditivos, enquanto outras podem se sentir desconfortáveis com sons automáticos ou repetitivos.",
        skills: "Memorização, atenção, leitura, compreensão verbal e linguística, compreensão visual.",
        why: "Pessoas com TEA podem apresentar diferentes níveis de sensibilidade sensorial e preferências de aprendizado. Algumas têm melhor desempenho com instruções narradas, enquanto outras compreendem melhor com o apoio de texto ou imagens. As legendas e os áudios ajudam a reforçar a mensagem, tornando o conteúdo mais claro e acessível. <br><br>Além disso, as legendas beneficiam não apenas pessoas com TEA, mas também usuários com deficiência auditiva, dislexia ou dificuldades de leitura, e até mesmo pessoas que acessam o conteúdo em ambientes ruidosos ou sem possibilidade de ativar o som. Já os recursos de narração e leitura em voz alta favorecem usuários com deficiência visual ou dificuldades cognitivas, garantindo inclusão e equidade no acesso à informação.",
        how: "Ofereça legendas sincronizadas para vídeos, animações e tutoriais interativos, garantindo que o texto corresponda fielmente ao áudio.; Forneça narração ou leitura em voz alta para textos e instruções importantes, permitindo que o usuário ative ou desative essa função conforme sua preferência.; Evite sons automáticos: nunca reproduza áudio sem o consentimento do usuário. Inclua controles para ativar, pausar, ajustar volume e escolher a voz da narração.; Mantenha consistência de linguagem: utilize vozes claras, com boa dicção, ritmo moderado e sem ruídos de fundo.; Combine mídias: sempre que houver áudio, ofereça também o texto correspondente e, quando possível, recursos visuais (ícones, imagens ou vídeos explicativos).; Inclua descrições sonoras (audiodescrição): para elementos visuais importantes, como botões, gráficos ou animações, garantindo que o usuário saiba o que está sendo exibido.; Ofereça tradução em Libras ou avatares sinalizadores, em casos de conteúdos mais complexos ou educacionais, ampliando ainda mais a acessibilidade comunicacional.",
        examples: [
            {
        type: "text",
        content: "Se sua interface tiver vídeos o melhor é coloque legendas sincronizadas e controle de áudio:"
    },
    {
        type: "image",
        src: "../diretriz/imagens/exemplo-legenda-audio.png",
        alt: "Vídeo educativo com legendas ativadas e controles de áudio visíveis"
    },

    {
        type: "text",
        content: "Exemplo de configurações para legendas mais personalizáveis:"
    },
    {
        type: "image",
        src: "../diretriz/imagens/exemplo-confg-legenda.png",
        alt: "Congiguração para legenda textual"
    },

    {
        type: "text",
        content: "Exemplo de app com leitura em voz alta ativável para conteúdo textual:"
    },
    {
        type: "image",
        src: "../diretriz/imagens/exemplo-leitura-voz-alta.jpeg",
        alt: "Texto com botão para ativar ou desativar leitura em voz alta"
    },
        ]
    },
    "Múltiplas Mídias e Representações": {
        group: "Multimídia",
        title: "16 - Múltiplas Mídias e Representações",
        description: "Apresentar informações em diferentes formatos, como texto, imagem, áudio e vídeo, é uma estratégia essencial para promover acessibilidade, engajamento e compreensão em interfaces digitais voltadas a pessoas com Transtorno do Espectro Autista (TEA). Essa diversidade de mídias ajuda a adaptar o conteúdo às diferentes formas de aprendizado e processamento sensorial, tornando a comunicação mais clara, inclusiva e atraente. <br><br>O uso de representações visuais e auditivas para ilustrar conceitos, explicar instruções ou reforçar mensagens textuais favorece a assimilação de informações, amplia o vocabulário e melhora o foco e a memorização. Textos simples acompanhados de imagens, ícones, gráficos ou narrações tornam o conteúdo mais acessível, especialmente para crianças ou pessoas com baixo letramento, dificuldades de leitura ou compreensão verbal.",
        skills: "Memorização, atenção, leitura, compreensão verbal e linguística, compreensão visual, integração sensorial.",
        why: "Pessoas com TEA podem apresentar diferentes estilos de processamento de informação — algumas compreendem melhor conteúdos visuais, enquanto outras têm maior facilidade com estímulos auditivos ou experiências práticas. Ao combinar texto, som e imagem, o designer promove redundância positiva da informação, facilitando o aprendizado e evitando que o usuário dependa de apenas um canal sensorial para entender o conteúdo. <br><br>Além disso, múltiplas mídias tornam o site ou aplicativo mais envolvente e lúdico, o que é especialmente útil em contextos educacionais ou terapêuticos. Essa abordagem também beneficia outros públicos, como pessoas com deficiência auditiva, visual, dislexia ou baixa alfabetização, contribuindo para um design mais universal e acessível.",
        how: "Combine texto, imagem e áudio em conteúdos importantes, permitindo que o usuário escolha o modo de consumo (por exemplo, ler ou ouvir uma explicação).; Inclua vídeos curtos e ilustrações explicativas para apoiar conceitos abstratos ou instruções complexas.; Use ícones e avatares para representar ações, personagens ou instruções, tornando o ambiente mais familiar e convidativo, principalmente para crianças.; Forneça equivalentes alternativos: adicione legendas para vídeos, transcrições para áudios e descrições textuais (alt text) para imagens.; Associe ícones a palavras e sons — por exemplo, ao clicar em um botão com o ícone de “play”, uma voz pode dizer “Iniciar vídeo”.; Evite sobrecarga sensorial: não exiba vídeos automáticos, sons altos ou animações piscantes. Ofereça controles de volume, reprodução e contraste.; Use elementos visuais consistentes, com cores suaves e símbolos claros, para evitar confusão e favorecer o reconhecimento rápido.",
        examples: [
            {
        type: "text",
        content: "Exemplo de conteúdo apresentado em texto, imagem e áudio:"
    },
    {
        type: "image",
        src: "../diretriz/imagens/exemplo-imagem-texto-audio.png",
        alt: "Informação apresentada em texto, imagem ilustrativa e opção de áudio"
    },

    {
        type: "text",
        content: "Exemplo de instrução apoiada por ilustração explicativa:"
    },
    {
        type: "image",
        src: "../diretriz/imagens/exemplo-ilustrações.jpg",
        alt: "Instrução textual acompanhada de ilustração que explica a ação"
    }
        ]
    },
    "Ampliação de Imagens": {
        group: "Multimídia",
        title: "17 - Ampliação de Imagens",
        description: "Permitir que as imagens sejam ampliadas sem perda de qualidade é essencial para garantir acessibilidade, clareza e compreensão visual em interfaces digitais. Esse recurso beneficia especialmente pessoas com Transtorno do Espectro Autista (TEA), deficiências visuais leves, dificuldades de foco ou atenção a detalhes, possibilitando uma observação mais cuidadosa e significativa dos elementos visuais. <br><br>O recurso de ampliação também ajuda a destacar informações relevantes, como ícones pequenos, textos inseridos em imagens, gráficos, mapas ou ilustrações informativas. Quando o usuário pode ampliar uma imagem, ele ganha autonomia para explorar o conteúdo no próprio ritmo, reforçando a compreensão e evitando a frustração causada por elementos visuais pouco nítidos ou inacessíveis.",
        skills: "Compreensão visual, atenção a detalhes, percepção espacial, autonomia na navegação.",
        why: "Nem todos os usuários percebem e processam imagens da mesma forma. Pessoas com TEA, por exemplo, podem ter maior sensibilidade visual ou necessitar de mais tempo para identificar padrões, símbolos e significados em uma imagem. Ao oferecer a possibilidade de ampliar, o designer cria um ambiente mais inclusivo, onde o usuário pode analisar elementos visuais complexos — como gráficos, figuras explicativas ou interfaces ricas em ícones — com mais conforto. <br><br>Além disso, imagens que contêm textos embutidos, legendas ou pequenas instruções visuais devem permitir ampliação para preservar a legibilidade. A falta desse recurso pode comprometer a compreensão de informações críticas e prejudicar a experiência do usuário.",
        how: "Forneça imagens em alta resolução, que possam ser ampliadas sem distorção ou perda de nitidez.; Utilize zoom interativo, permitindo que o usuário clique, toque ou use gestos de pinça para ampliar imagens em dispositivos móveis.; Garanta bom contraste de cores e legibilidade, especialmente em imagens com texto sobreposto.; Evite compactar excessivamente imagens importantes, pois isso pode gerar borrões ou perda de detalhes quando ampliadas.; Forneça descrições alternativas (alt text) que expliquem o conteúdo visual da imagem, para casos em que o zoom não seja suficiente ou quando o usuário utilizar leitor de tela.; Ofereça um botão de “ver em tamanho maior” próximo à imagem, especialmente em galerias, gráficos e diagramas informativos.; Certifique-se de que o zoom não desorganize o layout, preservando a proporção e a disposição dos elementos da interface.",
        examples: [
            {
        type: "text",
        content: "Exemplo de imagem ampliada sem perder a qualidade:"
    },
    {
        type: "image",
        src: "../diretriz/imagens/exemplo-ampliar-imagem.webp",
        alt: "Imagem ampliada sem perder a qualidade"
    },

    {
        type: "text",
        content: "Exemplo imagem ampliada com diferentes qualidades de resolução:"
    },
    {
        type: "image",
        src: "../diretriz/imagens/exemplo-ampliacão.jpg",
        alt: "Instrução de diferentes tipos de ampliação"
    }
        ]
    },
    "Evite sons perturbadores": {
        group: "Multimídia",
        title: "18 - Evite sons perturbadores",
        description: "Evite o uso de sons intensos, abruptos ou desagradáveis, como sirenes, alarmes, buzinas, explosões ou fogos de artifício, especialmente em contextos interativos. Esses tipos de sons podem causar incômodo sensorial, distração ou ansiedade em pessoas com Transtorno do Espectro Autista (TEA), comprometendo a concentração e o conforto durante a navegação ou uso da aplicação. <br><br>A sensibilidade auditiva é uma característica comum entre pessoas com TEA — certos sons podem ser percebidos de forma amplificada, gerando sobrecarga sensorial e reações como irritação, medo, desconforto físico ou até evasão da atividade. Assim, o cuidado com o design sonoro é essencial para promover bem-estar, atenção e engajamento positivo.",
        skills: "Atenção, Integração sensorial, Autorregulação, Concentração.",
        why: "O som é um elemento poderoso de comunicação, mas também pode se tornar um gatilho sensorial negativo se for utilizado de forma inadequada. Em ambientes digitais voltados para o público com TEA — especialmente crianças — ruídos fortes, repentinos ou de alta frequência podem causar estresse, desorientação e perda de interesse pela atividade. <br><br>Além disso, sons desagradáveis podem interferir na atenção seletiva, dificultando o processamento de informações importantes. Em contrapartida, sons suaves, previsíveis e harmônicos podem estimular o foco, a calma e o prazer na interação. Portanto, o controle do ambiente sonoro é parte fundamental da acessibilidade sensorial e emocional.",
        how: "Evite sons abruptos, estridentes ou contínuos, como alarmes, sirenes, buzinas e efeitos explosivos.; Prefira sons suaves e naturais, como toques leves, notas musicais curtas ou sons ambiente (ex: água corrente, pássaros, vento).; Use o som de forma funcional e previsível, associando-o a ações específicas (ex: clique, envio, confirmação).; Ofereça controle total sobre o áudio, permitindo que o usuário ajuste o volume, pause ou desative sons a qualquer momento.; Evite sons em looping ou que iniciem automaticamente, a menos que sejam essenciais à experiência.; Utilize feedbacks sonoros breves e consistentes, para reforçar interações de forma positiva, sem gerar distração.; Teste o design sonoro com diferentes perfis de usuários, incluindo pessoas com TEA, para avaliar se os sons são confortáveis e não causam desconforto.",
        examples: [
            { type: "text", content: "Instruções de como usar sons corretamente:" },
            { type: "image", src: "../diretriz/imagens/exemplo-dica-sons.png", alt: "Dicas de como usar sons correntamente" }, 

            { type: "text", content: "Instruções de como NÃO usar sons:" },
            { type: "image", src: "../diretriz/imagens/exemplo-naoUsar-son.png", alt: "Dicas de  não usar sons" }
        ]
    },
    "Instruções de interação": {
        group: "Visibilidade do Estado do Sistema",
        title: "19 - Instruções de interação",
        description: "Forneça instruções claras e acessíveis sobre como interagir com os elementos da interface e apresente mensagens de erro objetivas e compreensíveis, acompanhadas de orientações sobre como corrigi-los. <br><br>Elementos interativos — como botões, campos de formulário, menus e controles — devem indicar de forma explícita como devem ser utilizados e o que se espera do usuário. Isso inclui explicar o formato das informações solicitadas (por exemplo, data, e-mail, número de telefone) e sinalizar eventuais mudanças de estado nos componentes da interface (como um botão que foi desativado ou uma ação concluída). <br>Além disso, mensagens de erro devem ser apresentadas imediatamente, com linguagem simples, positiva e instrutiva, ajudando o usuário a compreender o problema e a corrigi-lo sem frustração.",
        skills: "Resolução de problemas, Atenção, Compreensão verbal e linguística, Compreensão visual, Lidar com mudanças ou transições, Autorregulação emocional.",
        why: "Durante a interação com uma aplicação ou site, situações de erro ou falha podem causar frustração, ansiedade e desmotivação, especialmente para pessoas com Transtorno do Espectro Autista (TEA). Isso ocorre porque o erro pode representar uma quebra na previsibilidade da tarefa, algo que muitas pessoas com TEA valorizam e necessitam para se sentirem seguras. <br><br>Mensagens de erro vagas, como “Algo deu errado”, ou instruções pouco claras podem agravar o estresse e fazer com que o usuário desista da atividade. Já instruções precisas e feedbacks adequados ajudam a manter o controle emocional, reforçam a autoconfiança e facilitam a continuidade da tarefa. <br><br>Da mesma forma, mudanças no estado de um elemento (por exemplo, um botão que muda de cor, se desativa ou é substituído por outro) precisam ser comunicadas de forma perceptível, por meio de indicações visuais, sonoras ou textuais. Isso evita confusão e mantém a pessoa orientada dentro do fluxo de interação.",
        how: "Descreva claramente como interagir com cada elemento. Em formulários, indique o formato esperado (ex: “Digite seu e-mail no formato exemplo@dominio.com”).; Use rótulos (labels) e instruções de apoio. Posicione-os próximos ao campo correspondente para facilitar a compreensão.; Forneça feedbacks imediatos. Assim que um erro ocorrer, exiba uma mensagem clara explicando o motivo e como corrigi-lo (ex: “A senha deve conter ao menos 8 caracteres”).; Evite linguagem negativa. Prefira frases construtivas e acolhedoras, como “Verifique o formato do e-mail” em vez de “Erro no campo e-mail”.; Informe mudanças de estado. Se um botão ficar inativo ou uma ação for concluída, sinalize isso visualmente (mudança de cor, ícone de confirmação) e, se possível, com texto ou som.; Inclua instruções de ajuda acessíveis. Podem ser exibidas como dicas flutuantes (tooltips), ícones de “ajuda” ou seções explicativas dentro da aplicação.; Permita correção sem perda de progresso. Caso o usuário erre, mantenha os dados já inseridos para evitar a necessidade de recomeçar a tarefa.; Evite mensagens genéricas. Elas dificultam a identificação do problema e aumentam a frustração.",
        examples: [
            { type: "text", content: "Design Visual Consistente e Claro:" },
            { type: "image", src: "../diretriz/imagens/exemplo-dica-formulario.png", alt: "Exemplo de cores para formulário" },

            { type: "text", content: "Use estados visuais de forma correta para maior entendimento do usuário:" },
            { type: "image", src: "../diretriz/imagens/exemplo-campo-formulario.png", alt: "Exemplo de cores para formulário" },

            { type: "text", content: "Os princípios fundamentais:" },
            { type: "image", src: "../diretriz/imagens/exemplo-principios-formulario.png", alt: "princípios fundamentais para formulário" }
        ]
    },
    "Reverter ações": {
        group: "Visibilidade do Estado do Sistema",
        title: "20 - Reverter ações",
        description: "É fundamental que sistemas, sites e aplicações educativas permitam que ações críticas possam ser revertidas, canceladas, desfeitas ou confirmadas antes de serem executadas de forma definitiva. Essa funcionalidade garante que o usuário mantenha controle sobre suas interações, reduzindo a ocorrência de erros e promovendo uma experiência mais segura e previsível. <br><br>Oferecer opções de reversão é especialmente importante para pessoas com Transtorno do Espectro Autista (TEA), pois a previsibilidade e o controle sobre o ambiente digital são fatores essenciais para o conforto, a confiança e a continuidade das atividades.",
        skills: "Resolução de problemas, Atenção, Lidar com mudanças ou transições, Tomada de decisão, Autonomia no uso de interfaces digitais.",
        why: "Permitir que ações sejam desfeitas ou confirmadas é uma das práticas centrais de usabilidade e acessibilidade digital. Pessoas com TEA podem apresentar ansiedade diante de mudanças inesperadas ou dificuldade em lidar com erros irreversíveis, o que pode gerar frustração e levar à interrupção da atividade. <br><br> Ao implementar confirmações e opções de reversão, o sistema oferece uma sensação de segurança e previsibilidade, permitindo que o usuário explore e aprenda sem medo de “quebrar” algo ou perder progresso. Essa autonomia incentiva a exploração confiante da interface e melhora a experiência geral de aprendizado e interação. <br><br> Além disso, o recurso beneficia todos os usuários, não apenas pessoas com TEA — é um exemplo claro de Design Universal, que torna o ambiente digital mais intuitivo e acessível para todos os perfis.",
        how: "Forneça confirmações em ações críticas. Antes de excluir dados, enviar formulários ou realizar alterações permanentes, apresente uma mensagem clara como: (“Tem certeza de que deseja excluir este item?” e ofereça botões como “Cancelar” e “Confirmar”).; Implemente a função “Desfazer”. Em ações rápidas (como editar, excluir ou mover elementos), permita que o usuário reverta a operação com um simples clique, por exemplo: “Item excluído. [Desfazer]”.; Utilize a função “Voltar”. Garanta que o botão de retorno funcione corretamente e leve o usuário à etapa anterior sem perda de dados.; Evite confirmações complexas. As mensagens de confirmação devem ser curtas, diretas e visuais, evitando gerar confusão ou sobrecarga cognitiva.; Inclua feedbacks visuais claros. Use animações suaves, cores neutras e ícones simples para indicar quando uma ação foi desfeita ou revertida com sucesso.; Forneça histórico de ações. Em atividades mais longas, mantenha um registro simples de alterações realizadas, permitindo revisões e correções posteriores.",
        examples: [
            { type: "text", content: "O que é a ação de desfazrer e refazer:" },
            { type: "image", src: "../diretriz/imagens/exemplo-refazer-acao.png", alt: "Como funciona o refazer" },

            { type: "text", content: "Dicas de como fazer os botões acessíveis :" },
            { type: "image", src: "../diretriz/imagens/exemplo-dica-refazer.png", alt: "Dicas de como fazer o refazer" },
        ]
    },
    "Número de tentativas": {
        group: "Visibilidade do Estado do Sistema",
        title: "21 - Número de tentativas",
        description: "Em atividades educativas ou lições interativas, é recomendável que o sistema permita até cinco tentativas para o usuário concluir uma tarefa antes de exibir a resposta correta ou oferecer feedback orientativo. <br><br> Limitar o número de tentativas contribui para manter o engajamento, a motivação e o aprendizado progressivo, evitando a frustração que pode surgir com repetições excessivas. Essa prática é especialmente importante em ambientes digitais voltados a pessoas com Transtorno do Espectro Autista (TEA), pois elas podem apresentar maior sensibilidade a erros ou à imprevisibilidade de resultados.",
        skills: "Resolução de problemas, Atenção, Lidar com mudanças ou transições, Tomada de decisão, Autonomia no aprendizado.",
        why: "Em atividades educativas ou lúdicas, o excesso de tentativas pode gerar cansaço, perda de foco e frustração, especialmente entre pessoas com TEA. Elas podem interpretar o erro como uma falha pessoal ou sentir dificuldade em lidar com a repetição contínua de uma mesma ação sem progresso visível. <br><br> Por outro lado, limitar as tentativas e fornecer feedbacks construtivos e imediatos após cada erro ajuda o usuário a compreender o raciocínio correto e reforça o aprendizado de forma positiva. Essa abordagem incentiva a autoconfiança e a persistência, transformando o erro em uma oportunidade de aprendizado, não em motivo de desânimo. <br><br> Além disso, mostrar a resposta correta após um número razoável de tentativas (como cinco) garante que o processo educativo continue fluido, respeitando o tempo e a forma de aprendizagem de cada indivíduo.",
        how: "Defina um limite de tentativas. Permita até cinco tentativas antes que o sistema apresente a resposta correta ou uma dica mais clara sobre o caminho a seguir.; Ofereça feedbacks progressivos. A cada tentativa incorreta, apresente mensagens de orientação como: (1ª tentativa: “Tente novamente! Observe o detalhe X.” | 3ª tentativa: “Pense em como Y pode influenciar essa resposta.” | 5ª tentativa: “A resposta correta é Z. Veja a explicação abaixo”).; Evite punições. Não utilize sons, cores ou mensagens negativas que possam causar desconforto. Prefira feedbacks positivos e instrutivos.; Permita reiniciar a atividade. Após exibir a resposta, ofereça a opção de refazer o exercício desde o início, fortalecendo o aprendizado e promovendo a autonomia.; Adapte o nível de dificuldade. Em atividades com várias fases, o sistema pode ajustar automaticamente a complexidade com base no desempenho, mantendo o desafio equilibrado e evitando sobrecarga cognitiva.; Mantenha a consistência. Use o mesmo padrão de tentativas e feedbacks em todas as atividades para criar previsibilidade — fator essencial para o conforto e engajamento de pessoas com TEA.",
        examples: [
            { type: "text", content: "Exemplo do uso de tentativas ou chances:" },
            { type: "image", src: "../diretriz/imagens/exemplo-tentativa.png", alt: "Exemplo de tentativas" },

            { type: "text", content: "O que são as tentativas:" },
            { type: "image", src: "../diretriz/imagens/exemplo-dica-tentativa.png", alt: "Exemplo de tentativas" },

            { type: "text", content: "Como fazer isso de forma acessível:" },
            { type: "image", src: "../diretriz/imagens/exemplo-dica-tentativa (2).png", alt: "Exemplo de tentativas" }
        ]
    },
    "Consistência": {
        group: "Reconhecimento e Previsibilidade",
        title: "22 - Consistência",
        description: "Manter a consistência visual e funcional é essencial para garantir que elementos e interações similares produzam resultados previsíveis e coerentes em toda a aplicação. Essa uniformidade facilita a aprendizagem do uso da interface, aumenta a confiança do usuário e reduz a necessidade de reaprendizado a cada nova interação. <br><br>Em ambientes digitais — especialmente aqueles voltados para o público com Transtorno do Espectro Autista (TEA) — a previsibilidade é um fator determinante para o conforto e a continuidade da navegação. Elementos que mudam repentinamente de aparência, posição ou comportamento podem gerar confusão, frustração e perda de foco, prejudicando a experiência do usuário.",
        skills: "Memorização, Compreensão visual, Atenção, Lidar com mudanças ou transições, Aprendizagem por repetição.",
        why: "Pessoas com TEA tendem a valorizar rotinas, padrões e estabilidade, tanto no mundo físico quanto no digital. Quando um botão, um menu ou um controle interativo muda de comportamento inesperadamente, isso pode causar incerteza cognitiva, dificultando a compreensão e a execução de tarefas. <br><br>Manter a consistência em elementos de interface reduz o esforço mental exigido para compreender como interagir com o sistema. Essa previsibilidade também promove autonomia e confiança, pois o usuário passa a reconhecer padrões e antecipar resultados, o que torna a navegação mais fluida e agradável. <br><br>Além disso, a consistência é um princípio básico de usabilidade universal, beneficiando todos os usuários — inclusive aqueles sem TEA — ao garantir padronização, clareza e coerência na experiência de uso.",
        how: "Padronize elementos visuais, Utilize o mesmo estilo de cores, ícones, espaçamento e tipografia para botões, menus, formulários e demais componentes interativos. Por exemplo, se o botão “Salvar” é azul e possui um ícone de disquete, ele deve manter a mesma aparência e função em todas as páginas.; Mantenha comportamentos previsíveis, Elementos que executam ações semelhantes devem sempre reagir da mesma maneira. Um campo de formulário com validação automática, por exemplo, deve exibir mensagens de erro no mesmo formato e local em todas as telas.; Comunique mudanças de contexto, Se um link abrir uma nova aba ou janela, informe o usuário com ícones visuais (como uma seta ou símbolo de nova guia) ou textos complementares, como “abre em nova aba”. Isso evita surpresas e ajuda na compreensão da navegação.; Padronize a navegação, Menus, barras laterais e botões de retorno devem permanecer no mesmo local e seguir a mesma lógica de hierarquia em todas as seções do site ou aplicativo.; Utilize feedbacks consistentes, Mensagens de confirmação, alertas e animações de carregamento devem seguir o mesmo padrão visual e linguístico. Evite usar diferentes estilos ou sons para o mesmo tipo de ação.; Adote um guia de estilo, Documente as cores, tipografias, espaçamentos, ícones e comportamentos dos componentes em um Design System. Isso garante que toda a equipe mantenha a coerência visual e funcional da interface.",
        examples: [
            { type: "text", content: "Exemplo de interface com consistência:" },
            { type: "image", src: "../diretriz/imagens/exemplo-com-consistencia.png", alt: "Interface com consistencia" },
            {
                type: "text",
                content: "Exemplo de interface sem consistência (Evitar):"
            },
            {
                type: "image",
                src: "../diretriz/imagens/exemplo-sem-consistencia.png",
                alt: "Interface sem consistencia"
            },

            {
                type: "text",
                content: "Dicas sobre consistência:"
            },
            {
                type: "image",
                src: "../diretriz/imagens/dicas-consistencia-visual.png",
                alt: "Dicas sobre consistência"
            }
        ]
    },
    "Aparência Clicável": {
        group: "Reconhecimento e Previsibilidade",
        title: "23 - Aparência Clicável",
        description: "Certifique-se de que ícones, botões e controles interativos possuam áreas de clique ou toque amplas, além de uma aparência visual clara que indique sua interatividade. Isso é fundamental para garantir que todos os usuários, especialmente pessoas com Transtorno do Espectro Autista (TEA) ou dificuldades motoras, possam interagir com facilidade, conforto e confiança. <br><br>Botões, menus, caixas de seleção e demais elementos clicáveis devem ser visualmente reconhecíveis como interativos — ou seja, devem “parecer clicáveis”. Além disso, devem dispor de uma área de toque adequada, considerando diferentes dispositivos (como computadores, tablets e smartphones) e diferentes níveis de coordenação motora.",
        skills: "Atenção, Compreensão visual, Integração sensorial, Coordenação motora fina.",
        why: "Pessoas com TEA podem apresentar dificuldades motoras sutis que tornam movimentos precisos mais desafiadores, especialmente ao utilizar telas sensíveis ao toque ou dispositivos móveis. Elementos pequenos, com margens reduzidas de clique, exigem maior esforço físico e concentração, aumentando a chance de erros de toque (por exemplo, clicar acidentalmente em um link vizinho). <br><br>Além do aspecto motor, a clareza visual também é essencial. Um botão que não se diferencia de outros elementos da interface pode gerar confusão sobre o que é ou não interativo. Isso aumenta a carga cognitiva e pode provocar frustração, ansiedade ou perda de foco, especialmente em pessoas com TEA, que se beneficiam de interfaces previsíveis e bem estruturadas. <br><br>Oferecer elementos clicáveis com bom tamanho, espaçamento e aparência interativa torna o uso mais intuitivo, inclusivo e confortável para todos os usuários — não apenas para pessoas com TEA, mas também para crianças, idosos ou pessoas com deficiências motoras.",
        how: "Garanta áreas de clique amplas e acessíveis, Botões e ícones devem ter uma área mínima de toque de 44x44 pixels, conforme recomendação da W3C (Web Content Accessibility Guidelines – WCAG). Essa medida garante conforto na interação tanto em telas pequenas quanto em dispositivos com mouse.; Use elementos visuais que indiquem ação, utilize sombreamentos, gradientes, bordas e mudanças de cor para deixar claro que o elemento é clicável. Por exemplo, botões podem mudar de cor ao passar o cursor (efeito hover) ou ser ligeiramente pressionados ao serem clicados, indicando resposta imediata à interação.; Mantenha o contraste e a legibilidade, o texto dentro dos botões deve ter alto contraste com o fundo, garantindo leitura rápida e fácil identificação. Isso é essencial para usuários com baixa percepção visual ou sensibilidade sensorial.; Aadote padrões consistentes, todos os botões que executam ações similares devem ter aparência e comportamento uniformes. Por exemplo, se um botão de “Salvar” é verde e possui bordas arredondadas, todos os botões de confirmação devem seguir o mesmo padrão.; Espaçamento adequado entre elementos, evite colocar botões ou links muito próximos uns dos outros, pois isso aumenta a probabilidade de toques acidentais. Reserve margens visuais e funcionais entre elementos interativos.; Utilize ícones intuitivos e de bom tamanho, ícones devem representar claramente sua função (como uma lixeira para excluir, ou um disquete para salvar) e ter tamanho proporcional ao botão para facilitar o toque e a compreensão.; Forneça feedback visual imediato, ao clicar ou tocar em um elemento, o usuário deve perceber uma resposta instantânea, como uma mudança de cor, som leve, vibração (em dispositivos móveis) ou uma mensagem de confirmação. Isso reforça o senso de controle sobre a interação.",
        examples: [
            { type: "text", content: "Exemplo de interface com aparência clicável:" },
            { type: "image", src: "../diretriz/imagens/exemplo-aparencia-clicavel.png", alt: "Exemplo de elementos clicaveis" },
            {
                type: "text",
                content: "Exemplo correto de elemento clicável:"
            },
            {
                type: "image",
                src: "../diretriz/imagens/exemplo-com-aparencia-clicavel.png",
                alt: "Botão grande, com contraste adequado e aparência claramente clicável"
            },

            {
                type: "text",
                content: "Exemplo de elemento difícil de identificar (EVITAR):"
            },
            {
                type: "image",
                src: "../diretriz/imagens/exemplo-sem-aparencia-clicavel.png",
                alt: "Texto pequeno sem contraste e sem aparência de botão interativo"
            }
        ]
    },
    "Feedback de Interação": {
        group: "Reconhecimento e Previsibilidade",
        title: "24 - Feedback de Interação",
        description: "Garanta que o sistema forneça feedback imediato e claro sempre que ocorrer uma restrição de interação ou quando o usuário interagir de forma incorreta com algum elemento da interface. <br><br>Esse tipo de retorno ajuda o usuário — especialmente pessoas com Transtorno do Espectro Autista (TEA) — a compreender o comportamento dos elementos, corrigir ações equivocadas e antecipar o que pode ou não ser feito nas próximas interações. <br><br>Em interfaces acessíveis, o feedback é um dos pilares da boa usabilidade: ele cria um ciclo de comunicação entre o usuário e o sistema, tornando a navegação mais previsível, instrutiva e confiável.",
        skills: "Memorização, Atenção, Compreensão visual, Lidar com mudanças ou transições, Resolução de problemas.",
        why: "Pessoas com TEA tendem a se beneficiar de respostas imediatas e concretas do ambiente, pois essas ajudam na compreensão de causa e efeito. Quando um sistema responde de forma rápida e clara a uma ação incorreta — como clicar em um botão desabilitado ou digitar um dado em formato errado — ele contribui para a aprendizagem autônoma e reduz sentimentos de frustração ou confusão. <br><br>A ausência de feedback, por outro lado, pode gerar ansiedade e incerteza, uma vez que o usuário não entende se sua ação foi executada, ignorada ou rejeitada. Da mesma forma, mensagens genéricas como “Erro!” ou “Ação inválida” são pouco úteis e podem aumentar a carga cognitiva. <br><br>Um feedback bem projetado ajuda o usuário a entender o que aconteceu, por que aconteceu e o que ele pode fazer a seguir, promovendo uma experiência mais positiva, interativa e previsível.",
        how: "Forneça feedback imediato e contextual, assim que o usuário realizar uma ação incorreta ou inválida, apresente uma mensagem clara e direta, preferencialmente próxima ao elemento em que ocorreu o erro. Por exemplo: ao preencher um campo de e-mail incorretamente, mostre a mensagem “Digite um endereço de e-mail válido” logo abaixo do campo.; Use linguagem simples e instrutiva, evite termos técnicos ou mensagens negativas. Prefira comunicações gentis e orientativas, como “O campo está vazio, por favor, preencha-o antes de continuar”, em vez de “Erro: campo obrigatório não preenchido.”; Combine feedback visual, textual e sonoro, para reforçar o entendimento, use diferentes formas de feedback: <br>Visual: mudança de cor no campo, ícone de alerta, destaque no contorno. <br>Textual: mensagem clara de orientação. <br>Sonoro: um som breve e suave indicando o erro (evitando sons bruscos que possam causar desconforto sensorial)).; Antecipe instruções sempre que possível, antes que o erro aconteça, ofereça instruções preventivas sobre como interagir corretamente. Por exemplo, exiba dicas (tooltips) ou descrições curtas próximas a campos de formulário indicando o formato correto (“Digite apenas números”, “Use no mínimo 8 caracteres”).; Evite feedback tardio, mensagens de erro exibidas apenas depois de várias ações — como ao enviar um formulário completo — podem confundir o usuário e dificultar a correção. Sempre que possível, o sistema deve validar as ações em tempo real.; Garanta consistência nas respostas, mantenha o mesmo estilo de feedback em toda a aplicação. Por exemplo, todos os erros de campo podem ser destacados em vermelho, e mensagens de sucesso em verde. Isso cria previsibilidade e facilita a associação de significados visuais.; Forneça soluções junto com o erro, um bom feedback não apenas informa que houve um erro, mas também orienta sobre como corrigi-lo. Por exemplo: (“Senha muito curta. Use pelo menos 8 caracteres.” “Formato incorreto. O telefone deve conter apenas números”).; Evite sobrecarregar o usuário, forneça apenas as informações necessárias para resolver o problema. Mensagens longas ou múltiplos alertas simultâneos podem causar distração e aumentar o esforço cognitivo.",
        examples: [
            {
        type: "text",
        content: "Exemplo correto de feedback imediato e instrutivo:"
    },
    {
        type: "image",
        src: "../diretriz/imagens/exemplo-feedback-correto.png",
        alt: "Campo de formulário destacando erro em vermelho com mensagem clara explicando como corrigir"
    },

    {
        type: "text",
        content: "Exemplo incorreto de feedback visual (Evitar):"
    },
    {
        type: "image",
        src: "../diretriz/imagens/exemplo-tooltip-feedback.png",
        alt: "Campo de senha exibindo dica de no mínimo 8 caracteres antes do preenchimento"
    },

    {
        type: "text",
        content: "Dicas sobre Feedback:"
    },
    {
        type: "image",
        src: "../diretriz/imagens/dicas-feedback.png",
        alt: "Mensagem verde confirmando ação realizada com sucesso e ícone de confirmação"
    },
        ]
    },
    "Navegação simples": {
        group: "Navegabilidade",
        title: "25 - Navegação simples",
        description: "Ofereça uma navegação clara, intuitiva e consistente em todo o site ou aplicação, com indicadores de localização e progresso, além de botões globais de navegação — como Voltar, Página inicial, Ajuda e Sair — disponíveis em todas as páginas. <br><br>Uma navegação simplificada é essencial para criar um ambiente digital previsível, controlado e acessível, especialmente para pessoas com Transtorno do Espectro Autista (TEA), que podem apresentar maior sensibilidade a mudanças bruscas, desorganização visual ou excesso de estímulos. <br><br>Além disso, uma estrutura de navegação consistente aumenta a confiança do usuário, melhora o fluxo cognitivo e reduz a carga mental durante a exploração do conteúdo.",
        skills: "Memorização, Atenção, Compreensão visual, Lidar com mudanças ou transições, Orientação espacial e Organização cognitiva.",
        why: "Uma navegação confusa, com menus sobrecarregados, links em excesso ou elementos posicionados de forma inconsistente, pode dificultar a localização da informação desejada e causar frustração. <br><br>Pessoas com TEA, em especial, tendem a se sentir mais confortáveis em ambientes previsíveis e estruturados, nos quais é possível compreender facilmente onde estão, para onde podem ir e como retornar a uma etapa anterior. <br><br>Quando o sistema apresenta uma estrutura hierárquica clara e elementos fixos de orientação, o usuário consegue navegar de maneira independente, reduzindo a ansiedade e aumentando a eficiência na interação. <br><br>Além disso, a consistência entre páginas evita que a pessoa precise reaprender a interface a cada nova etapa, promovendo fluidez e continuidade na experiência.",
        how: "Mantenha a navegação consistente em todas as páginas, utilize o mesmo menu principal, ícones e posições de botões em todo o site. Isso ajuda o usuário a criar um mapa mental da aplicação, reduzindo a necessidade de memorização excessiva.; Use indicadores de localização e progresso, recursos como “breadcrumbs” (trilhas de navegação) ajudam o usuário a entender onde está e como retornar a seções anteriores. <br>Exemplo: Página inicial > Seção > Subseção atual <br>Em aplicações interativas ou educativas, barras de progresso também são úteis para indicar o quanto da tarefa já foi concluído.; Ofereça botões globais de navegação, mantenha, em todas as páginas, botões fixos e visíveis para: <br>- Voltar para a página anterior.<br>- Ir para a página inicial.<br>- Obter ajuda ou Suporte.<br>- Encerrar sessão (Sair).<br>Isso reforça o senso de controle e evita que o usuário se sinta perdido.; Simplifique o número de opções, evite menus com muitas ramificações ou subníveis. Agrupe conteúdos semelhantes e priorize categorias curtas, claras e objetivas; Ofereça múltiplas formas de navegação, além do menu principal, inclua recursos complementares como:<br>Campo de busca (com sugestões automáticas ou filtros por categoria).<br>Mapas do site ou menus hierárquicos expandidos.<br>Atalhos acessíveis para as seções mais usadas.; Utilize feedback visual para navegação, destaque visualmente a página ou seção ativa — por exemplo, com mudança de cor ou sublinhado — para ajudar o usuário a reconhecer onde está.;Evite distrações e sobrecarga visual, mantenha o menu limpo, sem elementos piscantes, ícones excessivos ou textos decorativos. A simplicidade deve favorecer o foco na tarefa.; Inclua instruções e legendas, sempre que necessário, adicione descrições curtas ou ícones compreensíveis próximos aos itens de navegação, para reforçar seu significado.",
        examples: [
            { type: "text", content: "Exemplo de vídeo com legendas visíveis:" },
            { type: "image", src: "https://placehold.co/300x150/000000/FFFFFF?text=Video+com+Legendas", alt: "Exemplo de vídeo com legendas" }
        ]
    },
    "Evitar redirecionamentos": {
        group: "Navegabilidade",
        title: "26 - Evitar redirecionamentos",
        description: "Evite redirecionar páginas automaticamente ou impor limites de tempo para a realização de tarefas. O controle da navegação e do ritmo de execução das atividades deve sempre permanecer nas mãos do usuário. <br><br>Redirecionamentos automáticos e expiração de sessões ou tarefas sem consentimento interrompem a experiência de uso, podendo causar confusão, frustração e perda de informações importantes. Para muitas pessoas, especialmente aquelas com Transtorno do Espectro Autista (TEA), essas mudanças súbitas quebram a previsibilidade e o foco, dificultando a continuidade da interação e afetando negativamente a experiência.",
        skills: "Atenção, Leitura, Compreensão verbal e visual, Planejamento, Lidar com mudanças ou transições, Controle emocional.",
        why: "Pessoas com TEA podem precisar de mais tempo para compreender instruções, processar informações visuais e concluir tarefas digitais. Quando um sistema impõe limites de tempo ou realiza redirecionamentos automáticos, ele ignora as diferentes velocidades cognitivas e os estilos individuais de interação, o que pode resultar em perda de progresso, desorientação e ansiedade. <br><br>Além disso, a imprevisibilidade causada por um redirecionamento repentino — como ser levado a outra página sem aviso — pode ser interpretada como uma quebra de rotina, algo que tende a causar desconforto em muitos usuários dentro do espectro. <br><br>Evitar esse tipo de comportamento de sistema é uma forma de respeitar o tempo cognitivo de cada pessoa, promovendo autonomia, previsibilidade e segurança na experiência digital.",
        how: "Evite redirecionamentos automáticos, não altere a página do usuário sem sua ação direta. Caso o redirecionamento seja necessário (por exemplo, após o login), informe claramente o que acontecerá e permita que o usuário confirme ou cancele a ação. <br>Exemplo: “Você será redirecionado para a página inicial em 10 segundos. Deseja permanecer aqui?”; Evite expiração de tarefas por tempo, em atividades longas, como formulários ou questionários, não encerre automaticamente a sessão. Se houver necessidade por questões de segurança, apresente alertas prévios e botões para estender o tempo. <br>Exemplo: “Sua sessão está prestes a expirar. Deseja continuar conectado?”; Mantenha o controle nas mãos do usuário, forneça botões claros e acessíveis em todas as páginas, permitindo que o usuário: <br>- Volte à página anterior.<br>- Retorne à página inicial.<br>- Obtenha ajuda ou suporte.<br>- Encerre a sessão conscientemente (Sair).; Informe sempre o que está acontecendo, caso um processo demore para carregar ou precise mudar de página, use mensagens de status como: “Carregando dados, por favor aguarde”. Isso evita que o usuário interprete a pausa como erro ou falha de navegação.; Garanta previsibilidade, sempre que uma ação resultar em transição, mudança de página ou atualização de conteúdo, comunique antecipadamente o que acontecerá. A clareza reduz a ansiedade e aumenta o controle da pessoa sobre a experiência.; Ofereça alternativas manuais, se o sistema precisar realizar uma atualização (como recarregar dados), ofereça uma opção para o próprio usuário acionar essa atualização, por exemplo, com um botão “Recarregar página” ou “Atualizar informações”.",
        examples: [
            { type: "text", content: "Exemplo de vídeo com legendas visíveis:" },
            { type: "image", src: "https://placehold.co/300x150/000000/FFFFFF?text=Video+com+Legendas", alt: "Exemplo de vídeo com legendas" }
        ]
    },
    "Confirmação de ações": {
        group: "Navegabilidade",
        title: "27 - Confirmação de ações",
        description: "Forneça feedbacks claros e imediatos que confirmem ações corretas ou alertem sobre possíveis erros, utilizando múltiplos meios de representação, como texto, som e imagens. Evite o uso de ícones com expressões faciais ou emoções, que podem gerar interpretações ambíguas. <br><br>O objetivo dessa diretriz é garantir que o usuário, especialmente pessoas com Transtorno do Espectro Autista (TEA), compreenda de forma inequívoca o que ocorreu após uma ação, mantendo o controle, a previsibilidade e a segurança durante a interação com o sistema.",
        skills: "Resolução de problemas, Atenção, Compreensão verbal e linguística, Compreensão visual, Lidar com mudanças ou transições, Integração sensorial.",
        why: "O feedback é uma parte essencial da comunicação entre o usuário e o sistema. Ele confirma se uma ação foi realizada corretamente, avisa quando há um erro e ajuda a pessoa a compreender como o sistema reage às suas interações. <br><br>Para pessoas com TEA, esse retorno é ainda mais importante, pois:<br>- Reduz a incerteza sobre o que aconteceu após uma ação.<br- Fortalece o aprendizado por meio da repetição de respostas consistentes.<br- Aumenta a confiança e o sentimento de controle sobre o ambiente digital.<br>- Evita frustrações decorrentes de ações sem resposta ou com retorno ambíguo.<br><br>Além disso, pessoas no espectro podem apresentar diferenças na percepção sensorial (auditiva, visual, tátil, entre outras). Por isso, o uso de feedback multimodal — combinando texto, som e elementos visuais — aumenta as chances de a mensagem ser compreendida adequadamente, respeitando diferentes formas de processamento sensorial.",
        how: "Forneça feedback imediato, a resposta do sistema deve ocorrer logo após a ação do usuário, para manter a associação entre o gesto e o resultado. Atrasos podem causar confusão e interromper a linha de raciocínio da pessoa. <br>Exemplo: após clicar em “Salvar”, o sistema exibe imediatamente “Alterações salvas com sucesso”.; Utilize múltiplos canais de comunicação, combine feedbacks visuais, textuais e auditivos de forma complementar, e não redundante. Isso ajuda a alcançar usuários com diferentes preferências e necessidades sensoriais. <br>Exemplo: um som suave + texto “Tarefa concluída com sucesso” + ícone neutro de confirmação.; Use linguagem clara e objetiva, mensagens curtas, diretas e com vocabulário simples ajudam na compreensão. Evite metáforas, ironias ou termos técnicos. <br>Prefira: “Senha incorreta. Digite novamente.” <br>Evite: “Ops! Parece que você errou.”;Evite o uso de ícones emocionais em feedbacks, ícones com expressões faciais (tristes, zangadas, surpresas etc.) podem ser mal interpretados ou distrair a pessoa.<br>Além disso, imagens de emoções negativas (como rostos tristes ou assustados) podem causar desconforto ou levar a comportamentos repetitivos, caso o usuário se sinta atraído por essas imagens e repita o erro propositalmente para vê-las novamente.; Prefira símbolos neutros e universais, utilize ícones simples e de fácil reconhecimento, como ✔️ para sucesso, ⚠️ para alerta ou ✖️ para erro. Esses elementos são mais objetivos e reduzem ambiguidades.; Oriente o usuário em caso de erro, em vez de apenas indicar que algo deu errado, explique o motivo e como corrigir. Isso reforça o aprendizado e evita frustração. <br>Exemplo: “O campo de e-mail está vazio. Por favor, preencha para continuar.”; Reforce ações corretas de forma positiva, use feedbacks positivos para valorizar o progresso e encorajar a continuidade da tarefa. <br>Exemplo: “Excelente! Você completou todas as etapas.”; Integre feedbacks sonoros de forma suave,sons de confirmação devem ser curtos, discretos e não perturbadores, evitando tons agudos, alarmes ou ruídos que possam incomodar usuários sensíveis.",
        examples: [
            { type: "text", content: "Exemplo de vídeo com legendas visíveis:" },
            { type: "image", src: "https://placehold.co/300x150/000000/FFFFFF?text=Video+com+Legendas", alt: "Exemplo de vídeo com legendas" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const guidelinesList = document.getElementById('guidelines-list');
    const guidelineDetails = document.getElementById('guideline-details');
    const guidelineExamples = document.getElementById('guideline-examples');

    let currentGroup = "";

    // Populate the left sidebar with topics
    for (const key in guidelinesData) {
        const guideline = guidelinesData[key];
        if (guideline.group !== currentGroup) {
            const groupHeader = document.createElement('li');
            groupHeader.innerHTML = `<strong>${guideline.group}</strong>`;
            guidelinesList.appendChild(groupHeader);
            currentGroup = guideline.group;
        }

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${key}`;
        link.textContent = guideline.title;
        link.dataset.topic = key; // Store the key for easy lookup
        listItem.appendChild(link);
        guidelinesList.appendChild(listItem);
    }

    // Function to update content based on selected topic
    function updateContent(topicKey) {
    const topic = guidelinesData[topicKey];

    guidelineDetails.innerHTML = '';
    guidelineExamples.innerHTML = '';

    if (!topic) {
        guidelineDetails.innerHTML = '<h2 class="placeholder-title">Tópico não encontrado.</h2><p class="placeholder-text">Por favor, selecione um tópico válido.</p>';
        guidelineExamples.innerHTML = '<p class="placeholder-text">Nenhum exemplo disponível.</p>';
        return;
    }

    const detailsHtml = `
        <h2>${topic.title}</h2>
        <p>${topic.description}</p>
        <h3>Habilidades trabalhadas</h3>
        <p>${topic.skills}</p>
        <h3>Por que fazer?</h3>
        <p>${topic.why}</p>
        <h3>Como fazer?</h3>
        <ul>
            ${topic.how.split(';').map(item => `<li>${item.trim()}</li>`).join('')}
        </ul>
    `;
    guidelineDetails.innerHTML = detailsHtml;

    topic.examples.forEach(example => {
        const exampleItem = document.createElement('div');
        exampleItem.classList.add('example-item');
        if (example.type === "text") {
            exampleItem.innerHTML = `<p>${example.content}</p>`;
        } else if (example.type === "image") {
            exampleItem.innerHTML = `<img src="${example.src}" alt="${example.alt}">`;
        } else if (example.type === "html") {
            exampleItem.innerHTML = example.content;
        }
        guidelineExamples.appendChild(exampleItem);
    });
}


    // Handle clicks on sidebar links
    guidelinesList.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.dataset.topic) {
        event.preventDefault();

        const topicKey = event.target.dataset.topic;

        // REMOVE active de todos
        const allLinks = guidelinesList.querySelectorAll('a');
        allLinks.forEach(link => link.classList.remove('active-topic'));

        // ADICIONA active no clicado
        event.target.classList.add('active-topic');

        updateContent(topicKey);
    }
});

    // Load content for the first topic by default on page load
    const firstTopicKey = Object.keys(guidelinesData)[0];
if (firstTopicKey) {
    updateContent(firstTopicKey);

    const firstLink = guidelinesList.querySelector('a');
    if (firstLink) {
        firstLink.classList.add('active-topic');
    }
}

    // Mobile menu toggle (if you want to implement this)
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // You would need to add CSS for .nav-links.active
    });
});

