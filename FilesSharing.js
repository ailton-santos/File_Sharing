// Definição das variáveis
let arquivoCompartilhado = null; // Armazena o arquivo compartilhado
let usuarios = []; // Lista de usuários que podem acessar o arquivo

// Função para carregar um arquivo
function carregarArquivo(arquivo) {
  arquivoCompartilhado = arquivo;
  console.log(`O arquivo "${arquivo.name}" foi carregado com sucesso.`);
}

// Função para compartilhar o arquivo com um usuário
function compartilharArquivo(usuario) {
  // Verifica se o usuário já tem acesso ao arquivo
  if (verificarAcesso(usuario)) {
    console.log(`O usuário ${usuario} já tem acesso ao arquivo.`);
  } else {
    // Adiciona o usuário à lista de usuários com acesso ao arquivo
    usuarios.push({
      nome: usuario.nome,
      email: usuario.email,
      permissao: "leitura",
      data: new Date(),
      compartilhadoPor: usuario.compartilhadoPor
    });
    console.log(`O arquivo foi compartilhado com ${usuarios.length} usuários.`);
  }
}

// Função para remover o compartilhamento do arquivo com um usuário
function removerCompartilhamento(usuario) {
  const index = usuarios.findIndex(u => u.email === usuario.email);
  if (index !== -1) {
    usuarios.splice(index, 1);
    console.log(`O compartilhamento com ${usuario.nome} foi removido.`);
  } else {
    console.log(`O usuário ${usuario.nome} não possui acesso ao arquivo.`);
  }
}

// Função para verificar se o usuário tem acesso ao arquivo
function verificarAcesso(usuario) {
  return usuarios.some(u => u.email === usuario.email);
}

// Função para atualizar as permissões de um usuário
function atualizarPermissao(usuario, permissao) {
  const index = usuarios.findIndex(u => u.email === usuario.email);
  if (index !== -1) {
    usuarios[index].permissao = permissao;
    console.log(`As permissões de ${usuario.nome} foram atualizadas para ${permissao}.`);
  } else {
    console.log(`O usuário ${usuario.nome} não possui acesso ao arquivo.`);
  }
}

// Exemplo de uso
carregarArquivo({ name: "foto.jpg", size: "2MB" });
compartilharArquivo({
  nome: "Amigo 1",
  email: "amigo1@exemplo.com",
  permissao: "leitura",
  compartilhadoPor: "usuário1@exemplo.com"
});
compartilharArquivo({
  nome: "Amigo 2",
  email: "amigo2@exemplo.com",
  permissao: "edicao",
  compartilhadoPor: "usuário1@exemplo.com"
});
console.log(verificarAcesso({ nome: "Amigo 1", email: "amigo1@exemplo.com" })); // true
console.log(verificarAcesso({ nome: "Amigo 3", email: "amigo3@exemplo.com" })); // false
removerCompartilhamento({ nome: "Amigo 1", email: "amigo1@ex
