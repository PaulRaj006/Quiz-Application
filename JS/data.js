const gkQuestions = {
  easy: [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Chennai", "New Delhi", "Kolkata"],
      answer: "New Delhi"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Who is known as the Father of the Nation in India?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "B. R. Ambedkar"],
      answer: "Mahatma Gandhi"
    },
    {
      question: "Which is the largest ocean in the world?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
      answer: "Tiger"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon River", "Nile River", "Ganga River", "Yangtze River"],
      answer: "Nile River"
    },
    {
      question: "Which is the largest country in the world by area?",
      options: ["Canada", "China", "Russia", "USA"],
      answer: "Russia"
    },
    {
      question: "How many days are there in a leap year?",
      options: ["365", "366", "364", "367"],
      answer: "366"
    }
  ],

  medium: [
    {
      question: "Which country hosted the 2016 Summer Olympics?",
      options: ["China", "Brazil", "Japan", "Russia"],
      answer: "Brazil"
    },
    {
      question: "Which vitamin is mainly produced when skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
      answer: "Vitamin D"
    },
    {
      question: "Which desert is the largest hot desert in the world?",
      options: ["Gobi", "Kalahari", "Sahara", "Arabian"],
      answer: "Sahara"
    },
    {
      question: "Which blood group is known as the universal donor?",
      options: ["A+", "AB+", "O-", "B-"],
      answer: "O-"
    },
    {
      question: "Who invented the telephone?",
      options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "James Watt"],
      answer: "Alexander Graham Bell"
    },
    {
      question: "What is the currency of Japan?",
      options: ["Won", "Yuan", "Yen", "Ringgit"],
      answer: "Yen"
    },
    {
      question: "Which is the smallest continent?",
      options: ["Europe", "Australia", "South America", "Antarctica"],
      answer: "Australia"
    },
    {
      question: "Which Indian state has the longest coastline?",
      options: ["Tamil Nadu", "Kerala", "Gujarat", "Andhra Pradesh"],
      answer: "Gujarat"
    },
    {
      question: "How many players are there in a cricket team?",
      options: ["10", "11", "12", "9"],
      answer: "11"
    },
    {
      question: "Which organ purifies blood in the human body?",
      options: ["Heart", "Kidney", "Liver", "Lungs"],
      answer: "Kidney"
    }
  ],

  hard: [
    {
      question: "Which is the deepest ocean trench in the world?",
      options: ["Java Trench", "Mariana Trench", "Puerto Rico Trench", "Peru-Chile Trench"],
      answer: "Mariana Trench"
    },
    {
      question: "Who wrote the book 'The Origin of Species'?",
      options: ["Charles Darwin", "Isaac Newton", "Albert Einstein", "Gregor Mendel"],
      answer: "Charles Darwin"
    },
    {
      question: "Which is the largest gland in the human body?",
      options: ["Pancreas", "Liver", "Thyroid", "Pituitary"],
      answer: "Liver"
    },
    {
      question: "Which element has the chemical symbol 'Ag'?",
      options: ["Gold", "Argon", "Silver", "Aluminium"],
      answer: "Silver"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Thailand", "Japan", "South Korea"],
      answer: "Japan"
    },
    {
      question: "The SI unit of electric current is?",
      options: ["Volt", "Ohm", "Ampere", "Watt"],
      answer: "Ampere"
    },
    {
      question: "Which Mughal emperor built the Taj Mahal?",
      options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
      answer: "Shah Jahan"
    },
    {
      question: "Which is the largest bone in the human body?",
      options: ["Femur", "Tibia", "Humerus", "Radius"],
      answer: "Femur"
    },
    {
      question: "Which planet has the highest number of known moons?",
      options: ["Jupiter", "Saturn", "Mars", "Neptune"],
      answer: "Saturn"
    },
    {
      question: "Who discovered penicillin?",
      options: ["Louis Pasteur", "Alexander Fleming", "Edward Jenner", "Joseph Lister"],
      answer: "Alexander Fleming"
    }
  ]
};

// Data structure question

