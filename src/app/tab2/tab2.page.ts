import { MuseumService } from './../museum.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import {Question} from 'src/app/museum.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule, CommonModule]
})
export class Tab2Page {

  constructor(private museumService: MuseumService, public navCtrl: NavController) {}
  
  public questions = this.museumService.getQuestions();

  currentQuestion: Question = {} as Question;
  showFeedback: boolean = false;
  feedbackMessage: string = "";
  feedbackDescription: string =  "";
  correctAnswers: number = 0;
  showScore: boolean = false;
  selectedAnswer: any = null;

  ionViewDidEnter() {
    this.startQuiz();
  }

  startQuiz() {
    this.questions = this.shuffleQuestions(this.questions);
    this.currentQuestion = this.questions[0];
  }

  shuffleQuestions(questions: Question[]) {
    let currentIndex = questions.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = questions[currentIndex];
      questions[currentIndex] = questions[randomIndex];
      questions[randomIndex] = temporaryValue;
    }

    return questions;
  }

  submitAnswer() {
    const selectedAnswers = this.currentQuestion.answers.filter(a => a.checked);
    if (selectedAnswers.length === 0) {
      this.feedbackMessage = 'Please select an answer.';
      this.showFeedback = true;
      return;
    }

    const selectedAnswer = selectedAnswers[0];
    if (selectedAnswer.checked && this.currentQuestion.correctAnswer === this.currentQuestion.answers.indexOf(selectedAnswer)) {
      this.feedbackMessage = 'Correct!';
      this.correctAnswers++;
    } else {
      this.feedbackMessage = 'Incorrect. The correct answer is: ' + this.currentQuestion.answers[this.currentQuestion.correctAnswer].text;
    }
    this.feedbackDescription = this.currentQuestion.description;
    this.showFeedback = true;

  }
  
  nextQuestion() {
    const currentIndex = this.questions.indexOf(this.currentQuestion);
    if (currentIndex === this.questions.length - 1) {
      this.showScore = true;
    } else {
      this.currentQuestion = this.questions[currentIndex + 1];
      this.showFeedback = false;
    }
  }

  restartQuiz() {
    this.showScore = false;
    this.showFeedback = false;
    this.correctAnswers = 0;
    this.startQuiz();
  }
  

}
