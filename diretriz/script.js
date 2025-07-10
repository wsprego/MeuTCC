// Data for guidelines topics
const guidelinesData = {
    "cores": {
        group: "Vocabulário Visual e Textual",
        title: "G01 - Cores",
        description: `As cores não devem ser a única forma de transmitir um conteúdo e o contraste entre as cores de fundo e objetos de primeiro plano deve ser adequado para distinguir os itens e diferenciar conteúdos ou relacionar informações similares.
                      O conteúdo também deve ser compreendido sem imagens ou estilos e as cores devem ser utilizadas de forma adequada como um complemento para distinguir ou relacionar objetos.`,
        skills: "Atenção, Leitura, Compreensão verbal ou linguística, Compreensão visual",
        why: `Elementos que usam somente cores, sem imagens ou texto para representação da informação, podem atrair a atenção da pessoa, principalmente crianças, sem que ela compreenda o que aquele elemento significa.
              Além disso, o baixo contraste entre o fundo e o texto/objeto de primeiro plano dificulta a compreensão, a legibilidade e pode prejudicar a atenção da pessoa com TEA. Entretanto, as cores dos objetos e os diferentes contrastes podem ser usados para guiar a atenção e diferenciar elementos.`,
        how: `A cor de fundo deve ser diferente o suficiente da cor do objeto do primeiro plano e possui contraste adequado. Dê preferência para planos de fundo de cores claras ou branco para destacar os objetos ou textos do primeiro plano.
              Você pode utilizar cores para diferenciar seções de um site ou relacionar conteúdos similares.
              Cores não deve ser a única forma de transmitir um conteúdo. O conteúdo também deve ser compreendido sem imagens ou estilos. É recomendável associar rótulos textuais a elementos.
              Em caso de dúvidas se o contraste está adequado, utilize ferramentas de verificação de contraste para comparar a cor de plano de fundo e a cor do elemento do primeiro plano.`,
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
        title: "G02 - Textos",
        description: "Instruções claras e concisas, sem ambiguidades ou metáforas complexas. Uso de linguagem simples e direta.",
        skills: "Leitura, Compreensão verbal ou linguística",
        why: "Textos complexos ou ambíguos podem dificultar a compreensão para pessoas com TEA, que geralmente se beneficiam de informações literais e diretas.",
        how: "Use frases curtas, vocabulário simples e evite jargões. Divida o conteúdo em parágrafos pequenos e utilize listas para facilitar a leitura. Evite sarcasmo, ironia e metáforas.",
        examples: [
            { type: "text", content: "Exemplo de texto claro e direto:" },
            { type: "text", content: "<p style='font-family: \"Poppins\", sans-serif; font-size: 1em; line-height: 1.7; text-align: left;'>Clique no botão 'Enviar' para finalizar seu pedido.</p>" },
            { type: "text", content: "Exemplo de texto a evitar (ambíguo):" },
            { type: "text", content: "<p style='font-family: \"Poppins\", sans-serif; font-size: 1em; line-height: 1.7; text-align: left; color: red;'>Vá em frente e aperte o botão mágico para ver a mágica acontecer.</p>" }
        ]
    },
    "legibilidade": {
        group: "Vocabulário Visual e Textual",
        title: "G03 - Legibilidade",
        description: "Tamanho de fonte adequado, espaçamento entre linhas e letras, e escolha de fontes sem serifa para melhor leitura.",
        skills: "Leitura, Atenção visual",
        why: "Fontes pequenas, espaçamento inadequado ou fontes complexas podem causar fadiga visual e dificultar a leitura para pessoas com TEA e outras deficiências visuais ou cognitivas.",
        how: "Utilize tamanhos de fonte de pelo menos 16px para o corpo do texto. Use fontes sem serifa (como Poppins, Arial, Helvetica). Garanta um bom espaçamento entre linhas (line-height) e entre letras (letter-spacing).",
        examples: [
            { type: "text", content: "Exemplo de fonte legível (Poppins):" },
            { type: "html", content: "<p style='font-family: \"Poppins\", sans-serif; font-size: 18px; line-height: 1.7; text-align: left; background-color: #e6f0ff; padding: 10px; border-radius: 5px;'>Este é um exemplo de texto com boa legibilidade.</p>" },
            { type: "text", content: "Exemplo de fonte a evitar (serifa complexa):" },
            { type: "html", content: "<p style='font-family: \"Georgia\", serif; font-size: 14px; line-height: 1.2; text-align: left; background-color: #ffe6e6; padding: 10px; border-radius: 5px; color: red;'>Este texto é mais difícil de ler.</p>" }
        ]
    },
    "compatibilidade_mundo_real": {
        group: "Vocabulário Visual e Textual",
        title: "G04 - Compatibilidade com mundo real",
        description: "Utilizar termos e conceitos familiares aos usuários, alinhando a interface com as expectativas do mundo real.",
        skills: "Compreensão verbal ou linguística, Compreensão visual",
        why: "Interfaces que usam jargões técnicos ou metáforas abstratas podem ser confusas. Alinhar o design com o mundo real facilita a compreensão e a navegação.",
        how: "Use ícones e rótulos que representem objetos ou ações do dia a dia. Evite termos técnicos desnecessários. Mantenha a consistência com convenções de design amplamente aceitas.",
        examples: [
            { type: "text", content: "Exemplo: Ícone de 'casa' para 'Início' (familiar)." },
            { type: "image", src: "https://placehold.co/100x100/5a7dcd/ffffff?text=Home+Icon", alt: "Ícone de casa" },
            { type: "text", content: "Exemplo: Botão 'Salvar' em vez de 'Persistir Dados' (linguagem comum)." }
        ]
    },
    "customizacao_visual": {
        group: "Customização",
        title: "G05 - Customização visual",
        description: "Permitir que o usuário personalize aspectos visuais da interface, como tamanho da fonte, cores e contraste.",
        skills: "Atenção, Compreensão visual",
        why: "A personalização visual permite que usuários com diferentes necessidades visuais e sensoriais ajustem a interface para seu conforto e legibilidade.",
        how: "Ofereça opções de tema (claro/escuro), ajuste de tamanho de fonte, e controle de contraste. Utilize CSS custom properties para facilitar a implementação.",
        examples: [
            { type: "text", content: "Exemplo de seletor de tema (claro/escuro):" },
            { type: "image", src: "https://placehold.co/200x80/f5f8fa/333333?text=Botão+Tema", alt: "Botão de tema claro/escuro" }
        ]
    },
    "customizacao_informacional": {
        group: "Customização",
        title: "G06 - Customização informacional",
        description: "Permitir que o usuário personalize o tipo e a quantidade de informação exibida.",
        skills: "Atenção, Compreensão verbal ou linguística",
        why: "Pessoas com TEA podem ser sobrecarregadas por excesso de informação. A customização informacional ajuda a reduzir a carga cognitiva.",
        how: "Ofereça filtros para dados, opções para ocultar/mostrar detalhes, e a capacidade de reordenar ou priorizar informações.",
        examples: [
            { type: "text", content: "Exemplo de filtro de informações (mostrar/ocultar):" },
            { type: "image", src: "https://placehold.co/250x100/f5f8fa/333333?text=Filtro+Informações", alt: "Exemplo de filtro de informações" }
        ]
    },
    "interfaces_flexiveis": {
        group: "Customização",
        title: "G07 - Interfaces flexíveis",
        description: "Criar interfaces que se adaptam a diferentes formas de interação e dispositivos.",
        skills: "Interação, Atenção",
        why: "A flexibilidade garante que a interface seja utilizável por pessoas com diferentes habilidades motoras, cognitivas ou que utilizam tecnologias assistivas.",
        how: "Implemente design responsivo, suporte a navegação por teclado, e garanta que todos os elementos interativos sejam acessíveis por mouse, toque e teclado.",
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
        description: "Oferecer um modo de leitura simplificado que remove distrações e foca no conteúdo principal.",
        skills: "Leitura, Atenção",
        why: "Um modo de leitura pode ser extremamente benéfico para pessoas com TEA ou TDAH, pois minimiza estímulos visuais e foca a atenção no texto.",
        how: "Crie um botão para ativar/desativar o modo de leitura que ajusta o layout, remove barras laterais, anúncios e usa uma tipografia otimizada para leitura.",
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

        // Clear previous content
        guidelineDetails.innerHTML = '';
        guidelineExamples.innerHTML = '';

        if (!topic) {
            guidelineDetails.innerHTML = '<h2 class="placeholder-title">Tópico não encontrado.</h2><p class="placeholder-text">Por favor, selecione um tópico válido.</p>';
            guidelineExamples.innerHTML = '<p class="placeholder-text">Nenhum exemplo disponível.</p>';
            return;
        }

        // Update middle column (details)
        const detailsHtml = `
            <h2>${topic.title}</h2>
            <p>${topic.description}</p>
            <h3>Habilidades trabalhadas</h3>
            <p>${topic.skills}</p>
            <h3>Por que fazer?</h3>
            <p>${topic.why}</p>
            <h3>Como fazer?</h3>
            <p>${topic.how}</p>
        `;
        guidelineDetails.innerHTML = detailsHtml;

        // Update right column (examples)
        topic.examples.forEach(example => {
            const exampleItem = document.createElement('div');
            exampleItem.classList.add('example-item');
            if (example.type === "text") {
                exampleItem.innerHTML = `<p>${example.content}</p>`;
            } else if (example.type === "image") {
                exampleItem.innerHTML = `<img src="${example.src}" alt="${example.alt || ''}"><p>${example.content || ''}</p>`;
            } else if (example.type === "html") {
                exampleItem.innerHTML = example.content; // Directly inject HTML
            }
            guidelineExamples.appendChild(exampleItem);
        });

        // Update active class for sidebar links
        document.querySelectorAll('.guidelines-nav ul li a').forEach(link => {
            link.classList.remove('active-topic');
        });
        const activeLink = document.querySelector(`.guidelines-nav ul li a[data-topic="${topicKey}"]`);
        if (activeLink) {
            activeLink.classList.add('active-topic');
        }
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

