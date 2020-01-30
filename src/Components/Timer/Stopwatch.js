import React, {Component} from 'react';
class Stopwatch extends Component {
    state = { 
        timerStart: 0,
        timerOn: false,
        timerTime: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() =>{
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            })
        }, 10)
       
    };

    stopTimer = () => {
        this.setState({ timerOn: false});
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        })
    };

    const { timerTime } = this.state;
    let centiseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ('0' + (Math.floor))
    render() { 
        return (
            <div className='Stopwatch'>
            <h1 className='Stopwatch-header'>Stopwatch</h1>
            </div>
        );
    }
}
 
export default Stopwatch;