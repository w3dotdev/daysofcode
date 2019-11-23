# Árvore

Uma árvore é uma estrutura de dados não linear que é usada para armazenar dados de maneira hierárquica. As estruturas de dados em árvore são usadas para armazenar dados hierárquicos, como os arquivos em um sistema de arquivos e para armazenar listas de dados ordenados.

## Árvore Binária

Os nós das árvores podem ter zero ou mais filhos. No entanto, quando uma árvore tem no máximo dois filhos, é chamada de árvore binária.

Dependendo de como os nós são organizados em uma árvore binária, ele pode estar cheio, completo e perfeito:

- **Árvore binária cheia**: cada nó tem exatamente 0 ou 2 filhos (mas nunca 1).
- **Árvore binária completa**: quando todos os níveis, exceto o último, estiverem cheios de nós.
- **Árvore binária perfeita**: quando todos os níveis (incluindo o último) estão cheios de nós.

## Árvore de Pesquisa Binária (BST)

As árvores de pesquisa binária (BST) são uma aplicação específica de árvores binárias. O BST possui no máximo dois nós (como todas as árvores binárias). No entanto, o filho esquerdo é sempre menor que o pai e o filho direito é sempre maior que o pai.

Da mesma forma que uma lista ligada, cada nó é referenciado por apenas um outro nó, seu pai (exceto para o nó raiz).

## Árvore AVL

A árvore AVL recebeu o nome de seus dois inventores soviéticos, Georgy Adelson-Velsky e Evgenii Landis, que a publicaram em seu artigo de 1962 "Um algoritmo para a organização da informação". As árvores AVL são árvores de pesquisa binária de balanceamento de altura. A árvore AVL verifica a altura das subárvores esquerda e direita, e garante que a diferença não seja maior que 1. Essa diferença é chamada de fator de balanceamento.
