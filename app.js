function Cliente(nome, telefoneCelular, email, endereço){
    this._nome = nome
    this._telefoneCelular = telefoneCelular
    this._email = email
    this._endereço = endereço
 
    Object.defineProperty(this, 'nome', {
        get: function(){
            return this._nome
        },
        set: function(nome){
            this._nome = nome
        }
    })
 
    Object.defineProperty(this, 'telefoneCelular', {
        get: function(){
            return this._telefoneCelular
        },
        set: function(telefoneCelular){
            this._telefoneCelular = telefoneCelular
        }
    })
 
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email
        },
        set: function(email){
            this._email = email
        }
    })
 
    Object.defineProperty(this, 'endereço', {
        get: function(){
            return this._endereço
        },
        set: function(endereço){
            this._endereço = endereço
        }
    })
 
    Object.defineProperty(this, 'clienteDescricao', {
        get: function() {
            return '--------------\n' +
            'Informações do cliente: \n' + this._nome + '\n' +
            this._email  + '\n' +
            '--------------\n' +
            this._telefoneCelular.telefoneDescricao +
            this._endereço.enderecoDescricao
        }
    })
 
    Object.defineProperty(this, 'clienteDescricaoAlto', {
        get: function(){      
            return this.clienteDescricao.toUpperCase()
        }
    })
 
    Object.defineProperty(this, 'clienteDescricaoBaixo', {
        get: function(){      
            return this.clienteDescricao.toLowerCase()
        }
    })
}
 
function TelefoneCelular(DDD, telefoneNumero){
    this._DDD = DDD
    this._telefoneNumero = telefoneNumero
 
    Object.defineProperty(this, 'DDD', {
        get: function(){
            return this._DDD
        },
        set: function(DDD){
            this._DDD = DDD
        }
    })
 
    Object.defineProperty(this, 'telefoneNumero', {
        get: function(){
            return this._telefoneNumero
        },
        set: function(telefoneNumero){
            this._telefoneNumero = telefoneNumero
        }
    })
 
    Object.defineProperty(this, 'telefoneDescricao', {
        get: function() {
            return '--------------\n' +
            'Telefone: ' +
            '\nDDD: ' + this._DDD +
            '\nNúmero: ' + this._telefoneNumero +
            '\n--------------'
        }
    })
 
    Object.defineProperty(this, 'telefoneDescricaoAlto', {
        get: function(){      
            return this.telefoneDescricao.toUpperCase()
        }
    })
 
    Object.defineProperty(this, 'telefoneDescricaoBaixo', {
        get: function(){      
            return this.telefoneDescricao.toLowerCase()
        }
    })
}
 
function Endereco(rua, enderecoNumero, cidade, estado){
    this._rua = rua
    this._enderecoNumero = enderecoNumero
    this._cidade = cidade
    this._estado = estado
 
    Object.defineProperty(this, 'rua', {
        get: function(){
            return this._rua
        },
        set: function(rua){
            this._rua = rua
        }
    })
 
    Object.defineProperty(this, 'enderecoNumero', {
        get: function(){
            return this._enderecoNumero
        },
        set: function(enderecoNumero){
            this._enderecoNumero = enderecoNumero
        }
    })
 
    Object.defineProperty(this, 'cidade', {
        get: function(){
            return this._cidade
        },
        set: function(cidade){
            this._cidade = cidade
        }
    })
 
    Object.defineProperty(this, 'estado', {
        get: function(){
            return this._estado
        },
        set: function(estado){
            this._estado = estado
        }
    })
 
    Object.defineProperty(this, 'enderecoDescricao', {
        get: function() {
            return '\nEndereço: ' +
            '\nRua: ' + this._rua +
            '\nNúmero: ' + this._enderecoNumero +
            '\nCidade: ' + this._cidade + '\nEstado: ' +
            this._estado +
            '\n--------------'
        }
    })
 
    Object.defineProperty(this, 'enderecoDescricaoAlto', {
        get: function(){      
            return this.enderecoDescricao.toUpperCase()
        }
    })
 
    Object.defineProperty(this, 'enderecoDescricaoBaixo', {
        get: function(){      
            return this.enderecoDescricao.toLowerCase()
        }
    })
}
 
let telefone = new TelefoneCelular('11', '999999999')
let endereco = new Endereco('AV. Paulista', '987', 'São Paulo', 'SP')
let cliente = new Cliente('Carlos conrado Heinz', telefone, 'carlos.conrado@app.com', endereco)
 
let telefone2 = new TelefoneCelular('21', '888888888')
let endereco2 = new Endereco('Rua da Liberdade', '123', 'Rio de Janeiro', 'RJ')
let cliente2 = new Cliente('Ana Beatriz Silva', telefone2, 'ana.silva@app.com', endereco2)
 
let telefone3 = new TelefoneCelular('41', '777777777')
let endereco3 = new Endereco('Rua das Flores', '456', 'Curitiba', 'PR')
let cliente3 = new Cliente('Ricardo Oliveira', telefone3, 'ricardo.oliveira@app.com', endereco3)
 

console.log(cliente.clienteDescricao)

console.log(cliente.clienteDescricaoAlto)
 
console.log(cliente.clienteDescricaoBaixo)
 
function clientesOrdem(clientes) {
    return clientes.sort((a, b) => a.nome.localeCompare(b.nome))
}
 
let clientes = [cliente, cliente2, cliente3]
let clientesOrdenados = clientesOrdem(clientes)

clientesOrdenados.forEach(function(cliente) {
    console.log(cliente.clienteDescricao)
})