import { t_plotter } from "../../../../lib/bluedream-lib/plotter";
import Fonts from "../../fonts";

const canvas_add_fonts = async canvas => {

  const primaryFont = Fonts.font_crimson();

  await canvas.addFont(primaryFont);
  await canvas.addFont(Fonts.font_deep_blue());
  await canvas.addFont(Fonts.font_elvish());
  await canvas.addFont(Fonts.font_home_bay());
  await canvas.addFont(Fonts.font_jurassic());
  await canvas.addFont(Fonts.font_last_fight());
  await canvas.addFont(Fonts.font_mordor());
  await canvas.addFont(Fonts.font_night());
  await canvas.addFont(Fonts.font_system());
  await canvas.addFont(Fonts.font_system_yellow());
  await canvas.addFont(Fonts.font_system_red());
  await canvas.addFont(Fonts.font_thanos());
  await canvas.addFont(Fonts.font_the_machine());
  await canvas.addFont(Fonts.font_vaporwave());
  await canvas.addFont(Fonts.font_volcano());

  canvas.fontMap.forEach(
    font => font.animated = primaryFont.animated);
}

const canvas_add_backgrounds = async canvas => {

  await canvas.addBackground(
    "crimsonBackground",
    "/eccotext/theme/backgrounds/crimson.png"
  );

  await canvas.addBackground(
    "deepBlueBackground",
    "/eccotext/theme/backgrounds/deep-blue.png"
  );

  await canvas.addBackground(
    "elvishBackground",
    "/eccotext/theme/backgrounds/elvish.png"
  );

  await canvas.addBackground(
    "homeBayBackground",
    "/eccotext/theme/backgrounds/home-bay.png"
  );

  await canvas.addBackground(
    "jurassicBackground",
    "/eccotext/theme/backgrounds/jurassic-beach.png"
  );

  await canvas.addBackground(
    "mordorBackground",
    "/eccotext/theme/backgrounds/mordor.png"
  );

  await canvas.addBackground(
    "nightBackground",
    "/eccotext/theme/backgrounds/night.png"
  );

  await canvas.addBackground(
    "thanosBackground",
    "/eccotext/theme/backgrounds/thanos.png"
  );

  await canvas.addBackground(
    "lastFightBackground",
    "/eccotext/theme/backgrounds/the-last-fight.png"
  );

  await canvas.addBackground(
    "theMachineBackground",
    "/eccotext/theme/backgrounds/the-machine.png"
  );

  await canvas.addBackground(
    "vaporwaveBackground",
    "/eccotext/theme/backgrounds/vaporwave.png"
  );

  await canvas.addBackground(
    "volcanoBackground",
    "/eccotext/theme/backgrounds/volcano.png"
  );
}

const canvas_add_themes = canvas => {

  canvas.addTheme("crimsonTheme", "crimsonFont", "crimsonBackground");
  canvas.addTheme("deepBlueTheme", "deepBlueFont", "deepBlueBackground");
  canvas.addTheme("elvishTheme", "elvishFont", "elvishBackground");
  canvas.addTheme("homeBayTheme", "homeBayFont", "homeBayBackground");
  canvas.addTheme("jurassicTheme", "jurassicFont", "jurassicBackground");
  canvas.addTheme("lastFightTheme", "lastFightFont", "lastFightBackground");
  canvas.addTheme("mordorTheme", "mordorFont", "mordorBackground");
  canvas.addTheme("nightTheme", "nightFont", "nightBackground");
  canvas.addTheme("thanosTheme", "thanosFont", "thanosBackground");
  canvas.addTheme("theMachineTheme", "theMachineFont", "theMachineBackground");
  canvas.addTheme("vaporwaveTheme", "vaporwaveFont", "vaporwaveBackground");
  canvas.addTheme("volcanoTheme", "volcanoFont", "volcanoBackground");
}

export const canvas_initialize = async (canvas, canvasElement) => {

  if (!canvasElement)
    return;

  window.addEventListener("keydown", event => {

    canvas.handleInput(event.key);
    event.preventDefault();
  });

  canvas.state = "initPending";

  canvas.canvas = canvasElement;
  canvas.plotter = new t_plotter();

  canvas.plotter.initialize(320, 240);    
  canvas.plotter.setCanvas(canvasElement);

  await canvas_add_fonts(canvas);
  await canvas_add_backgrounds(canvas);
  canvas_add_themes(canvas);

  canvas.setTheme("homeBayTheme");
  canvas.setResolution("resMedium");
  canvas.setWaveformIndex(-998, "rippleEffect");

  canvas.frameRate.process = () => canvas.updateViewport();
  canvas.frameRate.render = () => canvas.render();
  canvas.frameRate.updateFrame();

  canvas.disableLoading();

  canvas.pushUpdate();
  canvas.commit();

  const onSync = canvas.progma.get("onSync");
  if (onSync)
    onSync("canvas", () => canvas.onReady());
}
