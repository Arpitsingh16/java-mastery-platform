const oopModule = {
  id: 7,

  title: 'Object-Oriented Programming (OOP)',

  slug: 'oop-java',

  description:
    'Master the core pillars of Object-Oriented Programming in Java including classes, objects, inheritance, polymorphism, abstraction, and encapsulation.',

  level: 'Beginner',

  duration: '6 Hours',

  objectives: [
    'Understand classes and objects',
    'Implement encapsulation using access modifiers',
    'Use inheritance for code reuse',
    'Apply runtime polymorphism',
    'Understand abstraction and interfaces',
    'Design maintainable object-oriented systems',
  ],

  lessons: [
    {
      title: 'Classes and Objects',

      slug: 'classes-and-objects',

      folder: 'oop',

      difficulty: 'Beginner',

      readingTime: '12 mins',

      tags: ['oop', 'basics'],
    },

    {
      title: 'Constructors in Java',

      slug: 'constructors',

      folder: 'oop',

      difficulty: 'Beginner',

      readingTime: '10 mins',

      tags: ['constructors', 'initialization'],
    },

    {
      title: 'Inheritance',

      slug: 'inheritance',

      folder: 'oop',

      difficulty: 'Beginner',

      readingTime: '15 mins',

      tags: ['inheritance', 'extends'],
    },

    {
      title: 'Polymorphism',

      slug: 'polymorphism',

      folder: 'oop',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['polymorphism', 'runtime'],
    },

    {
      title: 'Encapsulation',

      slug: 'encapsulation',

      folder: 'oop',

      difficulty: 'Beginner',

      readingTime: '10 mins',

      tags: ['encapsulation', 'access-modifiers'],
    },

    {
      title: 'Abstraction',

      slug: 'abstraction',

      folder: 'oop',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['abstraction', 'abstract-class'],
    },

    {
      title: 'Interfaces',

      slug: 'interfaces',

      folder: 'oop',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['interfaces', 'contracts'],
    },

    {
      title: 'Method Overriding',

      slug: 'method-overriding',

      folder: 'oop',

      difficulty: 'Intermediate',

      readingTime: '12 mins',

      tags: ['overriding', 'polymorphism'],
    },
  ],

  exercises: [
    'Create an abstract Shape hierarchy with polymorphic area calculations.',

    'Build a vehicle inheritance system using constructors.',

    'Implement multiple interfaces in a single class.',

    'Override equals() and toString() methods properly.',
  ],

  miniTasks: [
    'Refactor conditional logic into polymorphic object behavior.',

    'Build an employee management system using OOP.',

    'Create reusable utility classes with encapsulation.',
  ],

  project: {
    title: 'Fantasy RPG Battle Simulator',

    description:
      'Build a modular RPG battle engine using inheritance, interfaces, polymorphism, and encapsulated game logic.',

    difficulty: 'Beginner',
  },
}

export default oopModule