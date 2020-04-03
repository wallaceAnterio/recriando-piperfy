export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQEg0wTwpHQSKg/profile-displayphoto-shrink_100_100/0?e=1591228800&v=beta&t=kupNP8Ub73XuyTAxKZEFHhyG694hyf6PHsDmkw8lrNI'
            
          },
          {
            id: 2,
            content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
            labels: ['#7159c1'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQEg0wTwpHQSKg/profile-displayphoto-shrink_100_100/0?e=1591228800&v=beta&t=kupNP8Ub73XuyTAxKZEFHhyG694hyf6PHsDmkw8lrNI'
            
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQEg0wTwpHQSKg/profile-displayphoto-shrink_100_100/0?e=1591228800&v=beta&t=kupNP8Ub73XuyTAxKZEFHhyG694hyf6PHsDmkw8lrNI'
           
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQEg0wTwpHQSKg/profile-displayphoto-shrink_100_100/0?e=1591228800&v=beta&t=kupNP8Ub73XuyTAxKZEFHhyG694hyf6PHsDmkw8lrNI'
           
          },
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],            
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQEg0wTwpHQSKg/profile-displayphoto-shrink_100_100/0?e=1591228800&v=beta&t=kupNP8Ub73XuyTAxKZEFHhyG694hyf6PHsDmkw8lrNI'
           
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQEg0wTwpHQSKg/profile-displayphoto-shrink_100_100/0?e=1591228800&v=beta&t=kupNP8Ub73XuyTAxKZEFHhyG694hyf6PHsDmkw8lrNI'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'hhttps://media-exp1.licdn.com/dms/image/C4D03AQEg0wTwpHQSKg/profile-displayphoto-shrink_100_100/0?e=1591228800&v=beta&t=kupNP8Ub73XuyTAxKZEFHhyG694hyf6PHsDmkw8lrNI'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQEg0wTwpHQSKg/profile-displayphoto-shrink_100_100/0?e=1591228800&v=beta&t=kupNP8Ub73XuyTAxKZEFHhyG694hyf6PHsDmkw8lrNI'
            
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }