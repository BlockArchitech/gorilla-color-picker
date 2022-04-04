// Gorilla color picker
// ----------------------------------------------------------------
// This takes RGB values and converts them into Gorilla Tag's color values. A gorilla color looks like this:
// RED: 9
// GREEN: 4
// BLUE: 5
// RGB Colors look like this:
// RED: 255
// GREEN: 0
// BLUE: 0
// ----------------------------------------------------------------
// As you can see, very different. What i've found is to take an RGB value, Multiply it by 9, and divide by 255. Then, round it so we get a whole number.
// This will be the formula for the Gorilla Tag's color. It's not perfect, but it's close enough.


// Functions
// ----------------------------------------------------------------

// hex to rgb - for use later
function hex2rgb(hex) {
    var validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!validHEXInput) {
        return false;
    }
    var output = {
        r: parseInt(validHEXInput[1], 16),
        g: parseInt(validHEXInput[2], 16),
        b: parseInt(validHEXInput[3], 16),
    };
    return output;
}

// This function takes an RGB value and returns a Gorilla Tag's color.
function rgbToGorilla() {
	var red = $('#red').val();
	var green = $('#green').val();
	var blue = $('#blue').val();
	var redGorilla = Math.round(red * 9 / 255);
	var greenGorilla = Math.round(green * 9 / 255);
	var blueGorilla = Math.round(blue * 9 / 255);
	return 'Monke Colors: RED: ' + redGorilla + '\nGREEN: ' + greenGorilla + '\nBLUE: ' + blueGorilla;

};

// on click of submit button, run the function with rgb values from input box 'gorilla-color-input'
function gorillasubmit() {
	$('#gorilla-color-output').text(rgbToGorilla());
	// show the output in the div "gorilla-color-output"
	$('#gorilla-color-output').show();
};
