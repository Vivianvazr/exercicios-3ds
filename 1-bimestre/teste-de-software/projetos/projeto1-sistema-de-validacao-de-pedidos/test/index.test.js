const validarPedido = require('../index');

test("Pedido válido deve retornar true", () => {
    const pedido = {
    cliente: "Carlos",
	total: 150,
	itens: ["Produto A", "Produto B"]
    }
    expect(validarPedido(pedido)).toBe(true)
})


test("o pedido com total 0 deve retornar false", () => {
    const pedido = {
    cliente: "",
	total: 0,
	itens: ["Produto A", "Produto B"]
    }
    expect(validarPedido(pedido)).toBe(false)
})


test("o pedido deve possuir um array itens", () => {
    const pedido = {
    cliente: "Carlos",
	total: 0,
	itens: ["Produto A", "Produto B"]
    }
    expect(validarPedido(pedido)).toBe(false)
})


test("Pedido sem itens deve retornar false", () => {
    const pedido = {
    cliente: "Carlos",
	total: 0,
	itens: ["", ""]
    }
    expect(validarPedido(pedido)).toBe(false)
})

