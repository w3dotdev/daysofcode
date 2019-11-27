# Graph

A graph data structure consists of a set of vertices (node) connected by edges. 

Think of the map of a Brazilian state. Each city is connected with other cities by some kind of road. A map is a type of chart where each city is a vertex and a road that connects two cities is an edge.

Edges are defined as a pair (v1, v2), where v1 and v2 are two vertices in a graph. A vertex can also have a weight, which is sometimes called a cost. 

If the edges are bi-directional, then we have an undirected graph. But, if the edges have a direction, then we have a directed graph.

A graph can have cycles which means that if you traverse through the node, you could get the same node more than once. The graph without cycles is called acyclic graph.

Not all vertices have to be connected in the graph. You might have isolated nodes or even separated subgraphs. If all nodes have at least one edge, then we have a connected graph. When all nodes are connected to all other nodes, then we have a complete graph.