const dataStructureQuestions = {
  easy: [
    {
      question: "What is a Data Structure?",
      options: [
        "A programming language",
        "A way to organize and store data",
        "An operating system",
        "A database"
      ],
      answer: "A way to organize and store data"
    },
    {
      question: "Which data structure follows the LIFO principle?",
      options: ["Queue", "Array", "Stack", "Linked List"],
      answer: "Stack"
    },
    {
      question: "Which data structure follows the FIFO principle?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue"
    },
    {
      question: "Which data structure stores elements in contiguous memory?",
      options: ["Array", "Linked List", "Tree", "Graph"],
      answer: "Array"
    },
    {
      question: "Which operation adds an element to a stack?",
      options: ["Pop", "Insert", "Push", "Delete"],
      answer: "Push"
    },
    {
      question: "Which operation removes an element from a stack?",
      options: ["Push", "Pop", "Peek", "Insert"],
      answer: "Pop"
    },
    {
      question: "Which operation removes an element from a queue?",
      options: ["Push", "Enqueue", "Dequeue", "Peek"],
      answer: "Dequeue"
    },
    {
      question: "Which data structure uses nodes connected by pointers?",
      options: ["Array", "Linked List", "Stack", "Queue"],
      answer: "Linked List"
    },
    {
      question: "Which data structure is mainly used to represent hierarchical data?",
      options: ["Queue", "Tree", "Stack", "Array"],
      answer: "Tree"
    },
    {
      question: "Which data structure is best for implementing recursion?",
      options: ["Queue", "Array", "Stack", "Graph"],
      answer: "Stack"
    }
  ],

  medium: [
    {
      question: "Which traversal visits Left, Root, Right in a binary tree?",
      options: ["Preorder", "Inorder", "Postorder", "Level Order"],
      answer: "Inorder"
    },
    {
      question: "Which traversal visits Root, Left, Right?",
      options: ["Postorder", "Preorder", "Inorder", "Level Order"],
      answer: "Preorder"
    },
    {
      question: "Which traversal visits Left, Right, Root?",
      options: ["Preorder", "Postorder", "Inorder", "Level Order"],
      answer: "Postorder"
    },
    {
      question: "Which searching algorithm requires sorted data?",
      options: ["Linear Search", "Binary Search", "Depth First Search", "Breadth First Search"],
      answer: "Binary Search"
    },
    {
      question: "What is the worst-case time complexity of Linear Search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      answer: "O(n)"
    },
    {
      question: "Which sorting algorithm repeatedly swaps adjacent elements?",
      options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
      answer: "Bubble Sort"
    },
    {
      question: "Which data structure is used for Breadth First Search (BFS)?",
      options: ["Stack", "Queue", "Array", "Tree"],
      answer: "Queue"
    },
    {
      question: "Which data structure is used for Depth First Search (DFS)?",
      options: ["Queue", "Stack", "Linked List", "Heap"],
      answer: "Stack"
    },
    {
      question: "Which data structure allows insertion and deletion from both ends?",
      options: ["Queue", "Stack", "Deque", "Tree"],
      answer: "Deque"
    },
    {
      question: "Which data structure represents relationships between objects?",
      options: ["Tree", "Graph", "Stack", "Queue"],
      answer: "Graph"
    }
  ],

  hard: [
    {
      question: "What is the average time complexity of Binary Search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
      answer: "O(log n)"
    },
    {
      question: "Which sorting algorithm has an average time complexity of O(n log n)?",
      options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
      answer: "Merge Sort"
    },
    {
      question: "Which tree is self-balancing?",
      options: ["Binary Tree", "AVL Tree", "General Tree", "Expression Tree"],
      answer: "AVL Tree"
    },
    {
      question: "What is the maximum number of children a binary tree node can have?",
      options: ["1", "2", "3", "Unlimited"],
      answer: "2"
    },
    {
      question: "Which data structure is commonly used to implement a priority queue?",
      options: ["Heap", "Array", "Stack", "Linked List"],
      answer: "Heap"
    },
    {
      question: "Which graph algorithm is used to find the shortest path?",
      options: ["Kruskal's", "Prim's", "Dijkstra's", "DFS"],
      answer: "Dijkstra's"
    },
    {
      question: "Which algorithm is used to find the Minimum Spanning Tree?",
      options: ["Binary Search", "Bubble Sort", "Prim's Algorithm", "Linear Search"],
      answer: "Prim's Algorithm"
    },
    {
      question: "Which notation is commonly used to express algorithm efficiency?",
      options: ["Alpha Notation", "Big O Notation", "Delta Notation", "Omega Symbol"],
      answer: "Big O Notation"
    },
    {
      question: "Which data structure is used in compiler syntax parsing?",
      options: ["Queue", "Stack", "Heap", "Array"],
      answer: "Stack"
    },
    {
      question: "Which traversal is commonly used to delete an entire binary tree?",
      options: ["Preorder", "Inorder", "Postorder", "Level Order"],
      answer: "Postorder"
    }
  ]
};

