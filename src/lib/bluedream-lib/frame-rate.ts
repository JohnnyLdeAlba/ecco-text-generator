export class t_frame_rate {

  refresh;
  updateLogic;

  cycle;
  framesPerSecond;
  frameCounter;
  delay;

  process;
  render;

  constructor() {

    this.refresh = 1;
    this.updateLogic = false;

    this.cycle = 0;
    this.framesPerSecond = 60;
    this.frameCounter = 0;
    this.delay = 0;

    this.process = () => {};
    this.render = () => {};
  }

  exit() { this.refresh = -1; }

  updateFrame() {

    if (this.refresh == -1)
      return;

    if (this.refresh == 1) {

      this.refresh = 0;

      if (this.frameCounter != this.framesPerSecond)
        this.delay = this.cycle / this.framesPerSecond;

      this.cycle = 0;
      this.frameCounter = 0;

      setTimeout(() => this.refresh = 1, 1000);
    }

    if (this.updateLogic) {

      this.process();
      this.updateLogic = false;
    }

    this.cycle++;

    if (this.cycle >= (this.frameCounter * this.delay)) {

      this.render();

      this.frameCounter++;
      this.updateLogic = true;
    }
    
    requestAnimationFrame(() => this.updateFrame() );
  }
}
