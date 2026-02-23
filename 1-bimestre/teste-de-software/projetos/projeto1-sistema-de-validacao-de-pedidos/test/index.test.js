const validarPedido = require('../index');
//1
test("Pedido válido deve retornar true", () => {
    const pedido = {
    cliente: "Carlos",
	total: 150,
	itens: ["Produto A", "Produto B"]
    }
    expect(validarPedido(pedido)).toBe(true)
})

//2
test("o pedido com total 0 deve retornar false", () => {
    const pedido = {
    cliente: "",
	total: 0,
	itens: ["Produto A", "Produto B"]
    }
    expect(validarPedido(pedido)).toBe(false)
})

//3
test("o pedido deve possuir um array itens", () => {
    const pedido = {
    cliente: "Carlos",
	total: 0,
	itens: ["Produto A", "Produto B"]
    }
    expect(validarPedido(pedido)).toBe(false)
})

//4
test("Pedido sem itens deve retornar false", () => {
    const pedido = {
    cliente: "Carlos",
	total: 0,
	itens: ["", ""]
    }
    expect(validarPedido(pedido)).toBe(false)
})

