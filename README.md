# This is HUSLey

**HUSLey** is the most basic library offering a human-friendly HSL-like color representation preserving the lightness.

Of course **HUSLey** is inspired by [Alexei Boronine](https://github.com/boronine)'s rich [HUSL library](https://github.com/boronine/husl). However it focuses on the core problem: Getting RGB values from an HSL-like color representation that preserves lightness.

## Usage

Include or require HUSLey.js in you JavaScript application.

`var rgb = HUSLey(hue, saturation, lightness);`

`hue` is expressed in degrees.
`saturation` and `lightness` are numbers between 0 and 1.

**HUSLey** returns an array of `R, G, B`values between 0 and 255.

Can't be any more simple than that, can it ?