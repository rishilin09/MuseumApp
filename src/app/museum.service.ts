import { Injectable } from '@angular/core';

export interface Answer {
  text: string;
  checked: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
  correctAnswer: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class MuseumService {

  constructor() {}

  private artifacts = [
    {
      name: 'Lion Mosaic',
      description: 'This is a mosaic of a lion built with marble stones',
      img: './assets/img/mosaic-lion.jpg'
    },
    {
      name: 'Ancient Vase',
      description: 'This is a beautifully crafted vase from the ancient times',
      img: './assets/img/ancient-vase.jpg'
    },
    {
      name: 'The Mona Lisa',
      description: 'One of the most famous paintings in the world',
      img: './assets/img/mona-lisa.jpg'
    },
    {
      name: 'Terracotta Army',
      description: 'A collection of terracotta sculptures depicting the armies of Qin Shi Huang',
      img: './assets/img/terracotta-army.jpg'
    },
    {
      name: 'Egyptian Sphinx',
      description: 'A limestone statue of a mythical creature with a lion\'s body and a human head',
      img: './assets/img/egyptian-sphinx.jpg'
    },
    {
      name: 'The Thinker',
      description: 'A bronze sculpture of a man deep in thought, created by Auguste Rodin',
      img: './assets/img/the-thinker.jpg'
    },
    {
      name: 'Starry Night',
      description: 'A painting by Vincent van Gogh that depicts the view from his asylum room',
      img: './assets/img/starry-night.jpg'
    },
    {
      name: 'David',
      description: 'A masterpiece of Renaissance sculpture created by Michelangelo',
      img: './assets/img/david.jpg'
    },
    {
      name: 'The Last Supper',
      description: 'A late 15th-century mural painting by Leonardo da Vinci depicting the last supper of Jesus with his disciples',
      img: './assets/img/the-last-supper.png'
    },
    {
      name: 'The Great Wave off Kanagawa',
      description: 'A woodblock print by the Japanese artist Hokusai, showing a giant wave towering over boats near the Japanese prefecture of Kanagawa',
      img: './assets/img/great-wave.jpg'
    }
  ];


  private questions: Question[] = [
    {
      question: 'Who painted the Mona Lisa?',
      answers: [
        { text: 'Leonardo da Vinci', checked: false },
        { text: 'Vincent van Gogh', checked: false },
        { text: 'Pablo Picasso', checked: false },
      ],
      correctAnswer: 0,
      description: 'The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. It is considered one of the most famous and iconic paintings in the world.'
    },
    {
      question: 'What is the name of the painting that features a melting clock?',
      answers: [
        { text: 'The Persistence of Memory', checked: false },
        { text: 'Starry Night', checked: false },
        { text: 'Les Demoiselles d\'Avignon', checked: false },
      ],
      correctAnswer: 0,
      description: 'The Persistence of Memory is a painting by Spanish artist Salvador Dali. It is known for its melting clocks, which have become a symbol of the concept of time.'
    },
    {
      question: 'Which artist is famous for his colorful, abstract paintings?',
      answers: [
        { text: 'Salvador Dali', checked: false },
        { text: 'Henri Matisse', checked: false },
        { text: 'Wassily Kandinsky', checked: false },
      ],
      correctAnswer: 2,
      description: 'Wassily Kandinsky was a Russian painter and art theorist who is credited with being one of the pioneers of abstract art. His works are characterized by their bold colors and geometric shapes.'
    },
    {
      question: 'Who created the sculpture David?',
      answers: [
        { text: 'Donatello', checked: false },
        { text: 'Michelangelo', checked: false },
        { text: 'Leonardo da Vinci', checked: false },
      ],
      correctAnswer: 1,
      description: 'David is a masterpiece of Renaissance sculpture created by Italian artist Michelangelo. It depicts the biblical figure of David, who defeated the giant Goliath with a single stone.'
    },
    {
      question: 'What is the name of the Dutch painter who created The Night Watch?',
      answers: [
        { text: 'Rembrandt', checked: false },
        { text: 'Johannes Vermeer', checked: false },
        { text: 'Vincent van Gogh', checked: false },
      ],
      correctAnswer: 0,
      description: 'The Night Watch is a painting by Dutch artist Rembrandt van Rijn. It is considered one of his most famous works and is notable for its use of light and shadow to create depth and drama.'
    },
    {
      question: 'Which art movement was led by Salvador Dali?',
      answers: [
        { text: 'Cubism', checked: false },
        { text: 'Surrealism', checked: false },
        { text: 'Impressionism', checked: false },
      ],
      correctAnswer: 1,
      description: 'Surrealism was an art movement that began in the 1920s and was led by French poet André Breton. It emphasized the irrational and the unconscious, and often used dreamlike imagery and symbolism.'
    },
    {
      question: 'Who painted the Sistine Chapel ceiling?',
      answers: [
        { text: 'Leonardo da Vinci', checked: false },
        { text: 'Raphael', checked: false },
        { text: 'Michelangelo', checked: false},
      ],
      correctAnswer: 2,
      description: 'The Sistine Chapel ceiling was painted by Michelangelo, one of the greatest artists of the Italian Renaissance. It took him four years to complete the work, which depicts scenes from the Book of Genesis.'
    },
    {
      question: 'Which artist painted The Scream?',
      answers: [
        { text: 'Edvard Munch', checked: false },
        { text: 'Pablo Picasso', checked: false },
        { text: 'Vincent van Gogh', checked: false },
      ],
      correctAnswer: 0,
      description: 'The Scream is a famous painting by the Norwegian artist Edvard Munch. It depicts a person screaming in anguish and has become an iconic symbol of existential angst.'
    },
    {
      question: 'What is the name of the French painter who is famous for his water lily paintings?',
      answers: [
        { text: 'Claude Monet', checked: false },
        { text: 'Georges Seurat', checked: false },
        { text: 'Paul Cézanne', checked: false },
      ],
      correctAnswer: 0,
      description: 'Claude Monet was a French painter and one of the founders of the Impressionist movement. He is best known for his series of paintings featuring water lilies and the Japanese bridge in his garden at Giverny.'
    },
    {
      question: 'Which Renaissance artist painted the ceiling of the Sistine Chapel?',
      answers: [
        { text: 'Michelangelo', checked: false },
        { text: 'Leonardo da Vinci', checked: false },
        { text: 'Raphael', checked: false },
      ],
      correctAnswer: 0,
      description: 'The ceiling of the Sistine Chapel in the Vatican was painted by Michelangelo. It is one of the most famous works of art in the world and features scenes from the Book of Genesis.'
    }
  ];
  
  private exhibitions = [
    {
      title: 'Modern Art Exhibition',
      date: new Date('2023-05-01').toDateString(),
      location: 'National Gallery of Art'
    },
    {
      title: 'Impressionist Paintings',
      date: new Date('2023-06-15').toDateString(),
      location: 'Metropolitan Museum of Art'
    },
    {
      title: 'Ancient Egyptian Artifacts',
      date: new Date('2023-07-20').toDateString(),
      location: 'British Museum'
    },
    {
      title: 'Contemporary Sculptures',
      date: new Date('2023-08-10').toDateString(),
      location: 'Tate Modern'
    },
    {
      title: 'Renaissance Masterpieces',
      date: new Date('2023-09-25').toDateString(),
      location: 'Uffizi Gallery'
    },
    {
      title: 'Asian Art Collection',
      date: new Date('2023-10-30').toDateString(),
      location: 'Tokyo National Museum'
    }
  ];
  

  public getExhibitions(){
    return this.exhibitions;
  }

  public getArtifacts() {
    return this.artifacts;
  }

  public getQuestions(){
    return this.questions;
  }


}