// Python question
const pythonQuestions = {
  easy: [
    {
      question: "Who developed the Python programming language?",
      options: ["James Gosling", "Dennis Ritchie", "Guido van Rossum", "Bjarne Stroustrup"],
      answer: "Guido van Rossum"
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "fun", "def", "define"],
      answer: "def"
    },
    {
      question: "Which symbol is used to write a comment in Python?",
      options: ["//", "#", "/* */", "<!-- -->"],
      answer: "#"
    },
    {
      question: "Which function is used to display output in Python?",
      options: ["echo()", "display()", "print()", "show()"],
      answer: "print()"
    },
    {
      question: "Which data type is used to store text in Python?",
      options: ["int", "float", "str", "bool"],
      answer: "str"
    },
    {
      question: "Which keyword is used to take user input in Python?",
      options: ["scan()", "cin", "input()", "read()"],
      answer: "input()"
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "%", "//"],
      answer: "**"
    },
    {
      question: "Which of the following is a mutable data type?",
      options: ["Tuple", "String", "List", "Integer"],
      answer: "List"
    },
    {
      question: "Which loop is used to iterate over a sequence in Python?",
      options: ["repeat", "foreach", "for", "loop"],
      answer: "for"
    },
    {
      question: "Which keyword is used to create a class in Python?",
      options: ["object", "class", "define", "new"],
      answer: "class"
    }
  ],

  medium: [
    {
      question: "Which function returns the length of a list?",
      options: ["count()", "size()", "len()", "length()"],
      answer: "len()"
    },
    {
      question: "What is the output of len('Python')?",
      options: ["5", "6", "7", "Error"],
      answer: "6"
    },
    {
      question: "Which keyword is used for exception handling?",
      options: ["catch", "try", "throw", "except"],
      answer: "try"
    },
    {
      question: "Which statement is used to exit a loop?",
      options: ["continue", "break", "pass", "return"],
      answer: "break"
    },
    {
      question: "Which collection stores unique values?",
      options: ["List", "Tuple", "Set", "Dictionary"],
      answer: "Set"
    },
    {
      question: "Which method adds an element to a list?",
      options: ["add()", "append()", "push()", "insertEnd()"],
      answer: "append()"
    },
    {
      question: "Which keyword is used to import a module?",
      options: ["include", "require", "import", "using"],
      answer: "import"
    },
    {
      question: "Which operator is used for floor division?",
      options: ["/", "//", "%", "**"],
      answer: "//"
    },
    {
      question: "Which function converts a string into an integer?",
      options: ["float()", "int()", "str()", "bool()"],
      answer: "int()"
    },
    {
      question: "Which method removes the last element from a list?",
      options: ["remove()", "delete()", "pop()", "clear()"],
      answer: "pop()"
    }
  ],

  hard: [
    {
      question: "Which keyword is used to create an anonymous function in Python?",
      options: ["func", "lambda", "anonymous", "def"],
      answer: "lambda"
    },
    {
      question: "What is the output type of range(5)?",
      options: ["List", "Tuple", "Range Object", "Set"],
      answer: "Range Object"
    },
    {
      question: "Which module is commonly used for mathematical functions?",
      options: ["random", "math", "os", "sys"],
      answer: "math"
    },
    {
      question: "Which keyword is used to inherit a class?",
      options: ["extends", "inherits", "class", "None (inheritance is done using parent class in brackets)"],
      answer: "None (inheritance is done using parent class in brackets)"
    },
    {
      question: "Which special method acts as a constructor in Python?",
      options: ["__main__()", "__start__()", "__init__()", "__create__()"],
      answer: "__init__()"
    },
    {
      question: "Which module is used to work with JSON data?",
      options: ["json", "xml", "pickle", "csv"],
      answer: "json"
    },
    {
      question: "Which built-in function returns the type of an object?",
      options: ["typeof()", "type()", "class()", "object()"],
      answer: "type()"
    },
    {
      question: "Which statement skips the current iteration of a loop?",
      options: ["break", "pass", "continue", "return"],
      answer: "continue"
    },
    {
      question: "Which method is used to add a key-value pair to a dictionary?",
      options: ["append()", "add()", "Assignment using key", "insert()"],
      answer: "Assignment using key"
    },
    {
      question: "Which file extension is used for Python source files?",
      options: [".java", ".js", ".py", ".cpp"],
      answer: ".py"
    }
  ]
};
