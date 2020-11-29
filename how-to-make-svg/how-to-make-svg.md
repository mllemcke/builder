# How To Make an SVG for the Bumby Builder
This is a guide on how to make an svg for use with the Bumby Builder code

## Example 1 - SVG Basics
Take a look at the `example1.html` file which has an SVG that draws a blue square with a purple border
Here's the SVG code
```
<svg viewBox="0 0 375 500" style="width: 375px;">
    <polygon id="square" points="10,10 365,10 365,490 10,490" style="fill:blue;stroke:purple;stroke-width:10;"></polygon>
</svg>
```
This SVG has a width of 375 pixels and a heigh of 500 pixels. That is the default width and height we will use for all of the SVGs in the Bumby Builder.
> 375px X 500px aligns to a standard picture frame ratio of 18:24

Nested inside the `<svg>` element is a `<polygon>` element that defines the square which was drawn. The polygon has a `points` attribute which defines the lines to draw for that polygon. Each point is written as X,Y with a space in between each point. 
> Think of the SVG as a grid where the point 0,0 is top left corner and the point 375,500 is the bottom right corner

The `<polygon>` in example 1 has 4 points so the SVG will draw a line, called a `stroke`, between each point. the properties of the `stroke` are defined in the `style` attribute of the `<polygon>`. Additionally, the `fill` property determines the color to paint the interior space of the `<polygon>`.

## Example 2 - Multiple Polygons
In `example2.html` you can see that we have the same SVG but now with two polygons defined. One polygon fills the top half of the SVG with blue and the other polygon fills the bottom half with red.
```
<svg viewBox="0 0 375 500" style="width: 375px;">
    <polygon id="topSquare" points="10,10 365,10 365,240 10,240" style="fill:blue;stroke:purple;stroke-width:10;"></polygon>
    <polygon id="bottomSquare" points="10,240 365,240 365,490 10,490" style="fill:red;stroke:purple;stroke-width:10;"></polygon>
</svg>
```
This is how in the Bumby Builder we can show clothing items with different colored sections. To make an SVG that draws a sweater you could use one polygon with all the points to draw the sweater's shape; however, for the Bumby Builder any section of a sweater which the customer can choose a color for has to be its own polygon.
> In the finished SVGs the strokes of polygon also show a more realistic image of the sweater as they represent some of the seams.