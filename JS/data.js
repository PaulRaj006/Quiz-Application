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

//HTML (easy,medium,hard) :
const htmlQuestions = {
  easy: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to create the largest heading?",
      options: ["<h6>", "<heading>", "<h1>", "<head>"],
      answer: "<h1>"
    },
    {
      question: "Which HTML tag is used to create a paragraph?",
      options: ["<para>", "<p>", "<text>", "<paragraph>"],
      answer: "<p>"
    },
    {
      question: "Which tag is used to insert an image?",
      options: ["<picture>", "<image>", "<img>", "<src>"],
      answer: "<img>"
    },
    {
      question: "Which attribute specifies the image path?",
      options: ["href", "src", "link", "path"],
      answer: "src"
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "Which tag creates a line break?",
      options: ["<lb>", "<break>", "<br>", "<hr>"],
      answer: "<br>"
    },
    {
      question: "Which tag is used to create an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      answer: "<ul>"
    },
    {
      question: "Which tag represents a list item?",
      options: ["<item>", "<li>", "<ul>", "<ol>"],
      answer: "<li>"
    },
    {
      question: "Which tag is used to create a table row?",
      options: ["<td>", "<tr>", "<th>", "<table>"],
      answer: "<tr>"
    }
  ],

  medium: [
    {
      question: "Which HTML5 tag is used for navigation links?",
      options: ["<section>", "<nav>", "<header>", "<aside>"],
      answer: "<nav>"
    },
    {
      question: "Which tag is used for the main content of a webpage?",
      options: ["<article>", "<main>", "<section>", "<body>"],
      answer: "<main>"
    },
    {
      question: "Which HTML element is used to collect user input?",
      options: ["<input>", "<form>", "<textarea>", "<button>"],
      answer: "<form>"
    },
    {
      question: "Which input type hides the entered characters?",
      options: ["text", "email", "password", "hidden"],
      answer: "password"
    },
    {
      question: "Which tag defines a table header cell?",
      options: ["<td>", "<th>", "<tr>", "<thead>"],
      answer: "<th>"
    },
    {
      question: "Which tag is used to define the footer of a webpage?",
      options: ["<bottom>", "<footer>", "<section>", "<end>"],
      answer: "<footer>"
    },
    {
      question: "Which attribute provides alternative text for an image?",
      options: ["title", "alt", "name", "src"],
      answer: "alt"
    },
    {
      question: "Which HTML tag is used to embed a video?",
      options: ["<media>", "<movie>", "<video>", "<embedvideo>"],
      answer: "<video>"
    },
    {
      question: "Which tag groups related form elements?",
      options: ["<fieldset>", "<legend>", "<group>", "<section>"],
      answer: "<fieldset>"
    },
    {
      question: "Which HTML element is used for semantic independent content?",
      options: ["<div>", "<article>", "<span>", "<section>"],
      answer: "<article>"
    }
  ],

  hard: [
    {
      question: "Which HTML5 element is used to draw graphics using JavaScript?",
      options: ["<svg>", "<canvas>", "<graphic>", "<draw>"],
      answer: "<canvas>"
    },
    {
      question: "Which attribute makes an input field mandatory?",
      options: ["validate", "required", "mandatory", "needed"],
      answer: "required"
    },
    {
      question: "Which HTML tag specifies metadata?",
      options: ["<meta>", "<data>", "<head>", "<info>"],
      answer: "<meta>"
    },
    {
      question: "Which HTML element is used to define machine-readable date and time?",
      options: ["<calendar>", "<datetime>", "<time>", "<clock>"],
      answer: "<time>"
    },
    {
      question: "Which HTML tag is used to embed external web content?",
      options: ["<iframe>", "<embed>", "<frame>", "<object>"],
      answer: "<iframe>"
    },
    {
      question: "Which HTML attribute specifies a unique identifier?",
      options: ["class", "id", "name", "key"],
      answer: "id"
    },
    {
      question: "Which semantic tag represents content related indirectly to the main content?",
      options: ["<article>", "<aside>", "<section>", "<main>"],
      answer: "<aside>"
    },
    {
      question: "Which HTML tag is commonly used to create dropdown lists?",
      options: ["<list>", "<option>", "<select>", "<dropdown>"],
      answer: "<select>"
    },
    {
      question: "Which HTML5 input type is used for email validation?",
      options: ["mail", "email", "text", "address"],
      answer: "email"
    },
    {
      question: "Which declaration tells the browser to use HTML5?",
      options: [
        "<!DOCTYPE html>",
        "<html5>",
        "<doctype>",
        "<HTML>"
      ],
      answer: "<!DOCTYPE html>"
    }
  ]
};

