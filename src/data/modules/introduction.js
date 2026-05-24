const introductionModule = {
  id: 1,

  title: 'Java Introduction',

  slug: 'java-introduction',

  level: 'Beginner',

  duration: '2-3 Hours',

  description:
    'Learn Java fundamentals, platform architecture, and setup.',

  objectives: [
    'Understand Java ecosystem',
    'Learn JVM, JDK, and JRE',
    'Set up Java environment',
    'Write first Java program',
  ],

  lessons: [
    {
      id: 1,

      title: 'What is Java?',

      slug: 'what-is-java',

      difficulty: 'Beginner',

      readingTime: '5 min',

      tags: [
        'java',
        'introduction',
        'basics',
      ],

      prerequisites: [],

      objectives: [
        'Understand Java purpose',
        'Learn Java advantages',
        'Write first program',
      ],
    },

    {
      id: 2,

      title: 'JDK vs JRE vs JVM',

      slug: 'jdk-jre-jvm',

      difficulty: 'Beginner',

      readingTime: '8 min',

      tags: [
        'jdk',
        'jre',
        'jvm',
      ],

      prerequisites: [
        'what-is-java',
      ],

      objectives: [
        'Understand JVM role',
        'Differentiate JDK/JRE',
      ],
    },

    {
      id: 3,

      title: 'Installing Java',

      slug: 'installing-java',

      difficulty: 'Beginner',

      readingTime: '6 min',

      tags: [
        'installation',
        'setup',
      ],

      prerequisites: [
        'jdk-jre-jvm',
      ],

      objectives: [
        'Install Java correctly',
        'Configure environment',
      ],
    },
  ],

  exercises: [
    'Explain JVM in your own words',
    'Install latest Java version',
    'Run Hello World program',
  ],

  miniTasks: [
    'Print your name',
    'Print your college',
    'Print current year',
  ],

  project: {
    title:
      'Java Environment Setup Project',

    description:
      'Set up a complete Java development environment and execute multiple console applications.',

    difficulty: 'Beginner',
  },
}

export default introductionModule