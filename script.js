function showInputs(shape) {
    const inputsSection = document.getElementById('inputsSection');
    let html = '';

    if (shape === 'square') {
        html = `
            <h2>Square</h2>
            <input type="number" id="side" placeholder="Enter side length">
            <br>
            <button id="calculateBtn" onclick="calculateSquare()">Calculate</button>
        `;
    } else if (shape === 'rectangle') {
        html = `
            <h2>Rectangle</h2>
            <input type="number" id="length" placeholder="Enter length">
            <input type="number" id="width" placeholder="Enter width">
            <br>
            <button id="calculateBtn" onclick="calculateRectangle()">Calculate</button>
        `;
    } else if (shape === 'triangle') {
        html = `
            <h2>Triangle</h2>
            <input type="number" id="base" placeholder="Enter base">
            <input type="number" id="height" placeholder="Enter height">
            <input type="number" id="sideA" placeholder="Enter side A">
            <input type="number" id="sideB" placeholder="Enter side B">
            <input type="number" id="sideC" placeholder="Enter side C">
            <br>
            <button id="calculateBtn" onclick="calculateTriangle()">Calculate</button>
        `;
    } else if (shape === 'circle') {
        html = `
            <h2>Circle</h2>
            <input type="number" id="radius" placeholder="Enter radius">
            <br>
            <button id="calculateBtn" onclick="calculateCircle()">Calculate</button>
        `;
    } else if (shape === 'cube') {
        html = `
            <h2>Cube</h2>
            <input type="number" id="cubeSide" placeholder="Enter side length">
            <br>
            <button id="calculateBtn" onclick="calculateCube()">Calculate</button>
        `;
    }

    inputsSection.innerHTML = html;
    document.getElementById('resultSection').innerHTML = '';
}

function calculateSquare() {
    const side = parseFloat(document.getElementById('side').value);
    const area = side * side;
    const perimeter = 4 * side;
    showResult(`Area: ${area}, Perimeter: ${perimeter}`);
}

function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const area = length * width;
    const perimeter = 2 * (length + width);
    showResult(`Area: ${area}, Perimeter: ${perimeter}`);
}

function calculateTriangle() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    const area = 0.5 * base * height;
    const perimeter = sideA + sideB + sideC;
    showResult(`Area: ${area}, Perimeter: ${perimeter}`);
}

function calculateCircle() {
    const radius = parseFloat(document.getElementById('radius').value);
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    showResult(`Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}`);
}

function calculateCube() {
    const side = parseFloat(document.getElementById('cubeSide').value);
    const surfaceArea = 6 * side * side;
    const volume = side * side * side;
    showResult(`Surface Area: ${surfaceArea}, Volume: ${volume}`);
}

function showResult(text) {
    document.getElementById('resultSection').innerHTML = `<h3>${text}</h3>`;
}
