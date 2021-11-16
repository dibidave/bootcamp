function normalPDF(x, mu, sigma) {
    /*
     * Compute value of Normal pdf at point x.
     */
    
    // Argument of exponential
    var expArg = (x - mu) ** 2 / 2.0 / sigma ** 2;
    
    return Math.exp(-expArg) / sigma / Math.sqrt(2 * Math.PI);
}

var x = cds.data['x'];
var y = cds.data['y'];

var mu = mu_slider.value;
var sigma = sigma_slider.value;

var xLen = x.length;
for(var i = 0; i < xLen; i++) {
    y[i] = normalPdf(x[i], mu, sigma);
}

cds.change.emit();