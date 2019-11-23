# Maps (Dictionaries)

An associative array, map, symbol table, or dictionary is an abstract data type composed of a collection of (key, value) pairs, such that each possible key appears at most once in the collection. Note that a map is also known as a dictionary.

The dictionary problem is a classic computer science problem: the task of designing a data structure that maintains a set of data during 'search', 'insert', and 'delete' operations. There are many different types of implementations of dictionaries.


# Hash Table (Hash Map)

A Hash Table is a dictionary-like structure that pairs keys to values. The location in memory of each pair is determined by a hash function, which accepts a key and returns the address where the pair should be inserted and retrieved.

Collisions can result if two or more keys convert to the same address. For robustness, getters and setters should anticipate these events to ensure that all data can be recovered and no data is overwritten.
