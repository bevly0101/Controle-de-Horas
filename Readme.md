
<p align="center">
  <img src="https://fortesengenharia.vagas.solides.com.br/_next/image?url=https%3A%2F%2Fc5gwmsmjx1.execute-api.us-east-1.amazonaws.com%2Fprod%2Fdados_processo_seletivo%2Flogo_empresa%2F89455%2FFORTES_LOGOMARCA-cap04%203.png&w=828&q=100" alt="Logo Fortes Engenharia" width="300"/>
</p>

<h1 align="center">📊 Controle de Horas Extras | Fortes Engenharia</h1>


<p align="center">
  <img src="https://img.shields.io/badge/status-Beta-orange?style=flat-square" alt="status beta"/>
  <img src="https://img.shields.io/badge/made%20with-Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="supabase"/>
  <img src="https://img.shields.io/badge/automation-n8n-0D83CD?style=flat-square&logo=n8n&logoColor=white" alt="n8n"/>
  <img src="https://img.shields.io/badge/AI-Gemini%20%7C%20GPT-blueviolet?style=flat-square" alt="AI"/>
</p>

---

## 📖 Sobre o Projeto  

O **Autofinance** é um agente financeiro digital integrado ao **WhatsApp** que organiza sua vida financeira de forma prática.  
Com ele, você pode **registrar gastos e entradas, configurar lembretes, analisar notas fiscais, recibos ou PDFs** e acompanhar tudo em um **dashboard visual e interativo**.  

📌 Nossa missão: **democratizar o controle financeiro pessoal, sem burocracia e direto no seu celular.**

---

## 🚀 Funcionalidades  

✅ Registro de **gastos e entradas** por texto, áudio ou imagem/PDF  
✅ **Lembretes inteligentes** de pagamentos (ex: aluguel, cartão, internet)  
✅ **Dashboard em tempo real** com entradas, saídas e saldo atualizado  
✅ **Classificação automática** por categorias (ex: alimentação, transporte, lazer)  
✅ Edição e exclusão de movimentações com comandos simples  
✅ **OCR e IA** para extrair dados de recibos e notas fiscais  

---

## 🛠️ Tecnologias Utilizadas  

- **Supabase** → Autenticação e banco de dados  
- **n8n** → Automação de fluxos e integrações  
- **React + tailwind** → Criação do dashboard interativo  
- **PostgreSQL** (via Supabase) → Persistência de dados  
- **Node.js + TypeScript** → Backend  
- **Gemini / GPT** → Análise de imagens e PDFs  

---

## 🧭 Como Funciona  

1. O usuário cria sua conta e recebe um **ID único** no Supabase.  
2. Pelo **WhatsApp**, ele pode enviar texto, áudio, imagem ou PDF.  
3. O sistema identifica o comando e aciona a ferramenta correta (ex: registrar gasto, criar lembrete).  
4. Os dados são salvos no banco de dados e exibidos no **dashboard online**.  
5. O usuário acompanha entradas, saídas e saldo atualizado em tempo real.  

---

## 📊 Fluxo de Funcionalidades  

```mermaid
flowchart TD
    A[Usuário envia comando via WhatsApp] --> B{Texto, Áudio, Imagem ou PDF}
    B -->|OCR + IA| C[Processamento no n8n]
    C --> D[Supabase: salvar gasto/entrada]
    C --> E[Supabase: criar lembrete]
    D --> F[Dashboard atualizado em tempo real]
    E --> F
