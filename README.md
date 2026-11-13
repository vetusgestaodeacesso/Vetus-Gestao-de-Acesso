# 🛡️ Vétus Gestão de Acesso — Site oficial

## 👋 Sobre o projeto

O site apresenta os serviços da **Vétus Gestão de Acesso** e ajuda o cliente a escolher um plano e solicitar uma proposta.

A Vétus atende principalmente pessoas que não dominam tecnologia e precisam aprender o básico para organizar e proteger seus acessos digitais. O objetivo é ajudar cada cliente a usar e-mails, aplicativos e contas online com mais segurança e tranquilidade, com orientação clara e atendimento próximo.

## 👥 Para quem é

- Pessoas que precisam organizar e proteger e-mails, aplicativos e senhas.
- Pessoas que não têm familiaridade com TI e preferem explicações simples.
- Clientes que precisam de ajuda para recuperar acessos ou melhorar a segurança das contas.

## 🧰 Tecnologias e publicação

- **HTML** para as páginas e o conteúdo.
- **CSS** para o visual e a adaptação a diferentes telas.
- **JavaScript** para validação do formulário, seleção de planos e montagem da proposta para WhatsApp.
- **GitHub Pages** como opção de hospedagem estática, quando configurada no repositório.

O site não usa um servidor próprio para receber os dados do formulário.

## 📄 Páginas

### Página principal — `index.html`

Apresenta a Vétus e os quatro serviços disponíveis:

- Básico
- Completo
- Premium
- Serviço Avulso

Também permite falar com a Vétus pelo WhatsApp.

### Formulário de proposta — `pre-servico.html`

O cliente informa nome, CPF, WhatsApp, e-mail e plano. No Serviço Avulso, também descreve o serviço desejado. A página apresenta os **Termos da Proposta** e a **Política de Privacidade**, além de uma confirmação de leitura relacionada ao tratamento dos dados.

Para os planos Completo e Premium, o termo mostra um aviso específico sobre o uso do e-mail para enviar o link da Ficha Digital Vétus.

## 🔄 Como funciona

1. O cliente escolhe um dos quatro planos na página principal.
2. O formulário abre com o plano escolhido pré-selecionado.
3. O cliente preenche os dados solicitados e confirma a leitura dos termos e da política.
4. Ao tocar em **Enviar Proposta pelo WhatsApp**, o navegador abre uma conversa com a proposta preenchida.
5. A mensagem só é enviada à Vétus quando o cliente confirma o envio no WhatsApp.

Ao abrir a conversa, os dados do formulário — inclusive o CPF — são incluídos no link usado para preparar a mensagem e enviados ao serviço WhatsApp. A Vétus recebe a proposta quando o cliente a envia pelo WhatsApp.

## ✅ Funcionalidades

- Apresentação dos planos em cards responsivos.
- Pré-seleção do plano recebido no endereço do formulário.
- Validação do nome, CPF, WhatsApp e e-mail.
- Campo condicional para detalhar o Serviço Avulso.
- Aviso específico sobre a Ficha Digital nos planos Completo e Premium.
- Montagem da proposta para envio pelo WhatsApp.
- Informações sobre privacidade e tratamento dos dados.

## 📁 Estrutura de pastas

- `index.html` — página principal e apresentação dos planos.
- `pre-servico.html` — formulário e termos da proposta.
- `css/vetusofc.css` — estilos da página principal.
- `css/pre-servico.css` — estilos do formulário.
- `js/app-pre-servico.js` — validação e envio da proposta.
- `image/logo-vetus.png` — logo compartilhada pelo site.

A **Ficha Digital Vétus** está em um projeto separado e possui seu próprio README.

## ▶️ Como abrir localmente

1. Baixe ou clone os arquivos do projeto.
2. Abra `index.html` em um navegador atualizado.
3. Escolha um plano para abrir o formulário ou abra `pre-servico.html` diretamente.
4. O WhatsApp só será aberto quando o botão de envio for acionado; revise os dados antes de enviar a mensagem.

Não é necessário instalar dependências para visualizar as páginas. Para publicar, configure o GitHub Pages para servir a pasta raiz do repositório.

## 📜 Licença

Este repositório não declara uma licença de uso para o site. Antes de reutilizar ou redistribuir o conteúdo, solicite autorização à Vétus.

## 📞 Contato

- **WhatsApp:** [+55 34 99824-2733](https://wa.me/5534998242733)
