interface Note {
    noteId: string;
    title: string;
    icon: string;
    authorId: string;
    note: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export const noteSeed: Note[] = [
    {
      noteId: "1",
      title: "Lembrete de Reunião",
      icon: "📅",
      authorId: "author1",
      note: "Reunião com o cliente às 10h.",
      createdAt: new Date("2024-03-15T08:00:00"),
      updatedAt: new Date("2024-03-15T08:30:00"),
    },
    {
      noteId: "2",
      title: "Inspiração do Dia",
      icon: "💡",
      authorId: "author2",
      note: "A criatividade está em todos os lugares, basta olhar ao redor.",
      createdAt: new Date("2024-03-14T10:00:00"),
      updatedAt: new Date("2024-03-15T09:45:00"),
    },
    {
      noteId: "3",
      title: "Lembrete de Aniversário",
      icon: "🎂",
      authorId: "author3",
      note: "Parabenizar o colega pelo aniversário hoje!",
      createdAt: new Date("2024-03-13T15:00:00"),
      updatedAt: new Date("2024-03-14T11:20:00"),
    },
    {
      noteId: "3",
      title: "Lembrete de Aniversário",
      icon: "🎂",
      authorId: "author3",
      note: "Parabenizar o colega pelo aniversário hoje!",
      createdAt: new Date("2024-03-13T15:00:00"),
      updatedAt: new Date("2024-03-14T11:20:00"),
    },
    {
      noteId: "3",
      title: "Lembrete de Aniversário",
      icon: "🎂",
      authorId: "author3",
      note: "Parabenizar o colega pelo aniversário hoje!",
      createdAt: new Date("2024-03-13T15:00:00"),
      updatedAt: new Date("2024-03-14T11:20:00"),
    },
    {
      noteId: "3",
      title: "Lembrete de Aniversário",
      icon: "🎂",
      authorId: "author3",
      note: "Parabenizar o colega pelo aniversário hoje!",
      createdAt: new Date("2024-03-13T15:00:00"),
      updatedAt: new Date("2024-03-14T11:20:00"),
    },
    {
      noteId: "3",
      title: "Lembrete de Aniversário",
      icon: "🎂",
      authorId: "author3",
      note: "Parabenizar o colega pelo aniversário hoje!",
      createdAt: new Date("2024-03-13T15:00:00"),
      updatedAt: new Date("2024-03-14T11:20:00"),
    },
    {
      noteId: "3",
      title: "Lembrete de Aniversário",
      icon: "🎂",
      authorId: "author3",
      note: "Parabenizar o colega pelo aniversário hoje!",
      createdAt: new Date("2024-03-13T15:00:00"),
      updatedAt: new Date("2024-03-14T11:20:00"),
    },
    // Adicione mais notas conforme necessário
  ];