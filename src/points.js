function points_reset(ctx) {
    points = []

    ctx.clearRect(0, 0, 500, 500)
    points_print()
}

function add_point(x,y){
    points.push([x,y])
  }