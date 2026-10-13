# Portfólio — Anderson Freitas

Portfólio pessoal com experiência profissional, projetos e competências técnicas.

**Stack:** React, TypeScript e Vite.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # gera dist/
npm run preview   # serve o build localmente
```

## Onde editar o conteúdo

| Arquivo | Conteúdo |
| --- | --- |
| `src/i18n/en.ts` e `src/i18n/pt-BR.ts` | Todos os textos do site, em inglês e português: cargos do topo, títulos, experiências e projetos |
| `src/components/WorkExperience.tsx` | Contatos, datas e tecnologias de cada experiência e projeto |
| `src/components/Skills.tsx` | Categorias e itens de competências |

## Idiomas

O site abre em português quando o navegador está em português (`pt`, `pt-BR`, `pt-PT`) e em inglês nos demais casos. O botão EN/PT no canto superior direito troca o idioma, e a escolha fica salva no navegador do visitante.

Para mudar um texto, edite os dois dicionários; o TypeScript acusa erro se uma chave existir em um e faltar no outro.
