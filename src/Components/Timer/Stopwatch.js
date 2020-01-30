import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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

   
    render() { 

        //renders the time in this format
        const { timerTime } = this.state;
        let centiseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ('0' + (Math.floor(timerTime / 1000) % 60 )).slice(-2);
        let minutes = ('0' + (Math.floor(timerTime / 60000 ) % 60)).slice(-2);
        let hours = ('0' + (Math.floor(timerTime / 36000000))).slice(-2);

        
      

        return (
            <div className='Stopwatch'>
             <Card className='card' variant='outlined'>
            <h1 className='Stopwatch-header'>Stopwatch</h1>
            <CardContent>
            <div className='Stopwatch-display'>
                {hours} : {minutes} : {seconds}.{centiseconds}
            </div>
            <CardActions className='btn-stopwatch'>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                <Button variant='outline' style={{color:'#00e676'}} onClick={this.startTimer}>Start</Button>
                )}

                {this.state.timerOn === true && (
                <Button variant='outlined' color='secondary' onClick={this.stopTimer}>Stop</Button>
                )}

                {this.state.timerOn === false && this.state.timerTime > 0 && (
                <Button variant='outlined' color='primary' onClick={this.startTimer}>Resume</Button>
                )}

                {this.state.timerOn === false && this.state.timerTime > 0 && (
                <Button variant='outlined' color='primary' onClick={this.resetTimer}>Reset</Button>
                )}
            </CardActions>
            </CardContent>
            </Card>
            </div>
        );
    }
}
 
export default Stopwatch;