pragma solidity >=0.4.21 <0.6.0;

contract WikiBea {

  struct artigo {
  	uint id;
  	string titulo;
  	string corpo;
  	address autor;
  	uint versao;
  }

  address public owner;

  constructor() public {
    owner = msg.sender;
    adicionaArtigo("titulo teste", "corpo teste");
  } 

  // mapeando o artigo
  mapping(uint => artigo) public artigos;

  uint public artigosCount;

  // inicialização
  // function WikiBea () public {}

  function adicionaArtigo (string memory _titulo, string memory _corpo) public {
  	artigosCount ++;
  	artigos[artigosCount] = artigo(artigosCount, _titulo, _corpo, msg.sender, 0);
  }

  function alterarArtigo (uint _id, string memory _titulo, string memory _corpo) public {
  	// verifica se a pessoa que esta tentando alterar eh o autor
  	require(artigos[_id].autor == msg.sender);

  	// altera artigo
  	artigos[_id].titulo = _titulo;
  	artigos[_id].corpo = _corpo;

  	// versiona
  	artigos[_id].versao ++;
  }

  function getArtigo() public view returns (uint, string memory){
    return (artigos[1].id, artigos[1].titulo);
  }
  

}
