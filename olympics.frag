#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


float ring(vec2 st, vec2 pos) {
    float dist = distance(st, vec2(pos.x, pos.y + sin(u_time)*0.025))*10.;
    float _ring = step(dist, 1.) - step(dist, 0.9);
    return _ring;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(1.0);
    vec3 cBlue = vec3(0.0, 120./255., 208./255.);
    vec3 cYellow = vec3(255./255., 177./255., 20./255.);
    vec3 cBlack = vec3(0.0);
    vec3 cGreen = vec3(0, 166./255., 81./255.);
    vec3 cRed = vec3(240./255., 40./255., 45./255.);

    float ring1 = ring(st, vec2(0.29, 0.50));
    float ring2 = ring(st, vec2(0.50, 0.50));
    float ring3 = ring(st, vec2(0.71, 0.50));
    float ring4 = ring(st, vec2(0.39, 0.40));
    float ring5 = ring(st, vec2(0.60, 0.40));

    float bg = 1. - (ring1+ring2+ring3+ring4+ring5);

    
    color = vec3(
        bg+
        cBlue*ring1+
        cBlack*ring2+
        cRed*ring3+
        cYellow*ring4+
        cGreen*ring5
    );

    gl_FragColor = vec4(color,1.0);
}