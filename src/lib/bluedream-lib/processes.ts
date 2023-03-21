import { PlotState } from "./plot-state";

const ps_filter_color = (canvas, color) => {

  const context = canvas.getContext("2d");

  const ImageData = context.getImageData(
    0, 0, canvas.width, canvas.height);

  for (let index = 0; index < ImageData.data.length / 4; index++) {

    let r = ImageData.data[index * 4];
    let g = ImageData.data[index * 4 + 1];
    let b = ImageData.data[index * 4 + 2];
    let a = ImageData.data[index * 4 + 3];

    r = r * color.red;
    g = g * color.green;
    b = b * color.blue;
    a = a * color.alpha

    ImageData.data[index * 4] = parseInt(r);
    ImageData.data[index * 4 + 1] = parseInt(g);
    ImageData.data[index * 4 + 2] = parseInt(b);
    ImageData.data[index * 4 + 3] = parseInt(a);
  }

  context.putImageData(ImageData, 0, 0);
  return canvas;
}

export const ps_process_default = (plotter, plotState) => {

  const colorFilter = plotState.colorFilter;
  const bitmap = plotter.getBitmap(plotState.index);
  if (!bitmap)
    return;

  const source = bitmap.source;

  const width = source.width;
  const height = source.height;

  const viewport = plotter.viewport;
  const context = viewport.getContext("2d");

  if (plotState.imageSmoothing) {
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
  }
  else
    context.imageSmoothingEnabled = false;

  context.translate(plotState.x, plotState.y);

  switch (plotState.flip) {

    case PlotState.HFlip: {

      context.translate(plotState.scale * width/2, 0);
      context.scale(-1, 1);
      context.translate(-plotState.scale * width/2, 0);

      break;
    }

    case PlotState.VFlip: {

      context.translate(0, plotState.scale * height/2);
      context.scale(1, -1);
      context.translate(0, -plotState.scale * height/2);

      break;
    }

    case PlotState.HFlip: {

      context.translate(
        plotState.scale * width/2,
        plotState.scale * bitmap.height/2
      );

      context.scale(-1, -1);

      context.translate(
        -plotState.scale * width/2,
        -plotState.scale * bitmap.height/2
      );

      break;
    }
  }
    
  if (plotState.scale != 0)
    context.scale(plotState.scale, plotState.scale);

  if (plotState.rotate != 0) {

    context.translate(width/2, height/2);
    context.rotate(plotState.rotate * Math.PI/180);
    context.translate(-width/2, -height/2);
  }

  const canvas = (colorFilter => {

    if (!colorFilter)
      return null;
     
    const ps = plotter.createPS();
    ps.index = plotState.index;

    const canvas = plotter.createProcessedBitmap(
      width, height, [ ps ]
    );

    ps_filter_color(canvas, colorFilter);
    return canvas;

  })(colorFilter);

  if (canvas)
    context.drawImage(canvas, 0, 0, width, height);
  else
    context.drawImage(source, 0, 0, width, height);

  context.setTransform(1, 0, 0, 1, 0, 0);
}
