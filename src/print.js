function points_print(ctx) {
  ctx.clearRect(0, 0, 500, 500)
  for ( p of points ){
    ctx.beginPath()
    ctx.arc(p[0] + window_offset[0], p[1] + window_offset[1], point_radius, 0, 2 * Math.PI)
    ctx.fill()
  }
  edges_print(ctx)
}

function edges_print(ctx){
  for ( p of points ){
    for (q of points ){
      ctx.beginPath();
      ctx.moveTo(p[0], p[1]);
      ctx.lineTo(q[0], q[1]);
      ctx.stroke(); 
    }
  }
}

