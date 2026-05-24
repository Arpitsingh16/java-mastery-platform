export const projects = [
  {
    id: 1,

    slug: 'calculator-app',

    title: 'Calculator App',

    level: 'Beginner',

    module: 'Operators',

    duration: '2-3 Hours',

    technologies: [
      'Java',
      'Scanner',
      'Methods',
    ],

    description:
      'Build a console-based calculator application using Java operators and methods.',

    objective:
      'Learn Java fundamentals by building a real interactive calculator.',

    features: [
      'Addition',
      'Subtraction',
      'Multiplication',
      'Division',
      'Menu system',
      'User input handling',
    ],

    concepts: [
      'Variables',
      'Operators',
      'Methods',
      'Control Flow',
      'Scanner Class',
    ],

    folderStructure: `
calculator-app/
│
├── src/
│   └── Main.java
│
└── README.md
    `,

    steps: [
      'Create Java project',
      'Initialize Scanner',
      'Create menu system',
      'Implement arithmetic methods',
      'Handle invalid input',
      'Loop calculator menu',
    ],

    challenges: [
      'Add percentage calculation',
      'Add power operation',
      'Add square root',
      'Store calculation history',
    ],
  },

  {
    id: 2,

    slug: 'library-management-system',

    title: 'Library Management System',

    level: 'Intermediate',

    module: 'OOP',

    duration: '1-2 Days',

    technologies: [
      'Java',
      'OOP',
      'Collections',
    ],

    description:
      'Create a complete object-oriented library management system.',

    objective:
      'Understand classes, objects, inheritance, and encapsulation.',

    features: [
      'Add books',
      'Issue books',
      'Return books',
      'Search books',
      'Book inventory',
    ],

    concepts: [
      'Classes',
      'Objects',
      'Inheritance',
      'ArrayList',
      'Methods',
    ],

    folderStructure: `
library-management-system/
│
├── src/
│   ├── Book.java
│   ├── User.java
│   ├── Library.java
│   └── Main.java
│
└── README.md
    `,

    steps: [
      'Design Book class',
      'Create Library class',
      'Implement inventory system',
      'Add search functionality',
      'Create menu interface',
    ],

    challenges: [
      'Add file storage',
      'Add due dates',
      'Add admin login',
      'Add categories',
    ],
  },

  {
    id: 3,

    slug: 'student-record-system',

    title: 'Student Record System',

    level: 'Intermediate',

    module: 'Collections',

    duration: '4-5 Hours',

    technologies: [
      'Java',
      'Collections',
      'ArrayList',
    ],

    description:
      'Manage student records using Java collections.',

    objective:
      'Master collections framework and object management.',

    features: [
      'Add students',
      'Update records',
      'Delete students',
      'Search students',
      'Sort students',
    ],

    concepts: [
      'ArrayList',
      'Objects',
      'Sorting',
      'Searching',
      'Loops',
    ],

    folderStructure: `
student-record-system/
│
├── src/
│   ├── Student.java
│   ├── StudentManager.java
│   └── Main.java
│
└── README.md
    `,

    steps: [
      'Create Student model',
      'Implement ArrayList storage',
      'Add CRUD operations',
      'Implement sorting',
      'Create CLI menu',
    ],

    challenges: [
      'Add file persistence',
      'Add GPA calculator',
      'Add ranking system',
      'Export CSV data',
    ],
  },
]