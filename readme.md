# Landing Page Pessoal — Lucas Moreira

Landing page de portfólio pessoal desenvolvida com **HTML, CSS e JavaScript puros**, apresentando biografia, projetos, trajetória acadêmica, certificados, skills e um formulário de contato funcional que envia mensagens diretamente para o e-mail do autor.

## Funcionalidades

- **Header fixo** com logo clicável (volta suavemente ao topo da página) e menu de navegação com rolagem suave até cada seção.
- **Modo claro/escuro**: botão no menu (🌙 / ☀️) que alterna o fundo e a cor do texto da área principal.
- **Seções do site**:
  - **Sobre Mim** — foto, apresentação e botão "Entre em contato".
  - **Meus Projetos** — cards dos projetos *LogosThekne* e *Calculadora*, ambos desenvolvidos em Python com CustomTkinter.
  - **Trajetória Acadêmica** — linha do tempo com a formação.
  - **Certificados** — imagem com os certificados.
  - **Skills** — SoftSkills e HardSkills em duas colunas.
  - **Contato** — formulário com nome, e-mail, telefone e observação.
- **Formulário de contato funcional** com envio via [EmailJS](https://www.emailjs.com/).
- **Proteção contra spam** com Google reCAPTCHA v2 ("Não sou um robô"): o envio só é liberado depois de marcar a caixa.
- **Footer** com logo, frase de apresentação, redes sociais (WhatsApp e LinkedIn) e informações de copyright.

## Efeitos de CSS

- **Hover**: zoom nos títulos das seções, nos botões, nos links do menu e na logo; destaque e deslocamento nos itens da lista de skills; botão "Enviar" fica verde e "Limpar" fica vermelho ao passar o mouse.
- **Animation**: animação de entrada da logo do header (`entradaLogo`), com fade e leve descida.
- **Transition**: transições suaves de cor e escala nos elementos interativos.
- **Responsividade**: `@media (max-width: 768px)` ajustando o tamanho do header, da logo e do menu em telas menores.

## Tecnologias

- HTML5
- CSS3 (Flexbox, animations, transitions, media queries)
- JavaScript (DOM e eventos)
- [EmailJS](https://www.emailjs.com/) — envio de e-mails pelo front-end
- [Google reCAPTCHA v2](https://www.google.com/recaptcha/) — verificação anti-robô

## Estrutura do projeto

```
landingpage/
├── img/               # logo, fotos, imagens dos projetos e certificados
├── index.html         # estrutura da página
├── page.css           # estilos
├── main.js            # modo claro/escuro e envio do formulário
└── README.md
```

## Como executar

1. Clone ou baixe este repositório.
2. Abra a pasta no **VS Code**.
3. Rode o projeto com a extensão **Live Server** (clique direito em `index.html` → *Open with Live Server*).

> ⚠️ O reCAPTCHA **não funciona** abrindo o `index.html` direto no navegador (`file://`). Use sempre um servidor local, como o Live Server (`http://127.0.0.1:5500`).

## Configuração do formulário de contato

O formulário depende de dois serviços gratuitos. Para usar com a sua própria conta:

### EmailJS

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/).
2. Em **Email Services**, conecte seu Gmail e anote o **Service ID**.
3. Em **Email Templates**, crie um template de contato com as variáveis abaixo e anote o **Template ID**:

   | Variável | Campo do formulário |
   |---|---|
   | `{{name}}` | Nome |
   | `{{email}}` | E-mail |
   | `{{phone}}` | Telefone |
   | `{{message}}` | Observação |

4. Em **Account → General**, copie a **Public Key**.
5. Atualize os valores no código:
   - `index.html`: `emailjs.init("SUA_PUBLIC_KEY")`
   - `main.js`: `emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", this)`

### Google reCAPTCHA

1. Acesse [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) e registre um novo site.
2. Escolha **reCAPTCHA v2 → Caixa de seleção "Não sou um robô"**.
3. Em **Domínios**, adicione `localhost` e `127.0.0.1` (e o domínio real, se for publicar o site).
4. Copie a **Chave do site** e coloque no `index.html`:

   ```html
   <div class="g-recaptcha" data-sitekey="SUA_SITE_KEY"></div>
   ```

> A *chave secreta* do reCAPTCHA **não** deve ser usada no código do site, já que ele roda inteiramente no navegador.

## Autor

**Lucas Moreira** — estudante de tecnologia da informação, em formação como desenvolvedor.