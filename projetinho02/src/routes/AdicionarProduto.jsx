
import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import { useState } from "react";

export default function AdicionarProduto() {
    document.title = "Adicionar Produtos";

    const navigate = useNavigate();

    //Criando variáveis para pegar o valor dos inputs
    const [produtos, setProduto] = useState({
        nome: '',
        preco: '',
    });
    
    return(
        <div>
            <h1>Adicionar Produto</h1>
            <div>
                <form action="">
                    <fieldset>
                        <legend>Adicionar Produto</legend>
                        <div>
                            <input type="hidden" id="id" />
                        </div>
                        <div>
                            <label htmlFor="idNome">Nome:</label>
                            <input type="text" name="nome" id="idNome"/>
                        </div>
                        <div>
                            <label htmlFor="idPreco">Preço:</label>
                            <input type="number" name="preco" id="idPreco"/>
                        </div>
                        <div>
                            <button onClick={handleAdd}>Adicionar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}