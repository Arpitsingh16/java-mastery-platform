const miniProjectsModule = {
  id: 16,

  title: 'Integrated Mini Projects',

  slug: 'java-mini-projects',

  description:
    'Apply Java concepts by building practical console-based applications using OOP, file handling, collections, and exception management.',

  level: 'Intermediate',

  duration: '10 Hours',

  objectives: [
    'Combine OOP concepts with real-world applications',
    'Build interactive console applications',
    'Manage application state and user input',
    'Work with file persistence and data storage',
    'Handle exceptions in production-style applications',
    'Structure scalable Java applications cleanly',
  ],

  lessons: [
    {
      title: 'Architecting Console Applications',

      slug: 'architecting-monolithic-console-systems',

      folder: 'mini-projects',

      difficulty: 'Intermediate',

      readingTime: '15 mins',

      tags: ['architecture', 'clean-code', 'design'],
    },

    {
      title: 'Managing Interactive Menus and State',

      slug: 'managing-state-interactive-menus',

      folder: 'mini-projects',

      difficulty: 'Beginner',

      readingTime: '12 mins',

      tags: ['console', 'menus', 'state-management'],
    },

    {
      title: 'File Synchronization and Auto Saving',

      slug: 'file-system-synchronization-auto-saving',

      folder: 'mini-projects',

      difficulty: 'Intermediate',

      readingTime: '18 mins',

      tags: ['io', 'persistence', 'automation'],
    },
  ],

  exercises: [
    'Build a tabular report printer utility.',

    'Create a command parser for terminal inputs.',

    'Implement automatic file backups for application data.',

    'Design a reusable menu-driven console architecture.',
  ],

  miniTasks: [
    'Build a quiz engine using collections.',

    'Create a diagnostic logging system.',

    'Implement a simple expense tracker.',
  ],

  project: {
    title: 'Console Cryptography and Secret Manager',

    description:
      'Build an encrypted terminal vault application using file handling, custom exceptions, reusable utilities, and secure Java workflows.',

    difficulty: 'Intermediate',
  },
}

export default miniProjectsModule