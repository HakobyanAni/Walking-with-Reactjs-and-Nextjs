import React from 'react';
import Data from '../database-store/questions-database-store.json';
import Router from 'next/router';

class Levels extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questId: 0,
            question: '',
            answerOptions: [],
            answer: '',
            score: 0
        }
    }

    static async getInitialProps(context) {
        return { questionId: context.query.Id }
    }

    componentDidMount() {
        this.setState({
            questId: Data[this.props.questionId - 1].Id,
            question: Data[this.props.questionId - 1].Question,
            answerOptions: Data[this.props.questionId - 1].AnswerOptions,
            answer: Data[this.props.questionId - 1].Answer,
            score: Data[this.props.questionId - 1].Score
        })
    }

    OnOptionClicked = answer => {
        if (answer === this.state.answer) {
            if (this.state.questId === Data[Data.length - 1].Id) {
                Router.push('/winnerPage');
            }
            else{
                var tempId = this.state.questId
                this.setState({
                    questId: Data[tempId].Id,
                    question: Data[tempId].Question,
                    answerOptions: Data[tempId].AnswerOptions,
                    answer: Data[tempId].Answer,
                    score: this.state.score + Data[tempId].Score
                })
            }
        }
        else {
            Router.push('/gameOver');
        }
    }

    render() {
        return (
            <div className='BoardPage'>

                <div className='FirstBlockStyle'>
                    <h3 className='QuestionStyle'><strong>QUSETION     {this.state.questId}</strong></h3>
                </div>

                <div className='SecondBlockStyle'>
                    <h2>Score {this.state.score}</h2>
                </div>

                <div className='ThirdBlockStyle'>
                    <h1><strong>{this.state.question}</strong></h1>
                </div>

                <div className='AnswerOptionsStyle'>
                    <button className='OptionStyle' key={0} onClick={this.OnOptionClicked.bind(this, this.state.answerOptions[0])}>a) {this.state.answerOptions[0]}</button>
                    <button className='OptionStyle' key={1} onClick={this.OnOptionClicked.bind(this, this.state.answerOptions[1])}>b) {this.state.answerOptions[1]}</button>
                    <button className='OptionStyle' key={2} onClick={this.OnOptionClicked.bind(this, this.state.answerOptions[2])}>c) {this.state.answerOptions[2]}</button>
                    <button className='OptionStyle' key={3} onClick={this.OnOptionClicked.bind(this, this.state.answerOptions[3])}>d) {this.state.answerOptions[3]}</button>
                </div>


                <style jsx>
                    {`
                    .BoardPage{
                        display: grid;
                        grid-template-column: 20% 60% 20%;
                        grid-template-row: 10% 5% 10% 75%;
                        background-color: #DDEFE3;
                        color: #2A484E;
                        height: 100%;
                        width: 100%;
                        position: fixed;
                        margin: 0px;
                        padding: 0px;
                        text-align: center;
                        align-items: center
                   }

                    .FirstBlockStyle{
                        margin: 0px;
                        grid-row-start: 1;
                        grid-column-start: 2
                    }
                    
                    .QuestionStyle{
                        letter-spacing: 4px;
                        font-family: cursive
                    }

                    .SecondBlockStyle{
                        font-family: cursive;
                        grid-row-start: 2;
                        grid-column-start: 3;
                        margin: 0px
                    }

                    .ThirdBlockStyle{
                        font-family: cursive;
                        grid-row-start: 3;
                        grid-column-start: 2;
                        margin-top: 0px
                    }

                    .AnswerOptionsStyle{
                        grid-row-start: 4;
                        grid-column-start: 2;
                        display: flex;
                        justify-content: space-around;
                        flex-direction: column;
                        margin: 5px;
                        padding: 5px;
                        font-family: cursive;
                        color: #2A484E;
                        align-items: center
                    }

                    .OptionStyle {
                        margin: 5px;
                        border-radius: 25px;
                        font-family: cursive;
                        height: 40px;
                        width: 300px;
                        background-Color: #377375;
                        border-color: #377375;
                        color: #DDEFE3;
                        outline: none                    
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Levels;