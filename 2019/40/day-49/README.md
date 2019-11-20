# Stacks

Lists are a natural form of organization for data. We have already seen how to use the List class to organize data into a list. When the order of the data being stored doesn’t matter, or when you don’t have to search the data stored, lists work wonderfully. For other applications, however, plain lists are too simple and we need a more complex, list-like data structure.

A list-like structure that can be used to solve many problems in computing is the stack. Stacks are efficient data structures because data can be added or removed only from the top of a stack, making these procedures fast and easy to implement. Stacks are used extensively in programming language implementations for everything from expression evaluation to handling function calls.

A stack is a list of elements that are accessible only from one end of the list, which is called the top. One common, real-world example of a stack is the stack of trays at a cafeteria. Trays are always removed from the top, and when trays are put back on the stack after being washed, they are placed on the top of the stack. The stack is known as a last-in, first-out (LIFO) data structure.

Because of the last-in, first-out nature of the stack, any element that is not currently at the top of the stack cannot be accessed. To get to an element at the bottom of the stack, you have to dispose of all the elements above it first.

The two primary operations of a stack are adding elements to a stack and taking elements off a stack. Elements are added to a stack using the push operation. Elements are taken off a stack using the pop operation. 
