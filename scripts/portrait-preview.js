class PortraitPreview {
    constructor(id, select, canvas) {
        this.id = id;
        this.select = select;

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.drawn = false;
    }

    draw(data) {
        var width = 40;
        var height = 40;
        var scale = this.canvas.height / height;

        var rgb_data = data.slice(0, -3);
        var alpha_rgb = data.slice(-3);

        var scaled_rgb_data = scale_rgb(rgb_data, scale, width, height);
        draw_rgb(scaled_rgb_data, alpha_rgb, this.context, width * scale, height * scale);
        this.drawn = true;
    }

    selected() {
        return this.select.value;
    }
}
