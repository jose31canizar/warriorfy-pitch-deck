import React, { Component } from 'react';

class SmoothScroll extends Component {
    constructor(props) {
      super(props);
      this.state = {
        negativeOffset: 200,
        timer: null
      }
      this.handleSectionClick = this.handleSectionClick.bind(this);
      this.stop = this.stop.bind(this);
      this.scrollTo = this.scrollTo.bind(this);
    }
    render() {
        return (
            <div className="smooth-scroll">
                {React.Children.map(this.props.children, (child, i) => (
                    <div
                      className={this.props.className}
                      onClick={this.handleSectionClick.bind(null, i)}>{child}
                    </div>))}
            </div>
        );
    }

    handleSectionClick(i) {
        this.scrollTo(this.props.section);
    }

    stop() {
        clearTimeout(this.state.timer);
    }

    scrollTo(id, callback) {
        var settings = {
            duration: 1000,
            easing: {
                outQuint: function (x, t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                }
            }
        };
        var percentage;
        var startTime;
        var node = document.getElementById(id);
        var nodeTop = node.offsetTop;
        var nodeHeight = node.offsetHeight;
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        var windowHeight = window.innerHeight
        var offset = window.pageYOffset;
        var delta = nodeTop - offset;
        var bottomScrollableY = height - windowHeight;
        var targetY = (bottomScrollableY < delta) ?
            bottomScrollableY - (height - nodeTop - nodeHeight + offset) :
            delta;
        startTime = Date.now();
        percentage = 0;
        console.log('height: ' + height);
        console.log('delta: ' + delta);
        console.log('nodeHeight: ' + nodeHeight);
        console.log('windowHeight: ' + windowHeight);
        console.log('bottomScrollableY: ' + bottomScrollableY);
        console.log('nodeTop: ' + nodeTop);
        console.log('offset: ' + offset);

        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        function step() {
            var yScroll;
            var elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.state.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.state.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                if(this.props.mobile) {
                  this.state.negativeOffset = 0;
                }
                window.scrollTo(0, yScroll - this.state.negativeOffset);
                this.state.timer = setTimeout(step.bind(this), 10);
            }
        }

        this.state.timer = setTimeout(step.bind(this), 10);
    }
}

export default SmoothScroll;
