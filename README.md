# Vértice OS — protótipo navegável

Protótipo em HTML do ERP Vértice OS: Dashboard (home com animação de abertura) e os módulos 01–05, além do deck e dos posts de Instagram.

## Rodar localmente

As páginas carregam componentes irmãos via `fetch`, então precisam de um servidor local (abrir o arquivo com duplo clique não funciona).

- **VS Code:** instale a extensão *Live Server* (recomendada ao abrir a pasta), clique com o botão direito em `index.html` → *Open with Live Server*.
- **Terminal:** `npm run dev` e acesse http://localhost:3000
- **Sem servidor:** use os arquivos em `dist/`, que são autocontidos e abrem offline.

## Estrutura

```
index.html                      → redireciona para o Dashboard
Dashboard.dc.html               → home
Intro.dc.html                   → animação de abertura (logo + símbolo)
Sidebar.dc.html                 → navegação lateral, perfil (#perfil) e notificações (#notificacoes)
Busca.dc.html                   → busca global com autocomplete (⌘K / Ctrl+K)
theme.js                        → tema claro/escuro, sincronização do avatar
Licitacoes.dc.html              → Licitações (tabela + kanban)
Clientes.dc.html                → Órgãos contratantes
Obras e Contratos.dc.html       → Contratos e postos
Equipes e Profissionais.dc.html → Banco de talentos e mobilização
Financeiro.dc.html              → Faturamento e recebíveis
Configuracoes.dc.html           → Organização, usuários, segurança, integrações, preferências
Gauge.dc.html                   → medidor do Score Go/No-Go
Intelligence Hub.dc.html        → Módulo 01 (Processar edital)
Score Go-No-Go.dc.html          → Módulo 02
Banco de Especialistas.dc.html  → Módulo 03
Biblioteca Documental.dc.html   → Módulo 04
Gerador de Propostas.dc.html    → Módulo 05
Deck.dc.html                    → apresentação de funcionalidades
Instagram - *.dc.html           → templates de posts por público
support.js                      → runtime dos componentes (não editar)
deck-stage.js                   → moldura do deck
assets/                         → logo, símbolo e fotos
figma/                          → posts em SVG para importar no Figma
dist/                           → versões autocontidas (offline)
```

## Editando

Cada `.dc.html` tem duas partes: o template (HTML com estilos inline, entre `<x-dc>` e `</x-dc>`) e a lógica (`class Component extends DCLogic`, no `<script data-dc-script>`). Valores dinâmicos entram no template como `{{ nome }}` e vêm de `renderVals()`.

### Animação de abertura
- Toca ao abrir o site e ao clicar no logo/símbolo da sidebar.
- O item "Dashboard" da sidebar abre a home sem a animação.
- Frequência: prop `mode` em `Intro.dc.html` — `sempre` | `primeira-visita` | `desligado` (no Dashboard, prop `intro`).

## Observação
Protótipo de interface. A implementação de produção segue a stack definida (Next.js 15, TypeScript, Tailwind, shadcn/ui, Supabase); use estes arquivos como referência visual e de comportamento.
