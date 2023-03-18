import { load_image, create_canvas } from "./plotter.js";

export class t_sprite_sheet {

  width;
  height;

  total_rows;
  total_columns;
  total_frames;

  frame_width;
  frame_height;

  canvas;

  constructor() {

    this.width = 0;
    this.height = 0;

    this.total_rows = 0;
    this.total_columns = 0;
    this.total_frames = 0;

    this.frame_width = 0;
    this.frame_height = 0;

    this.canvas = null;
  }
}

export const sprite_sheet_create = async (
  filename,
  cell_width,
  cell_height) => {

  const sprite_sheet = new t_sprite_sheet();

  const bitmap = await load_image(filename)
    .catch(err => null);

  if (bitmap == null) { 

    console.log("Error: Unable to load sprite sheet.");	  
    return null;
  }

  const width = bitmap.width;
  const height = bitmap.height;

  const canvas = create_canvas(width, height);
  const context = canvas.getContext("2d");

  context.drawImage(bitmap, 0, 0, width, height);
  sprite_sheet.canvas = canvas;

  sprite_sheet.width = width;
  sprite_sheet.height = height;

  const total_columns = Math.ceil(width/cell_width);
  const total_rows = Math.ceil(height/cell_height);

  sprite_sheet.total_columns = total_columns;
  sprite_sheet.total_rows = total_rows;

  sprite_sheet.frame_width = width / total_columns;
  sprite_sheet.frame_height = height / total_rows;
  sprite_sheet.frame_total = total_columns * total_rows;

  return sprite_sheet;
}

export const sprite_sheet_extract_frame = (sprite_sheet, index) => {

  const row = parseInt(index / sprite_sheet.total_columns);

  const column = index - (row * sprite_sheet.total_columns);
  const x = column * sprite_sheet.frame_width;
  const y = row * sprite_sheet.frame_height;

  const canvas = create_canvas(
    sprite_sheet.frame_width,
    sprite_sheet.frame_height
  );
  const context = canvas.getContext("2d");

  context.drawImage(
    sprite_sheet.canvas,
    x, y,
    sprite_sheet.frame_width,
    sprite_sheet.frame_height,
    0, 0,
    sprite_sheet.frame_width,
    sprite_sheet.frame_height);

  return canvas;
};

export const sprite_sheet_extract_all_frames = (sprite_sheet) => {

  const frames = new Array();

  for (let index = 0; index < sprite_sheet.frame_total; index++)
    frames[index] = sprite_sheet_extract_frame(sprite_sheet, index);

  return frames;
};

export const sprite_sheet_to_canvas_array = async (
  filename, cell_width, cell_height
) => {

  const sprite_sheet = await sprite_sheet_create(
    filename, cell_width, cell_height);

  if (sprite_sheet == null)
    return null;

  return sprite_sheet_extract_all_frames(sprite_sheet);
};

export default sprite_sheet_to_canvas_array;
