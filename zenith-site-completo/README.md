# Zenith Clínica Neurológica — site multipágina

Site institucional em HTML, CSS e JavaScript puro, com páginas independentes e navegação compartilhada.

## Estrutura
- `index.html`: página inicial
- `templates/sobre.html`: apresentação da clínica
- `templates/especialidades.html`: áreas de atendimento
- `templates/medicos.html`: equipe profissional
- `templates/contato.html`: contato, FAQ e formulário
- `static/css/style.css`: estilos compartilhados e animações
- `static/js/main.js`: menu responsivo, progresso de leitura, botão voltar ao topo e animações de entrada
- `static/js/formulario.js`: validação do formulário de contato
- `static/img/logo.svg`: marca vetorial provisória
- `PROMPTS-IMAGENS-CINEMATOGRAFICAS.md`: prompts para criar imagens originais coerentes com a identidade visual

## Como executar
1. Extraia o ZIP.
2. No VS Code, abra a pasta `zenith-site-completo` (a pasta que contém `index.html`, `templates` e `static`).
3. Abra `index.html` com a extensão Live Server.
4. Navegue pelas páginas pelo menu. Não é necessário Flask para esta versão estática.

## Interações incluídas
- Menu mobile com fechamento por Escape e ao selecionar um link.
- Cabeçalho que muda ao rolar a página.
- Barra fina de progresso de leitura.
- Animações de entrada acionadas conforme os elementos aparecem na tela.
- Movimento sutil no hero em desktop e feedback discreto nos botões.
- Botão de retorno ao topo.
- Respeito à preferência do sistema por movimento reduzido.
- FAQ expansível na página de contato.

## Antes de publicar
Atualize telefone, endereço, profissionais, credenciais e serviços com informações reais e verificadas. As imagens remotas são demonstrativas; os prompts para substituí-las por imagens próprias estão em `PROMPTS-IMAGENS-CINEMATOGRAFICAS.md`. O formulário valida os campos no navegador, mas não envia nem armazena dados; conecte-o a um backend seguro antes de uso real.
