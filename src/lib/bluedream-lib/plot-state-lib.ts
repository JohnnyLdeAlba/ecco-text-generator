
export const PlotState = {

  NoFlip: 0,
  HFlip: 1,
  VFlip: 2,
  VHFlip: 3
}

export class t_plot_state {

  id;
  status;

  layer;
  flip;
  rotate;
  scale;
  delay;
  transform;

  index;
  x;
  y;
  width;
  height;

  colorFilter;

  constructor() {

    this.id = 0;
    this.status = new Map();

    this.layer = 0;
    this.flip = 0;
    this.rotate = 0;
    this.scale = 1;
    this.delay = 0;
    this.transform = [];

    this.index = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }

  clone(plotState) {

    this.id = plotState.id;
    this.status = plotState.status;

    this.layer = plotState.layer;
    this.flip = plotState.flip;
    this.rotate = plotState.rotate;
    this.scale = plotState.scale;
    this.delay = plotState.delay;
    this.transform = plotState.transform;

    this.index = plotState.index;
    this.x = plotState.x;
    this.y = plotState.y;
    this.width = plotState.width;
    this.height = plotState.height;
  }

  copy() {

    const plotState = new t_plotState();
    plotState.clone(this);
  }
}

