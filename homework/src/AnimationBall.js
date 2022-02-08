export const drawBall = (ctx, ball, date) => {
    const {x, y, radius, color} = ball;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.textAlign = 'center';
    ctx.font = `${radius}px Arial`;
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'middle';
    ctx.fillText(date.getSeconds().toString(), x, y + radius/30);
    ctx.closePath();
    ctx.restore();

};

export const updateBall = (ball) => {
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x + ball.radius >= 799) {
        ball.vx = -ball.vx;
        ball.x = 800 - ball.radius;
    }
    if (ball.x - ball.radius <= 0) {
        ball.vx = -ball.vx;
        ball.x = ball.radius;
    }
    if (ball.y + ball.radius >= 800) {
        ball.vy = -ball.vy;
        ball.y = 800 - ball.radius;
    }
    if (ball.y - ball.radius <= 0) {
        ball.vy = -ball.vy;
        ball.y = ball.radius;
    }
};
