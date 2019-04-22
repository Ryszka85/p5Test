A Ball drawn within a canvas accelerates towards
the mouse cursor. The acceleration changes by the distance 
of the mouse cursor. The distance gets evaluated by calculating
a vector which points from the ballPosition(x,y) to the mouseCursor(x,y).
In addition to that, the resulting vector gets divided by its magnitude(length)
to get a unit vector which finally gets multiplied by a factor to set it s magnitude(lenght)
for required acceleration.
