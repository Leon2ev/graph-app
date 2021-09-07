# [Graph or not to graph](https://leon2ev.github.io/graph-app/)
Application to check if a graph is red-blue colorable. A graph is red-blue colorable if two connected nodes have never the same color and the graph is a connected graph. A user should be able to enter a graph in a text area by typing some paths (a word is a node, a dash an edge and a new line or a comma a separation between paths).

## Some examples:
```
Input: a - b - c
Output: Is a connected and red-blue colorable graph

Input: a - b, f - g
Output: Is not a connected graph

Input: a - b - c - a
Output: Is a connected graph, but not red blue colorable

Input: a - b, c - d, b - c, a - d
Output: Is a connected and red-blue colorable graph
```

### Definitions:
Connected graph (from Wikipedia, [Graph](https://en.wikipedia.org/wiki/Connectivity_(graph_theory)) ) A graph is said to be connected if every pair of vertices in the graph is connected. This means that there is a path between every pair of vertices. An undirected graph that is not connected is called disconnected. An undirected graph G is therefore disconnected if there exist two vertices in G such that no path in G has these vertices as endpoints. A graph with just one vertex is connected. An edgeless graph with two or more vertices is disconnected.