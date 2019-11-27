# Grafo

Uma estrutura de dados de grafo consiste em um conjunto de vértices (nó) conectados por arestas.

Pense no mapa de um estado brasileiro. Cada cidade está conectada com outras cidades por algum tipo de estrada. Um mapa é um tipo de grafo em que cada cidade é um vértice e uma estrada que liga duas cidades é uma aresta.

As arestas são definidas como um par (v1, v2), em que v1 e v2 são dois vértices em um grafo. Um vértice também pode ter um peso, que às vezes é chamado de custo.

Se as arestas são bidirecionais, temos um grafo não direcionado. Mas, se as arestas têm uma direção, temos um grafo direcionado. 

Um grafo pode ter ciclos, o que significa que, se você atravessar o nó, poderá obter o mesmo nó mais de uma vez. O grafo sem ciclos é chamado grafo acíclico.

Nem todos os vértices precisam estar conectados no grafo. Você pode ter nós isolados ou até subgrafos separados. Se todos os nós tiverem pelo menos uma aresta, temos um grafo conectado. Quando todos os nós estão conectados a todos os outros nós, temos um grafo completo.
