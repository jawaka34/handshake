// global pour le move

move_point = -1


function get_mouse_coord(canvas, e) {
    var offsetX = 0, offsetY = 0, mx, my

    // Compute the total offset
    if (canvas.offsetParent !== undefined) {
        do {
            offsetX += canvas.offsetLeft
            offsetY += canvas.offsetTop
        } while ((canvas = canvas.offsetParent))
    }

    mx = e.pageX - offsetX
    my = e.pageY - offsetY

    return { x: mx, y: my }
}



function point_clicked(coord){
    for ( x in points){
        if ( (coord.x - points[x][0])* (coord.x - points[x][0]) + (coord.y- points[x][1]) * (coord.y - points[x][1]) <= point_radius*point_radius ){
            return x
        }
       
    }
    return -1
}






