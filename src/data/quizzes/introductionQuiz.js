const introductionQuiz = [
  {
    id: 1,

    question:
      'What type of programming language is Java?',

    options: [
      'Procedural',
      'Markup',
      'Object-Oriented',
      'Assembly',
    ],

    correctAnswer: 'Object-Oriented',

    explanation:
      'Java is primarily an object-oriented programming language.',
  },

  {
    id: 2,

    question:
      'What does JVM stand for?',

    options: [
      'Java Variable Method',
      'Java Virtual Machine',
      'Java Verified Memory',
      'Java Visual Model',
    ],

    correctAnswer: 'Java Virtual Machine',

    explanation:
      'JVM stands for Java Virtual Machine. It runs Java bytecode.',
  },

  {
    id: 3,

    question:
      'Which component is used to compile Java code?',

    options: [
      'JRE',
      'JVM',
      'JDK',
      'JAR',
    ],

    correctAnswer: 'JDK',

    explanation:
      'The JDK contains the Java compiler and development tools.',
  },

  {
    id: 4,

    question:
      'Which command is used to compile a Java file?',

    options: [
      'java Main.java',
      'javac Main.java',
      'compile Main.java',
      'run Main.java',
    ],

    correctAnswer: 'javac Main.java',

    explanation:
      'javac is the Java compiler command used to compile Java source code.',
  },

  {
    id: 5,

    question:
      'Why is Java platform independent?',

    options: [
      'Because it uses assembly',
      'Because it runs on JVM',
      'Because it uses HTML',
      'Because it only runs on Windows',
    ],

    correctAnswer: 'Because it runs on JVM',

    explanation:
      'Java bytecode runs on the JVM, allowing Java programs to work across platforms.',
  },
]

export default introductionQuiz