//CSS (easy,medium,hard) :
const cssQuestions = {
  easy: [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which HTML tag is used to link an external CSS file?",
      options: ["<css>", "<style>", "<link>", "<script>"],
      answer: "<link>"
    },
    {
      question: "Which property is used to change the text color?",
      options: ["font-color", "color", "text-color", "foreground"],
      answer: "color"
    },
    {
      question: "Which property changes the background color?",
      options: ["bgcolor", "background-color", "background", "color"],
      answer: "background-color"
    },
    {
      question: "Which property changes the font size?",
      options: ["text-size", "font-style", "font-size", "size"],
      answer: "font-size"
    },
    {
      question: "Which property makes text bold?",
      options: ["font-weight", "font-style", "text-bold", "weight"],
      answer: "font-weight"
    },
    {
      question: "Which property aligns text horizontally?",
      options: ["align", "text-align", "justify", "font-align"],
      answer: "text-align"
    },
    {
      question: "Which selector selects all elements?",
      options: [".", "#", "*", "&"],
      answer: "*"
    },
    {
      question: "Which symbol is used for an ID selector?",
      options: [".", "#", "*", "$"],
      answer: "#"
    },
    {
      question: "Which symbol is used for a class selector?",
      options: [".", "#", "@", "*"],
      answer: "."
    }
  ],

  medium: [
    {
      question: "Which CSS property is used to create space inside an element?",
      options: ["margin", "padding", "spacing", "border"],
      answer: "padding"
    },
    {
      question: "Which property creates space outside an element?",
      options: ["margin", "padding", "gap", "space"],
      answer: "margin"
    },
    {
      question: "Which property rounds the corners of an element?",
      options: ["corner-radius", "radius", "border-radius", "round"],
      answer: "border-radius"
    },
    {
      question: "Which display value makes an element a flex container?",
      options: ["inline", "block", "grid", "flex"],
      answer: "flex"
    },
    {
      question: "Which property is used to add a shadow around an element?",
      options: ["text-shadow", "box-shadow", "shadow", "drop-shadow"],
      answer: "box-shadow"
    },
    {
      question: "Which property changes the transparency of an element?",
      options: ["opacity", "visibility", "display", "alpha"],
      answer: "opacity"
    },
    {
      question: "Which CSS property changes the mouse cursor style?",
      options: ["pointer", "cursor", "mouse", "hover"],
      answer: "cursor"
    },
    {
      question: "Which property is used to control the stacking order of elements?",
      options: ["order", "position", "z-index", "layer"],
      answer: "z-index"
    },
    {
      question: "Which CSS property specifies the type of positioning?",
      options: ["display", "position", "float", "align"],
      answer: "position"
    },
    {
      question: "Which value keeps an element fixed even while scrolling?",
      options: ["absolute", "relative", "fixed", "sticky"],
      answer: "fixed"
    }
  ],

  hard: [
    {
      question: "Which CSS layout module is mainly used for two-dimensional layouts?",
      options: ["Flexbox", "Grid", "Float", "Position"],
      answer: "Grid"
    },
    {
      question: "Which Flexbox property aligns items horizontally?",
      options: [
        "align-items",
        "justify-content",
        "align-content",
        "flex-direction"
      ],
      answer: "justify-content"
    },
    {
      question: "Which Flexbox property aligns items vertically?",
      options: [
        "align-items",
        "justify-content",
        "display",
        "flex-wrap"
      ],
      answer: "align-items"
    },
    {
      question: "Which CSS unit is relative to the root element's font size?",
      options: ["px", "em", "rem", "%"],
      answer: "rem"
    },
    {
      question: "Which pseudo-class applies styles when the mouse is over an element?",
      options: [":focus", ":hover", ":active", ":visited"],
      answer: ":hover"
    },
    {
      question: "Which pseudo-class styles a clicked link?",
      options: [":hover", ":visited", ":active", ":focus"],
      answer: ":active"
    },
    {
      question: "Which property is used to animate CSS changes smoothly?",
      options: ["animation", "transition", "transform", "effect"],
      answer: "transition"
    },
    {
      question: "Which CSS function rotates an element?",
      options: [
        "rotate()",
        "translate()",
        "scale()",
        "skew()"
      ],
      answer: "rotate()"
    },
    {
      question: "Which property is used to define keyframe animations?",
      options: [
        "@animation",
        "@transition",
        "@keyframes",
        "@frames"
      ],
      answer: "@keyframes"
    },
    {
      question: "Which CSS property is used to change the order of flex items?",
      options: [
        "position",
        "order",
        "z-index",
        "flex-order"
      ],
      answer: "order"
    }
  ]
};

