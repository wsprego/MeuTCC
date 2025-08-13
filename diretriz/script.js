// Data for guidelines topics
const guidelinesData = {
    "cores": {
        group: "Vocabulário Visual e Textual",
        title: "01 - Cores",
        description: `As cores não devem ser o único recurso para transmitir informações. É importante garantir um bom contraste entre a cor de fundo e os elementos em primeiro plano para facilitar a distinção dos itens, a diferenciação de conteúdos ou a relação entre informações semelhantes. Além disso, o conteúdo precisa ser compreensível mesmo sem imagens ou estilos visuais, usando as cores apenas como um complemento para ajudar a identificar ou relacionar elementos.`,
        skills: "Atenção, Leitura, Compreensão verbal ou linguística, Compreensão visual",
        why: `Quando usamos apenas cores para transmitir uma mensagem, muitas pessoas — principalmente crianças ou pessoas com TEA — podem não entender o que aquele elemento quer dizer. <br> Além disso, se o contraste entre o fundo e o texto ou objeto for baixo, fica difícil de ler e compreender, o que pode prejudicar a atenção. Por outro lado, cores bem usadas e com bom contraste ajudam a guiar o olhar, separar informações e organizar melhor o conteúdo.`,
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
        why: "Pessoas com TEA podem ter dificuldade para entender textos longos, complexos ou com linguagem figurada. Metáforas, expressões populares ou textos com muitos detalhes podem confundir ou distrair, dificultando a compreensão. <br> Além disso, textos simples ajudam a manter a atenção e facilitam a aprendizagem de vocabulário, principalmente no caso de crianças.",
        how: "Use uma linguagem clara, objetiva e fácil de entender; Evite jargões técnicos, expressões regionais ou palavras difíceis; Não use metáforas, linguagem figurada ou textos que possam ser interpretados de formas diferentes; Evite abreviações e siglas que não sejam amplamente conhecidas; Prefira textos curtos, sem parágrafos muito longos; Escreva rótulos e botões de forma clara e consistente, usando termos simples e diretos.; Escolha palavras e nomes que façam sentido para todos os usuários, não apenas para quem conhece uma área ou contexto específico; Utilize símbolos e ícones que sejam fáceis de reconhecer, com formas claras e contornos que ajudem a identificar o que representam.",
        examples: [
            { type: "text", content: "Exemplo de texto claro e direto:" },
            { type: "text", content: "<p style='font-family: \"Poppins\", sans-serif; font-size: 1em; line-height: 1.7; text-align: left;'>Clique no botão 'Enviar' para finalizar seu pedido.</p>" },
            { type: "text", content: "Exemplo de texto a evitar (ambíguo):" },
            { type: "text", content: "<p style='font-family: \"Poppins\", sans-serif; font-size: 1em; line-height: 1.7; text-align: left; color: red;'>Vá em frente e aperte o botão mágico para ver a mágica acontecer.</p>" }
        ]
    },
    "legibilidade": {
        group: "Vocabulário Visual e Textual",
        title: "03 - Legibilidade",
        description: "Mantenha os textos curtos e diretos. Evite parágrafos longos e use marcações que ajudam na leitura, como listas, títulos e subtítulos para dividir o conteúdo. <br>Além de usar uma linguagem simples (veja a recomendação na aba 02-Textos), é importante organizar o texto de forma que fique fácil de ler. Usar subtítulos, listas e dividir o conteúdo em blocos menores facilita muito a leitura. Também é essencial cuidar do tamanho das linhas e do espaçamento.",
        skills: "Atenção, leitura, compreensão verbal, compreensão visual.",
        why: "Parágrafos longos e complexos podem confundir ou desviar a atenção, principalmente para pessoas com TEA. Textos bem divididos, com listas e subtítulos, ajudam a guiar a leitura, facilitam a compreensão e tornam a experiência mais agradável.",
        how: "Divida o texto em parágrafos curtos; Use listas (como esta!) para organizar informações; Adicione títulos e subtítulos para separar os temas; Evite linhas muito longas (de preferência, até 80 caracteres por linha); Mantenha um bom espaçamento entre linhas para não 'apertar' o texto; Não alinhe o texto à direita; Use letras minúsculas, evite escrever tudo em caixa alta; Prefira fontes sem serifa, como Arial, Verdana, Helvetica ou Tahoma; Use linguagem simples, sem erros e sem expressões difíceis ou siglas; Seja objetivo e claro.",
        examples: [
            { type: "text", content: "Exemplo de fonte legível (Poppins):" },
            { type: "html", content: "<p style='font-family: \"Poppins\", sans-serif; font-size: 18px; line-height: 1.7; text-align: left; background-color: #e6f0ff; padding: 10px; border-radius: 5px;'>Este é um exemplo de texto com boa legibilidade.</p>" },
            { type: "text", content: "Exemplo de fonte a evitar (serifa complexa):" },
            { type: "html", content: "<p style='font-family: \"Georgia\", serif; font-size: 14px; line-height: 1.2; text-align: left; background-color: #ffe6e6; padding: 10px; border-radius: 5px; color: red;'>Este texto é mais difícil de ler.</p>" }
        ]
    },
    "compatibilidade_mundo_real": {
        group: "Vocabulário Visual e Textual",
        title: "04 - Compatibilidade com mundo real",
        description: "Os ícones, imagens, nomes de botões e menus devem ser parecidos com o que as pessoas já conhecem na vida real. Eles precisam representar ações concretas e do dia a dia, para que sejam fáceis de reconhecer. <br> Pessoas com TEA podem ter dificuldade para entender metáforas ou imagens que exigem imaginação. Por isso, é importante usar elementos visuais que sejam claros e baseados em situações reais. Em sites e aplicativos para crianças, essa prática também ajuda no aprendizado de novas palavras e ações que poderão usar no cotidiano.",
        skills: "Memorização, atenção, leitura, compreensão verbal, compreensão visual.",
        why: "Pessoas com TEA podem não entender imagens ou símbolos abstratos, fantasiosos ou que representem algo de forma indireta. Usar ações, ícones e elementos parecidos com o mundo real facilita o reconhecimento e torna a interação mais intuitiva.",
        how: "Escolha ícones e imagens que mostrem claramente ações reais, evitando metáforas; Prefira símbolos que as pessoas já veem ou usam no dia a dia; Para crianças, use ações e interações que elas possam aprender e aplicar na vida real; Em dispositivos móveis (como tablets), aproveite gestos e toques já conhecidos, como arrastar ou deslizar; Use imagens, gráficos e personagens que ajudem a manter o foco e a entender melhor as tarefas; Relacione as atividades com experiências comuns e habilidades que a criança já conhece; Reproduza ações, objetos e interações que sejam familiares e fáceis de identificar.",
        examples: [
            { type: "text", content: "Exemplo: Ícone de 'casa' para 'Início' (familiar)." },
            { type: "image", src: "https://placehold.co/100x100/5a7dcd/ffffff?text=Home+Icon", alt: "Ícone de casa" },
            { type: "text", content: "Exemplo: Botão 'Salvar' em vez de 'Persistir Dados' (linguagem comum)." }
        ]
    },
    "customizacao_visual": {
        group: "Customização",
        title: "G05 - Customização visual",
        description: "A customização visual consiste em oferecer ao usuário a possibilidade de ajustar elementos da interface — como cores, tamanho de texto, fontes e sons — de acordo com suas preferências. Essa flexibilidade permite que cada pessoa adapte a experiência de uso para torná-la mais confortável e adequada às suas necessidades.",
        skills: "Atenção, leitura, compreensão verbal ou linguística, compreensão visual e adaptação a mudanças ou transições.",
        why: "Pessoas no espectro autista (TEA) apresentam uma grande diversidade de preferências visuais e sensoriais, o que torna difícil identificar padrões universais. Uma cor que pode ser agradável para uma pessoa pode ser incômoda para outra. Por isso, oferecer opções de personalização garante maior inclusão, permitindo que cada indivíduo configure a interface de forma mais adequada à sua experiência sensorial e cognitiva.",
        how: "Disponibilize controles para ajuste do tamanho do texto, mesmo que navegadores já possuam funções nativas; Permita alterar esquemas de cores, incluindo um modo de alto contraste; Ofereça opções para escolher diferentes fontes tipográficas; Possibilite a personalização de sons e vozes utilizadas em botões com narração; Forneça configurações para alterar o posicionamento da navegação e controlar a execução de sons ou narrativas.",
        examples: [
            { type: "text", content: "Exemplo de seletor de tema (claro/escuro):" },
            { type: "image", src: "https://placehold.co/200x80/f5f8fa/333333?text=Botão+Tema", alt: "Botão de tema claro/escuro" }
        ]
    },
    "customizacao_informacional": {
        group: "Customização",
        title: "G06 - Customização informacional",
        description: "A customização informacional consiste em permitir que o usuário escolha como deseja receber as informações, seja por meio de texto, áudio ou imagens. Essa flexibilidade é especialmente importante para pessoas no espectro autista (TEA), pois reconhece que cada indivíduo pode ter diferentes formas de processar e compreender conteúdos.",
        skills: "Atenção, leitura, compreensão visual, adaptação a mudanças",
        why: "Indivíduos com TEA podem apresentar sensibilidades e preferências distintas: alguns são mais receptivos a estímulos visuais, outros a estímulos sonoros, e há aqueles que necessitam de textos ou narrativas para compreender melhor as informações. Assim, embora seja recomendável oferecer múltiplas formas de apresentação (representações redundantes), também é essencial dar ao usuário o controle para escolher as que mais se adequam às suas necessidades. <br> Por exemplo, crianças em fase de letramento podem preferir imagens e instruções sonoras em vez de textos escritos..",
        how: "Permitir que botões exibam apenas texto, apenas símbolos ou a combinação de ambos; Tornar sons, incluindo músicas, opcionais e com controle de volume; Disponibilizar opções para alterar cores, fontes e vozes utilizadas em botões narrados; Permitir personalizar as cores e sons do site ou aplicação.",
        examples: [
            { type: "text", content: "Exemplo de filtro de informações (mostrar/ocultar):" },
            { type: "image", src: "https://placehold.co/250x100/f5f8fa/333333?text=Filtro+Informações", alt: "Exemplo de filtro de informações" }
        ]
    },
    "interfaces_flexiveis": {
        group: "Customização",
        title: "G07 - Interfaces flexíveis",
        description: "Interfaces flexíveis permitem que o usuário personalize tanto a quantidade quanto a disposição dos elementos na tela, além de ajustar funcionalidades conforme suas necessidades e preferências. Essa abordagem é especialmente relevante para pessoas no espectro autista (TEA), pois reconhece que cada indivíduo interage de forma única com sistemas digitais. <br> Ao oferecer a possibilidade de adaptação do layout e dos recursos, o site ou aplicação torna-se mais inclusivo, acessível e confortável para diferentes perfis de usuários.",
        skills: "Atenção, leitura, compreensão visual, adaptação a mudanças e organização de informações.",
        why: "Para muitas pessoas com TEA, a previsibilidade e o controle sobre a experiência digital reduzem a ansiedade e aumentam o engajamento. Permitir ajustes na interface possibilita que o usuário adeque o conteúdo e as funcionalidades de forma que se sinta seguro e confortável. <br>Além disso, pais, educadores e terapeutas podem configurar a plataforma para atender às necessidades específicas de cada pessoa, personalizando desde elementos visuais até a forma de interação.",
        how: "Personalização de conteúdo: possibilitar que o usuário adicione elementos familiares ou significativos, como fotos pessoais, ícones conhecidos ou personagens preferidos, especialmente úteis para crianças; Controle da complexidade visual: permitir o ajuste da quantidade de elementos exibidos na tela, facilitando a concentração e evitando sobrecarga sensorial; Organização e acompanhamento: incluir recursos para ordenar atividades, salvar progresso e indicar a conclusão de tarefas — recurso essencial para atividades longas ou com múltiplas etapas; Flexibilidade de interação: oferecer diferentes formas de realizar a mesma tarefa (toque, arraste, comando de voz etc.), considerando particularidades do TEA, como dificuldades motoras ou sensoriais; Configurações salvas: permitir que as preferências do usuário sejam armazenadas, garantindo que ele não precise reconfigurar a aplicação a cada uso.",
        examples: [
            { type: "text", content: "Exemplo de layout responsivo (desktop):" },
            { type: "image", src: "https://placehold.co/400x200/5a7dcd/ffffff?text=Desktop+Layout", alt: "Layout de desktop" },
            { type: "text", content: "Exemplo de layout responsivo (mobile):" },
            { type: "image", src: "https://placehold.co/200x300/5a7dcd/ffffff?text=Mobile+Layout", alt: "Layout de mobile" }
        ]
    },
    "modo_leitura": {
        group: "Customização",
        title: "G08 - Modo de leitura",
        description: "O modo de leitura é um recurso que permite ao usuário focar exclusivamente no conteúdo textual, ocultando elementos visuais desnecessários e minimizando distrações. Esse recurso é especialmente importante em sites e aplicações voltados para atividades que exigem leitura, atenção e compreensão, sendo altamente recomendável para contextos educativos ou informativos, principalmente para pessoas no espectro autista (TEA). <br>Quando ativado, o modo de leitura remove menus, banners, anúncios e outros elementos que possam competir pela atenção, exibindo apenas o texto em um formato limpo, com cores suaves e espaçamento adequado. Esse recurso pode ser semelhante ao “modo de impressão”, que também apresenta o conteúdo de forma simplificada e organizada.",
        skills: "Atenção, leitura, compreensão visual, capacidade de manter o foco e adaptação a mudanças ou transições.",
        why: "Pessoas com TEA podem apresentar maior sensibilidade a estímulos visuais e dificuldade em manter a atenção quando há muitos elementos competindo pelo foco na tela. O modo de leitura ajuda a criar um ambiente mais calmo e organizado, reduzindo a sobrecarga sensorial e aumentando a eficiência na absorção das informações. <br>Além disso, ele beneficia não apenas o público-alvo, mas qualquer pessoa que precise ler textos longos sem distrações, como estudantes, pesquisadores e profissionais.",
        how: "Ativação simples: incluir um botão ou atalho de teclado para ativar e desativar rapidamente o modo de leitura.; Ajustes de personalização: permitir a alteração do tamanho e do tipo da fonte, do espaçamento entre linhas e das margens para facilitar a leitura.; Opções visuais: incluir modos de contraste (alto contraste, modo escuro, modo sépia) para atender diferentes necessidades visuais.; Modo de impressão integrado: permitir que o mesmo layout limpo seja usado tanto para leitura quanto para impressão, garantindo que o texto seja impresso sem elementos irrelevantes.; Configurações persistentes: salvar as preferências do usuário para que, ao retornar ao site ou aplicação, ele encontre o ambiente configurado conforme sua necessidade.; Compatibilidade com leitores de tela: garantir que o modo de leitura seja acessível também para usuários que utilizam tecnologias assistivas.",
        examples: [
            { type: "text", content: "Exemplo de botão 'Modo de Leitura':" },
            { type: "image", src: "https://placehold.co/150x50/8ba8e6/ffffff?text=Modo+Leitura", alt: "Botão Modo de Leitura" }
        ]
    },
    "engajamento": {
        group: "Engajamento",
        title: "G09 - Engajamento",
        description: "Desenvolver interfaces que mantenham o interesse do usuário, evitando sobrecarga e frustração.",
        skills: "Atenção, Interação",
        why: "Um design engajador ajuda a manter a atenção e a motivação, especialmente para usuários com TEA que podem ter desafios com foco e transições.",
        how: "Use feedback claro, microinterações, progressão visual para tarefas complexas e evite animações ou sons intrusivos.",
        examples: [
            { type: "text", content: "Exemplo de barra de progresso para tarefas complexas:" },
            { type: "image", src: "https://placehold.co/300x30/5a7dcd/ffffff?text=Barra+Progresso", alt: "Barra de progresso" }
        ]
    },
    "representacao_redundante": {
        group: "Representação Redundante",
        title: "G10 - Representação redundante",
        description: "Apresentar informações de múltiplas formas (texto, ícone, cor) para garantir a compreensão.",
        skills: "Compreensão visual, Compreensão verbal ou linguística",
        why: "A redundância na apresentação da informação é crucial para usuários com diferentes estilos de aprendizagem ou deficiências sensoriais.",
        how: "Sempre que usar um ícone, adicione um rótulo de texto. Se usar cor para indicar status, adicione um ícone ou texto descritivo. Forneça legendas para gráficos.",
        examples: [
            { type: "text", content: "Exemplo: Ícone de 'erro' com texto 'Erro'." },
            { type: "image", src: "https://placehold.co/150x50/FF0000/FFFFFF?text=Erro+!", alt: "Ícone de erro com texto" },
            { type: "text", content: "Exemplo: Botão 'Salvar' com ícone de disquete e texto." }
        ]
    },
    "multimidia": {
        group: "Multimídia",
        title: "G11 - Multimídia",
        description: "Oferecer alternativas para conteúdo multimídia, como legendas para vídeos e transcrições para áudios.",
        skills: "Compreensão auditiva, Compreensão visual",
        why: "Conteúdo multimídia pode ser inacessível para pessoas com deficiência auditiva ou visual. Alternativas garantem que a informação seja acessível a todos.",
        how: "Sempre inclua legendas ocultas (CC) para vídeos, transcrições de áudio e descrições de áudio para elementos visuais importantes em vídeos.",
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
            event.preventDefault(); // Prevent default link behavior (page reload)
            const topicKey = event.target.dataset.topic;
            updateContent(topicKey);
        }
    });

    // Load content for the first topic by default on page load
    const firstTopicKey = Object.keys(guidelinesData)[0];
    if (firstTopicKey) {
        updateContent(firstTopicKey);
    }

    // Mobile menu toggle (if you want to implement this)
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // You would need to add CSS for .nav-links.active
    });
});

