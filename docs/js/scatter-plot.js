const M = 30;
const D = 2;

const Xmax = 5;
const Xmin = -5;

let X = new Array(M);
let x1;
let x2;
let t = 0;

loop();

function loop() {
  t++;
  x1 = new Array();
  x2 = new Array();
  initArray();
  initParticle();
  x1.push("x1");
  x2.push("x2");
  for ( let i = 0; i < M; i++ ) {
    x1.push(X[i][0]);
    x2.push(X[i][1]);
  }
  plot();
  let timer = setTimeout(loop, 500);
  if ( t == 10 ) {
    clearTimeout(timer);
  }
}

function initParticle() {
  for ( let i = 0; i < M; i++ ) {
    for ( let d = 0; d < D; d++ ) {
      X[i][d] = makeRand();
    }
  }
}

function initArray() {
  for ( let i = 0; i < M; i++ ) {
    X[i] = new Array(D);
  }
}

function makeRand() {
  return Math.random() * (Xmax - Xmin) + Xmin;
}

function plot() {
  c3.generate({
    bindto: '#scatter-plot',
    data: {
      xs: {
        x2: 'x1',
      },
      // iris data from R
      columns: [
        x1,
        x2,
      ],
      type: 'scatter'
    },
    axis: {
      x: {
        label: {
          text: 'x1',
          position: 'outer-center'
        },
        tick: {
          fit: false,
          format: d3.format('.1f')
        },
        max: 5,
        min: -5
      },
      y: {
        label: {
          text: 'x2',
          position: 'outer-middle'
        },
        tick: {
          format: d3.format('.1f')
        },
        max: 5,
        min: -5
      }
    },
    legend: {
      show: false
    }
  });
}
