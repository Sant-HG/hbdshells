const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function disparoAleatorio() {
    // Coordenadas aleatorias de inicio
    const x1 = Math.random() * canvas.width;
    const y1 = Math.random() * canvas.height;

    // Ángulo aleatorio para dirección
    const angulo = Math.random() * Math.PI * 2;

    // Largo del láser
    const largo = Math.random() * 1000 + 200; // entre 200 y 600 px

    // Coordenadas finales basadas en el ángulo
    const x2 = x1 + Math.cos(angulo) * largo;
    const y2 = y1 + Math.sin(angulo) * largo;

    // Dibujar láser
    ctx.strokeStyle = "red";
    ctx.lineWidth = 6; // grueso
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Desaparecer después de un breve tiempo
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 120); // 120ms
}

// Generar disparos aleatorios cada cierto intervalo
setInterval(disparoAleatorio, 300);
