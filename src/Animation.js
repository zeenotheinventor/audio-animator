import React, { Component } from 'react';
import Rythm from 'rythm.js';
import music from './AfricanMetal_v17.mp3'

class Animation extends Component {

    state = {
        rhythm: new Rythm()
    }

    animate() {

        try {
            let rythm = this.state.rhythm
            rythm.setMusic(music);
            rythm.addRythm('rythm-bass', 'jump', 0, 10);
            rythm.start();
        } catch (e) {
            console.log(e)
        }
    }

    stop() {
        this.state.rhythm.stop();
    }

    render() {
        return (
            <div>
                <div className="rythm-high">
                    <div>
                        <div>
                            {/* <img src={logo} className="App-logo" alt="logo" /> */}
                            
                            <div>Bass</div>
                        </div>
                    </div>

                </div>
                <div className="rythm-medium">Mids</div>
                <div className="rythm-high">Highs</div>
                <button onClick={this.animate.bind(this)}>Animate</button>
                <button onClick={this.stop.bind(this)}>Stop</button>
            </div>
        );
    }
}


export default Animation;