// Java Script (easy,medium,hard) :
const javascriptQuestions = {
  easy: [
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "Apple"],
      answer: "Netscape"
    },
    {
      question: "Which keyword is used to declare a variable in modern JavaScript?",
      options: ["var", "let", "Both var and let", "int"],
      answer: "Both var and let"
    },
    {
      question: "Which function is used to display output in the browser console?",
      options: ["print()", "console.log()", "display()", "write()"],
      answer: "console.log()"
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: ["<!-- -->", "#", "//", "/* */"],
      answer: "//"
    },
    {
      question: "Which keyword declares a constant variable?",
      options: ["constant", "let", "const", "var"],
      answer: "const"
    },
    {
      question: "Which method displays a popup message?",
      options: ["prompt()", "alert()", "confirm()", "popup()"],
      answer: "alert()"
    },
    {
      question: "Which function is used to get user input using a popup?",
      options: ["alert()", "input()", "prompt()", "confirm()"],
      answer: "prompt()"
    },
    {
      question: "Which keyword is used to define a function?",
      options: ["function", "func", "define", "method"],
      answer: "function"
    },
    {
      question: "Which operator is used for strict equality?",
      options: ["=", "==", "===", "!="],
      answer: "==="
    },
    {
      question: "Which object represents the current webpage?",
      options: ["window", "document", "screen", "history"],
      answer: "document"
    }
  ],

  medium: [
    {
      question: "Which method selects an element by its ID?",
      options: [
        "querySelector()",
        "getElementById()",
        "getElementsByClassName()",
        "getElement()"
      ],
      answer: "getElementById()"
    },
    {
      question: "Which method selects the first matching CSS selector?",
      options: [
        "querySelector()",
        "querySelectorAll()",
        "getElementById()",
        "findElement()"
      ],
      answer: "querySelector()"
    },
    {
      question: "Which method returns all matching elements?",
      options: [
        "querySelector()",
        "querySelectorAll()",
        "getElement()",
        "selectAll()"
      ],
      answer: "querySelectorAll()"
    },
    {
      question: "Which event occurs when a button is clicked?",
      options: ["mouseover", "click", "submit", "keydown"],
      answer: "click"
    },
    {
      question: "Which loop repeats while a condition is true?",
      options: ["for", "foreach", "while", "repeat"],
      answer: "while"
    },
    {
      question: "Which array method adds an element at the end?",
      options: ["pop()", "shift()", "push()", "unshift()"],
      answer: "push()"
    },
    {
      question: "Which array method removes the last element?",
      options: ["pop()", "shift()", "slice()", "splice()"],
      answer: "pop()"
    },
    {
      question: "Which statement skips the current loop iteration?",
      options: ["break", "continue", "return", "exit"],
      answer: "continue"
    },
    {
      question: "Which keyword exits a loop immediately?",
      options: ["continue", "return", "break", "stop"],
      answer: "break"
    },
    {
      question: "Which method converts JSON text into a JavaScript object?",
      options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.convert()",
        "JSON.object()"
      ],
      answer: "JSON.parse()"
    }
  ],

  hard: [
    {
      question: "Which method converts a JavaScript object into a JSON string?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.object()",
        "JSON.encode()"
      ],
      answer: "JSON.stringify()"
    },
    {
      question: "Which keyword is used to create a class?",
      options: ["object", "prototype", "class", "constructor"],
      answer: "class"
    },
    {
      question: "Which keyword is used to inherit a class?",
      options: ["implements", "extends", "inherits", "super"],
      answer: "extends"
    },
    {
      question: "Which keyword refers to the parent class constructor?",
      options: ["parent", "base", "super", "this"],
      answer: "super"
    },
    {
      question: "Which keyword refers to the current object?",
      options: ["self", "current", "this", "object"],
      answer: "this"
    },
    {
      question: "Which method is used to fetch data from an API?",
      options: ["get()", "ajax()", "fetch()", "request()"],
      answer: "fetch()"
    },
    {
      question: "Which keyword is used to handle asynchronous code?",
      options: ["sync", "await", "pause", "wait"],
      answer: "await"
    },
    {
      question: "Which keyword declares an asynchronous function?",
      options: ["await", "promise", "async", "delay"],
      answer: "async"
    },
    {
      question: "Which storage keeps data even after the browser is closed?",
      options: [
        "sessionStorage",
        "localStorage",
        "cookieStorage",
        "memoryStorage"
      ],
      answer: "localStorage"
    },
    {
      question: "Which storage clears automatically when the browser tab is closed?",
      options: [
        "localStorage",
        "sessionStorage",
        "cookies",
        "database"
      ],
      answer: "sessionStorage"
    }
  ]
};