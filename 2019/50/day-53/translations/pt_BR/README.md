# Mapas (Dicionários)

Um array associativo, mapa, tabela de símbolos ou dicionário é um tipo de dado abstrato composto por uma coleção de pares (chave, valor), de modo que cada chave possível apareça no máximo uma vez na coleção. Observe que um mapa também é conhecido como dicionário.

O problema de um dicionário é um problema clássico da ciência da computação: a tarefa de projetar uma estrutura de dados que mantém um conjunto de dados durante as operações de "pesquisa", "inserção" e "exclusão". Existem muitos tipos diferentes de implementações de dicionários.

# Tabela de hash (Mapa de hash)

Uma tabela de hash é uma estrutura semelhante a do dicionário que emparelha chaves com valores. A localização na memória de cada par é determinada por uma função hash, que aceita uma chave e retorna o endereço onde o par deve ser inserido e recuperado.

Podem ocorrer colisões se duas ou mais chaves forem convertidas no mesmo endereço. Para maior robustez, getters e setters devem antecipar esses eventos para garantir que todos os dados possam ser recuperados e que nenhum dado seja sobrescrito.
