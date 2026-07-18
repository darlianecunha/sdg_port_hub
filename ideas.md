# SDG Attributes — Ideias de Design

## Ideia 1: Maritime Data Observatory
**Design Movement:** Cartografia científica + Painel de controle industrial

**Core Principles:**
- Dados como protagonistas — cada número tem peso visual
- Hierarquia clara entre ODS, dimensões e indicadores
- Linguagem técnica com elegância visual

**Color Philosophy:**
- Azul-marinho profundo (#0D1B2A) como base — evoca o oceano e seriedade científica
- Âmbar/dourado (#E8A838) como acento — contraste quente, remete a balizas e faróis
- Verde-teal (#2EC4B6) para scores positivos, vermelho-coral (#E84855) para lacunas

**Layout Paradigm:**
- Sidebar fixa com navegação por ODS (ícones coloridos dos ODS da ONU)
- Área principal com painel de dados denso mas respirável
- Cards com bordas esquerda coloridas por ODS

**Signature Elements:**
- Gráficos radar por ODS com preenchimento translúcido
- Barras de progresso horizontais com gradiente de cor por score
- Mapa do Brasil com portos destacados (decorativo)

**Interaction Philosophy:**
- Hover revela critérios de pontuação em tooltip detalhado
- Sliders para simulação com feedback visual imediato
- Score total animado ao mudar valores

**Animation:**
- Barras de progresso animam ao entrar na viewport
- Gráfico radar se desenha progressivamente
- Contador numérico animado para o score total

**Typography System:**
- Display: Space Grotesk (bold, técnico, moderno)
- Body: Inter (legível, neutro)
- Mono: JetBrains Mono para números e códigos de indicadores

---

## Ideia 2: SDG Research Portal
**Design Movement:** Editorial científico + Minimalismo escandinavo

**Core Principles:**
- Clareza acima de tudo — cada elemento justifica sua presença
- Tipografia como estrutura visual principal
- Dados apresentados como narrativa

**Color Philosophy:**
- Branco puro com cinza-frio (#F4F6F8) como fundo
- Cores oficiais dos ODS da ONU para cada dimensão
- Preto (#111827) para texto — máximo contraste

**Layout Paradigm:**
- Layout editorial com colunas assimétricas (2/3 + 1/3)
- Navegação horizontal por abas no topo
- Tabelas bem espaçadas com alternância de linhas

**Signature Elements:**
- Ícones oficiais dos ODS como elementos visuais principais
- Linha do tempo horizontal para as dimensões
- Badges coloridos por nível de performance (0-3)

**Interaction Philosophy:**
- Interface de simulação tipo formulário estruturado por seções
- Resultados aparecem em painel lateral fixo
- Exportação de relatório em PDF

**Animation:**
- Transições suaves entre abas (fade)
- Badges pulsam ao atingir score máximo
- Scroll suave entre seções

**Typography System:**
- Display: Playfair Display (autoridade acadêmica)
- Body: Source Sans 3 (legibilidade científica)
- Tabelas: IBM Plex Mono para dados

---

## Ideia 3: Port Sustainability Dashboard (ESCOLHIDA)
**Design Movement:** Neomorfismo sutil + Data visualization premium

**Core Principles:**
- Profundidade visual sem exagero — sombras suaves criam hierarquia
- Cores dos ODS da ONU integradas ao design como sistema
- Simulação como experiência central, não secundária

**Color Philosophy:**
- Fundo off-white (#F8FAFC) — clean mas não estéril
- Azul-oceano (#1B4F72) como cor primária — institucional e confiável
- Cores dos ODS da ONU para cada SDG (amarelo, laranja, verde, azul, etc.)
- Texto em slate-800 (#1E293B) — legível e sofisticado

**Layout Paradigm:**
- Header com navegação por abas (Indicadores | Simulação)
- Grid responsivo de cards por ODS
- Painel de simulação com layout de 2 colunas: formulário + resultado em tempo real

**Signature Elements:**
- Cards de ODS com ícone colorido e barra de progresso
- Gráfico radar interativo para visualizar perfil de sustentabilidade
- Score gauge circular animado no topo da simulação

**Interaction Philosophy:**
- Seleção de score por indicador com botões visuais (0/1/2/3) em vez de dropdowns
- Feedback imediato: gráfico atualiza a cada clique
- Accordion por dimensão temática para organizar os 84 indicadores

**Animation:**
- Cards entram com stagger animation (framer-motion)
- Gauge anima ao mudar score
- Gráfico radar transiciona suavemente

**Typography System:**
- Display: DM Sans (moderno, geométrico, amigável)
- Body: DM Sans Regular (consistência)
- Dados: Tabular nums com DM Mono para alinhamento

---

## Design Escolhido: Ideia 3 — Port Sustainability Dashboard

Razão: Melhor equilíbrio entre usabilidade (simulação interativa), apelo visual (gráficos e gauge) e credibilidade institucional (cores dos ODS da ONU). A abordagem de botões visuais 0/1/2/3 é muito superior aos dropdowns do Streamlit atual.
