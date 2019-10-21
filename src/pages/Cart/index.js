import React from "react";
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <img src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_detalhe1.jpg?resize=280:280" alt="Tênis"></img>
                        </td>
                        <td>
                            <strong>Tênis Adidas ultranovo</strong>
                            <span>R$200,00</span>
                        </td>
                        <td>
                            <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1"/>
                            </button>
                            <input type="number" readOnly value={1}/>
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1"/>
                            </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$258,00</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">
                    Finalizar pedido
                </button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$1950,00</strong>
                </Total>
            </footer>
        </Container>
    )
}