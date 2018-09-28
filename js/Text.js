class Text {
  constructor(ctx, x, y, fontSize, text, color) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = text;
    this.color = color || '#000';
  }
  draw() {
    this.ctx.font = this.fontSize + 'px sans-serif';
    this.ctx.fillStyle = this.color;
    this.ctx.fillText(this.text, this.x, this.y);
  }
}
