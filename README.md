# This is HUSLey

**HUSLey** is a simple library offering a lightness stable human-friendly HSL color representation.

Of course **HUSLey** is inspired by [Alexei Boronine](https://github.com/boronine)'s rich [HUSL library](https://github.com/boronine/husl). However it focuses on the core problem: Getting RGB values from an HSL-like color representation that preserves lightness.

## Usage

Include or require HUSLey.js in you JavaScript application.

    var rgb = HUSLey(hue, saturation, lightness);

The `hue` is expressed in radians.
The `saturation` and `lightness` are numbers between 0 and 1.

**HUSLey** returns an array of `R, G, B` components in the range 0 and 255.

## That's all folks

Can't be any more simple than that, can it ?
