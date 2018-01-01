Siddharth Parmar Udacity Optimization project:


OPTIMIZATIONS:

Steps taken in order to acheive pagespeed score of 90 and above:

1. Inlined style.css into the index.html file.
2. Delted the style.css file.
3. Removed request for google fonts.
4. Added media=print for the print.css stylesheet.
5. Added async for google analytics script.
6. Optimized images to lower their size using grunt and imagemin
7. Minified the html.

Steps Taken in order

1. Moved the definition of scrollTop and items outside the for loop in updatePositions()
2. Moved the declaration of variable elem outside the for loop in addEventListener()
3. Moved the declaration of variable phase outside the for loop in updatePositions()
4. Moved the declaration of variable pizzasDiv outside the append pizza for loop
5. Re-wrote changePizzaSlices() removing the querySelecting inside the for loop, conversion between pixels and percentages and hence removing the forced reload.
6. Replaced all querySelectors with GetElementById and querySelectorAll with GetElementByClass.
7. Reduced the for loop in sliding pizzas to iterate 24 instead of 200 times since there are 8 slices in one row in the orginal and 3 rows cover the whole page to give the same effect.
8.Replaced scrollTop with scrollY to prevent forced reload in chrome.

