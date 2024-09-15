# Ecco Text Generator
A text generator that creates animated GIFs in the style of messages found in the classic video game Ecco the Dolphin. 

<img style="height: 400px;" src="https://github.com/JohnnyLdeAlba/ecco-text-generator/blob/main/public/card.jpg" /> <img style="height: 400px" src="https://github.com/JohnnyLdeAlba/ecco-text-generator/blob/main/public/sample.gif" />

# Interesting Facts

The background animation used in this generator incorporates a ripple effect from the original games that was reverse engineered from 68000 assembly to Javascript!

# Credits

[Jake](https://twitter.com/fiuefey) for providing numbers and Icelandic character support.

[Brad Corrupts](https://twitter.com/Reaper_man02) who discovered the various effects the ripple generator can produce.

# Dependancies

- NodeJS
- Next.js
- Docker (Optional)

# Features
- Features graphics and special effects reverse engineered from Ecco 2: The Tides of Time for Sega Genesis.
- Custom text rendering software designed to display text and animated fonts.
- Generates PNGs or animated GIFs in the style of messages found in the video game Ecco the Dolphin.
- Supports multiple languages including Russian, Katakana and Hirgana support.
- Animated critters adds a fun layer to the whole generator experience.
- Choose from a variety of themes and ripple effects!
- Muitple resolution support for generating smaller file sizes.

# [Example](http://ecco-text-generator.johnnyldealba.com/)
This is a live version of the repo.

# Docker Installation

If you have Docker installed you can build an image using the following command.

```bash
sudo docker build -t prg:ecco-text-generator .
```

To run the Docker image use the following command.
By dafault the Ecco Text Generator uses port 8000.

```bash
docker run -p 127.0.0.1:8000:8000 prg:ecco-text-generator
```

To view the Ecco Text Generator in the browser type in the following url.

```
http://127.0.0.1:8000
```

# Installation Without Docker

To install all the dependancies required run the following command:

```bash
npm install
```

Next build the distro using the following command:

```bash
npm run build
```

Finally to run the Ecco Text Generator service:

```bash
npm start
```

To view the Ecco Text Generator in the browser type in the following url.

```
http://127.0.0.1:8000
```

<img src="https://github.com/JohnnyLdeAlba/ecco-text-generator/blob/main/public/sample-1.png" /> <img src="https://github.com/JohnnyLdeAlba/ecco-text-generator/blob/main/public/sample-2.png" />

<img src="https://github.com/JohnnyLdeAlba/ecco-text-generator/blob/main/public/sample-3.png" /> <img src="https://github.com/JohnnyLdeAlba/ecco-text-generator/blob/main/public/sample-4.png" />
