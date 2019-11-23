# Tree

A tree is a nonlinear data structure that is used to store data in a hierarchical manner. Tree data structures are used to store hierarchical data, such as the files in a file system, and for storing sorted lists of data.

## Binary Tree

Trees nodes can have zero or more children. However, when a tree has at the most two children, then it’s called binary tree.

Depending on how nodes are arranged in a binary tree, it can be full, complete and perfect:

- **Full binary tree**: each node has exactly 0 or 2 children (but never 1).
- **Complete binary tree**: when all levels except the last one are full with nodes.
- **Perfect binary tree**: when all the levels (including the last one) are full of nodes.

## Binary Search Tree (BST)

Binary Search Trees (BST) are a particular application of binary trees. BST has at most two nodes (like all binary trees). However, the left children is always smaller than its parent and the right children is always greater than its parent.

Similarly to a linked list, each node is referenced by only one other node, its parent (except for the root node). 

## AVL Tree

The AVL tree is named after its two Soviet inventors, Georgy Adelson-Velsky and Evgenii Landis, who published it in their 1962 paper "An algorithm for the organization of information". AVL trees are height balancing binary search tree. AVL tree checks the height of the left and the right sub-trees and assures that the difference is not more than 1. This difference is called the Balance Factor.
