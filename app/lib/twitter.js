import { Graphics } from 'pixi.js';

import Particle from './particle'

class Twitter extends Graphics {
    constructor(options) {

        super();

        this.calendar = options.calendar;
        this.nbMonths = options.months;
        this.twitterArray = options.array;
        this.radius = options.radius;
        this.layer = options.layer;

        this.particles = [];

        var step = 0;

        for (var k = 0; k < this.twitterArray.length; k++) {

            this.nbPoints = this.twitterArray[k];

            for (var j = 0; j < this.nbPoints; j++) {

                var options = {

                    x: Math.sin(-(j) *(Math.PI * 2) / ((this.nbMonths*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (4.5*this.layer) - Math.random()*20),
                    y: Math.cos(-(j) *(Math.PI * 2) / ((this.nbMonths*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (4.5*this.layer) - Math.random()*20),
                    color: 0x6f00ff
                };

                var particle = new Particle(options);
                this.addChild(particle);
                this.particles.push(particle);

            }
            step += 1;
        }

    }
}

export default Twitter