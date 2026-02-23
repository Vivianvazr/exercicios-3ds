# **📘 PROJETO 1 – Sistema de Validação de Pedido**

# **🧩 PROBLEMA**

Você foi contratado para desenvolver parte de um sistema simples de pedidos para uma loja online.

Antes que o pedido seja finalizado, o sistema precisa validar algumas regras.

Sua missão é:

Criar uma função chamada validarPedido que receba um objeto representando um pedido e retorne se ele é válido ou não.

⚠️ IMPORTANTE:

Você deve aplicar TDD:

1. Criar os testes primeiro
2. Ver os testes falharem
3. Criar o código mínimo para passar
4. Ajustar se necessário

# **📋 REQUISITOS DO SISTEMA**

A função `validarPedido(pedido)` deve obedecer às seguintes regras:

**📌 Requisito 1 – Valor mínimo**

O pedido deve ter valor total maior que 0.

- Se total <= 0 → pedido inválido.

**📌 Requisito 2 – Cliente obrigatório**

O pedido deve possuir a propriedade cliente.

- Se não existir → pedido inválido.

**📌 Requisito 3 – Lista de itens**

O pedido deve possuir um array itens.

- Se não existir ou estiver vazio → pedido inválido.

**📌 Requisito 4 – Retorno da função**

A função deve retornar:

`true`  // se o pedido for válido

`false` // se o pedido for inválido

# **📋 TESTES SOLICITADOS**
- Pedido válido deve retornar true
- Pedido com total 0 deve retornar false
- Pedido sem cliente deve retornar false
- Pedido sem itens deve retornar false

# **📦  ESTRUTURA ESPERADA**

Exemplo de pedido válido:

```jsx
{
	cliente: "Carlos",
		total: 150,
			itens: ["Produto A", "Produto B"]
}
```

Boas práticas! 🤙