# Trie (digital tree)

A Trie is a tree data structure optimized for a specific type of searching. You use a Trie when you want to take a partial value and return a set of possible complete values. The classic example for this is an Autocomplete.

A trie, also called digital tree and sometimes radix tree or prefix tree,  is used to store a dynamic set or associative array where the keys are usually strings.

Unlike a binary search tree, no node in the tree stores the key associated with that node. Instead, its position in the tree defines the key with which it is associated.

All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string. Values are not necessarily associated with every node. Rather, values tend only to be associated with leaves, and with some inner nodes that correspond to keys of interest.
