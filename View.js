View.prototype.createScene = function (picture) {
    for (i = 0; i < picture.length; i++) {
        this.scene.add(Shape.create(picture[i]));
    }
}

View.prototype.redraw = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    this.scene.draw(context, canvas.width, canvas.height);

}
 View.prototype.resize = function () {
        var canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.redraw();
    }

function View() {
    this.scene = new Scene(); /* local/member/private variable. Only methods defined inside the View class can access the value of the scene. The mScene variable stores the new Scene object. */

} 