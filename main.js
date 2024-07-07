/*
155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

Ваша задача - реализовать стек, который поддерживает операции push, pop, top и получение минимального элемента за постоянное время.

Вот шаги, которые мы будем следовать:

1. Инициализируйте два стека в конструкторе: один для хранения всех элементов, другой для хранения минимальных элементов.
2. При добавлении элемента в стек, добавьте его в стек всех элементов. Если стек минимальных элементов пуст или новый элемент меньше или равен текущему минимальному элементу, добавьте его в стек минимальных элементов.
3. При удалении элемента из стека, удалите его из стека всех элементов. Если удаляемый элемент равен текущему минимальному элементу, удалите его из стека минимальных элементов.
4. При получении верхнего элемента стека, верните верхний элемент стека всех элементов.
5. При получении минимального элемента, верните верхний элемент стека минимальных элементов.

Your task is to implement a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Here are the steps we will follow:

1. Initialize two stacks in the constructor: one for storing all elements, another for storing the minimum elements.
2. When pushing an element into the stack, push it into the stack of all elements. If the stack of minimum elements is empty or the new element is less than or equal to the current minimum element, push it into the stack of minimum elements.
3. When popping an element from the stack, pop it from the stack of all elements. If the popped element is equal to the current minimum element, pop it from the stack of minimum elements.
4. When getting the top element of the stack, return the top element of the stack of all elements.
5. When getting the minimum element, return the top element of the stack of minimum elements.

*/

var MinStack = function () {
  // Инициализируем два стека: один для хранения всех элементов, другой для хранения минимальных элементов
  // Initialize two stacks: one for storing all elements, another for storing the minimum elements
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // Добавляем элемент в стек всех элементов
  // Push the element into the stack of all elements
  this.stack.push(val);

  // Если стек минимальных элементов пуст или новый элемент меньше или равен текущему минимальному элементу
  // If the stack of minimum elements is empty or the new element is less than or equal to the current minimum element
  if (this.minStack.length === 0 || val <= this.getMin()) {
    // Добавляем его в стек минимальных элементов
    // Push it into the stack of minimum elements
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // Удаляем элемент из стека всех элементов
  // Pop the element from the stack of all elements
  let val = this.stack.pop();

  // Если удаляемый элемент равен текущему минимальному элементу
  // If the popped element is equal to the current minimum element
  if (val === this.getMin()) {
    // Удаляем его из стека минимальных элементов
    // Pop it from the stack of minimum elements
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // Возвращаем верхний элемент стека всех элементов
  // Return the top element of the stack of all elements
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // Возвращаем верхний элемент стека минимальных элементов
  // Return the top element of the stack of minimum elements
  return this.minStack[this.minStack.length - 1];
};
