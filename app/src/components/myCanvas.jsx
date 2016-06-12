import React, {Component} from 'react';
import Circle from './circle';



const supported_keys = {
  circle1: {
    LEFT: 37,
    RIGHT: 39
  },
  circle2: {
    LEFT: 65,
    RIGHT: 68
  }
}


module.exports = class MyCanvas extends Component {

    constructor() {

        super();
        
      //initial state
        this.state = {
          screen: {
            width: window.innerWidth,
            height: window.innerHeight,
            ratio: window.devicePixelRatio || 1

          },
          context: null,
          circle1: {
            position: {
              x: window.innerWidth/2 + 50,
              y: window.innerHeight / 2
            },
            color: 'green',
            radius: 30,
            key: {
              left: supported_keys.circle1.LEFT,
              right: supported_keys.circle1.RIGHT
            }
          },
          circle2: {
            position: {
              x: window.innerWidth / 2 - 50,
              y: window.innerHeight / 2
            },
            color: 'blue',
            radius: 30,
            key: {
              left: supported_keys.circle2.LEFT,
              right: supported_keys.circle2.RIGHT
            }
          },

        };

      }
      //handle keyup event
    handleKeyUp(e) {

    }

    //handle keydown event
    handleKeyDown(e) {

      if (e.keyCode === this.state.circle1.key.left) {
        let circle1 = this.state.circle1;
        if (circle1.position.x - circle1.radius > 0) {
          let circle1 = this.state.circle1;
          circle1.position.x -= 3;

          this.setState({
            circle1: circle1
          });

        }
      } else if (e.keyCode === this.state.circle1.key.right) {

        let circle1 = this.state.circle1;

        if (circle1.position.x + circle1.radius < this.state.screen.width) {
          let circle1 = this.state.circle1;
          circle1.position.x += 3;

          this.setState({
            circle1: circle1
          });
        }
      } else if (e.keyCode === this.state.circle2.key.left) {
        let circle2 = this.state.circle2;
        if (circle2.position.x - circle2.radius > 0) {
          circle2.position.x -= 3

          this.setState({
            circle2: circle2
          });

        }
      } else if (e.keyCode === this.state.circle2.key.right) {
        let circle2 = this.state.circle2;
        if (circle2.position.x + circle2.radius < this.state.screen.width) {
          circle2.position.x += 3;

          this.setState({
            circle2: circle2
          });
        }
      }
    }

    handleScreenResize() {
      this.setState({
        screen: {
          width: window.innerWidth,
          height: window.innerHeight,
          ratio: window.devicePixelRatio || 1

        }
      });

      console.log('resize--');
    }


    componentDidMount() {

      window.addEventListener('keyup', this.handleKeyUp.bind(this));
      window.addEventListener('keydown', this.handleKeyDown.bind(this));
      window.addEventListener('resize', this.handleScreenResize.bind(this));

      const context = this.refs.canvas.getContext('2d');
      this.setState({
        context: context
      });
      this.start();
      requestAnimationFrame(() => {
        this.update()
      });

    }

    start() {
      this.circle1 = new Circle(this.state.circle1);
      this.circle2 = new Circle(this.state.circle2);
    }

    update() {

      //console.log('update called ----');

      const context = this.state.context;

      context.save();

      context.fillStyle = '#000';

      context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
      context.globalAlpha = 1;

      context.restore();

      this.checkStatus(this.state.circle1, this.state.circle2);

      this.circle1.draw({
        position: this.state.circle1.position,
        radius: 20,
        context: context
      });
      this.circle2.draw({
        position: this.state.circle2.position,
        radius: 20,
        context: context
      });


      requestAnimationFrame(() => {
        this.update()
      });
    }

    // check for collision 
    checkStatus(arg1, arg2) {
      let diff = (arg1.position.x + arg1.radius) - (arg2.position.x + arg2.radius);
      if (Math.abs(diff) < arg1.radius * 2) {
        console.log('---The Circles collided ---');
      }

    }

    render() {

      return ( < div >
        < canvas ref = 'canvas'
        width = {
          this.state.screen.width * this.state.screen.ratio
        }
        height = {
          this.state.screen.height * this.state.screen.ratio
        }
        />

        < /div>);

      }
    }

    //module.exports= MyCanvas;
