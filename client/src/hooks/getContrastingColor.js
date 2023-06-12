export default function getContrastingColor (color) {
	// Remove the "#" symbol from the color string
  const hex = color.replace('#', '')

	// Extract the individual RGB components
  const rgb = {
    r: parseInt(hex.substr(0, 2), 16),
    g: parseInt(hex.substr(2, 2), 16),
    b: parseInt(hex.substr(4, 2), 16)
  }

	// Calculate the average brightness of the color
  const average = (rgb.r + rgb.g + rgb.b) / 3

	// Determine the contrasting color based on the average brightness
	// If the average is greater than or equal to 128, return black (#000000)
	// Otherwise, return white (#FFFFFF)
  return average >= 128 ? '#000000' : '#FFFFFF' // 128 is just in the middle of  0-255
}
