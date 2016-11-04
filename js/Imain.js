var speed = 0.6;
var WIDTH;
var HEIGHT;
var castleWidth;
var scale;
var control = false;

var posicion = 0;
var progress = 0.0;

var _castleCont = $('.castle-container');
var _castle = $('.castle');

var resize = function() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    scale = WIDTH / 1440;

    castleWidth = _castle.width() * scale;

    TweenLite.set(_castle, {scale: scale * 0.85});
};
resize();
$(window).on('resize', resize);


var draw = function() {
    requestAnimationFrame(draw);

    progress += 0.0012 * speed;
    if (progress > 1) progress = 0;
    if (progress < 0) progress = 1;

    TweenLite.set(_castleCont, {x: (1440 * scale + castleWidth) * -progress + castleWidth / 2, y: 1300 * scale * -(0.36)});
};

$(document).on('mousemove', function(e) {
    if (!control) return;

    speed = (1 - (e.clientX / WIDTH) * 2) * 2;
    
    tl.timeScale(speed);
    tl2.timeScale(speed);
    tl3.timeScale(speed);
    tl4.timeScale(speed);
    tl5.timeScale(speed);
});

TweenLite.defaultEase = Power1.easeInOut;

var cloudIntro = function() {
    TweenLite.to($('.cloud1'), 20, {x: WIDTH * 2, y: 300 * scale, opacity: 0.3, ease: Linear.easeNone, force3D: true});
    TweenLite.to($('.cloud-shadow1'), 20, {x: WIDTH * 2 + 50 * scale, y: 450 * scale, opacity: 0.2, ease: Linear.easeNone, force3D: true});
    TweenLite.to($('.cloud-shadow2'), 20, {x: WIDTH * 2 + 50 * scale, y: 450 * scale, ease: Linear.easeNone, force3D: true});
    TweenLite.to($('.cloud-shadow3'), 20, {x: WIDTH * 2 + 50 * scale, y: 450 * scale, ease: Linear.easeNone, force3D: true});
    TweenLite.to($('.cloud2'), 20, {x: WIDTH * 2, y: 300 * scale, opacity: 0.5, ease: Linear.easeNone, force3D: true});
    TweenLite.to($('.cloud3'), 20, {x: WIDTH * 2, y: 300 * scale, ease: Linear.easeNone, force3D: true});
    TweenLite.to($('.cloud4'), 20, {x: WIDTH * 2, y: 300 * scale, ease: Linear.easeNone, force3D: true});
    TweenLite.to($('.cloud5'), 20, {x: WIDTH * 2, y: 300 * scale, ease: Linear.easeNone, force3D: true, onComplete: function() {
        $('.clouds').remove();
    }});
};

var init = function() {
    request = requestAnimationFrame(draw);
    cloudIntro();
};

TweenMax.to($('.kig-bg'), 50, {x: WIDTH * 2, y: 100 * scale, ease: Linear.easeNone, force3D: true, ease: Linear.easeNone, repeat: -1, force3D: true, onRepeat: function() {
    TweenLite.set(this.target[0], {y: Math.random() * 200 - 100, rotationZ: Math.round(Math.random() * 60) - 30, scaleX: Math.random() > 0.5 ? 1 : -1});
}});

var tl = new TimelineMax({repeat: -1, onReverseComplete: function() {this.seek(tl.duration())}});
var _flleg = $('.flleg');
TweenLite.set(_flleg, {rotationZ: 10, x: -5});
tl.add([
    TweenLite.to(_flleg, 1.0, {rotationZ: -10, delay: 0.0, force3D: true}),
    TweenLite.to(_flleg, 0.2, {x: 0, delay: 0.0, ease: Power1.easeOut, force3D: true}),
    TweenLite.to(_flleg, 0.55, {scaleY: 0.8, delay: 0.0, force3D: true}),
    TweenLite.to(_flleg, 0.4, {scaleY: 1.2, delay: 0.6, force3D: true}),
    TweenLite.to(_flleg, 0.6, {x: 10, delay: 0.7, force3D: true}),
    TweenLite.to(_flleg, 0.5, {rotationZ: 0, delay: 1.0, ease: Power1.easeIn, force3D: true}),
    TweenLite.to(_flleg, 0.5, {scaleY: 0.9, delay: 1.0, force3D: true}),
    TweenLite.to(_flleg, 0.5, {rotationZ: 10, delay: 1.5, ease: Power1.easeOut, force3D: true}),
    TweenLite.to(_flleg, 0.5, {scaleY: 1.0, delay: 1.5, force3D: true}),
    TweenLite.to(_flleg, 0.5, {x: -5, delay: 1.3, force3D: true}),
    TweenLite.to(_flleg, 0.2, {x: -2, delay: 1.8, ease: Power1.easeIn, force3D: true}),
]); 

var tl2 = new TimelineMax({repeat: -1, delay: 0.3, onReverseComplete: function() {this.seek(tl2.duration())}});
var _blleg = $('.blleg');
TweenLite.set(_blleg, {rotationZ: 12, x: -5});
tl2.add([
    TweenLite.to(_blleg, 1.0, {rotationZ: -12, delay: 0.0, force3D: true}),
    TweenLite.to(_blleg, 0.2, {x: 0, delay: 0.0, ease: Power1.easeOut, force3D: true}),
    TweenLite.to(_blleg, 0.55, {scaleY: 0.8, delay: 0.0, force3D: true}),
    TweenLite.to(_blleg, 0.4, {scaleY: 1.0, delay: 0.6, force3D: true}),
    TweenLite.to(_blleg, 0.6, {x: 2, delay: 0.7, force3D: true}),
    TweenLite.to(_blleg, 0.5, {rotationZ: -10, delay: 1.0, ease: Power1.easeIn, force3D: true}),
    TweenLite.to(_blleg, 0.5, {scaleY: 0.9, delay: 1.0, force3D: true}),
    TweenLite.to(_blleg, 0.5, {rotationZ: 15, delay: 1.5, ease: Power1.easeOut, force3D: true}),
    TweenLite.to(_blleg, 0.5, {scaleY: 1.0, delay: 1.5, force3D: true}),
    TweenLite.to(_blleg, 0.5, {x: 0, delay: 1.3, force3D: true}),
    TweenLite.to(_blleg, 0.2, {x: -2, delay: 1.8, ease: Power1.easeIn, force3D: true}),
]);

var tl3 = new TimelineMax({repeat: -1, delay: 0.8, onReverseComplete: function() {this.seek(tl3.duration())}});
var _frleg = $('.frleg');
TweenLite.set(_frleg, {rotationZ: 8, x: -3});
tl3.add([
    TweenLite.to(_frleg, 0.9, {rotationZ: -5, delay: 0.0, force3D: true}),
    TweenLite.to(_frleg, 1.2, {x: 8, delay: 0.0, ease: Power1.easeOut, force3D: true}),
    TweenLite.to(_frleg, 0.4, {y: -3, delay: 0.0, ease: Power1.easeIn, force3D: true}),
    TweenLite.to(_frleg, 0.4, {y: 0, delay: 0.5, ease: Power1.easeOut, force3D: true}),

    TweenLite.to(_frleg, 1.2, {rotationZ: 8, delay: 0.9, force3D: true}),

    TweenLite.to(_frleg, 0.6, {x: -3, delay: 1.3, force3D: true}),
    TweenLite.to(_frleg, 1, {y: 0, delay: 0.9, force3D: true}),
    TweenLite.to(_frleg, 0.2, {x: -8, delay: 1.3, ease: Power1.easeIn, force3D: true}),
]);

var tl4 = new TimelineMax({repeat: -1, delay: 1.7, onReverseComplete: function() {this.seek(tl4.duration())}});
var _brleg = $('.brleg');
TweenLite.set(_brleg, {rotationZ: 5, x: -10});
tl4.add([
    TweenLite.to(_brleg, 0.9, {rotationZ: -5, delay: 0.0, force3D: true}),
    TweenLite.to(_brleg, 1.2, {x: 10, delay: 0.0, ease: Power1.easeOut, force3D: true}),
    TweenLite.to(_brleg, 0.4, {y: 0, delay: 0.0, ease: Power1.easeIn, force3D: true}),
    TweenLite.to(_brleg, 0.4, {y: 0, delay: 0.5, ease: Power1.easeOut, force3D: true}),
    TweenLite.to(_brleg, 1.1, {rotationZ: 5, delay: 0.9, force3D: true}),
    TweenLite.to(_brleg, 0.6, {x: 0, delay: 1.2, force3D: true}),
    TweenLite.to(_brleg, 0.6, {y: 0, delay: 1.0, force3D: true}),
    TweenLite.to(_brleg, 0.5, {y: 0, delay: 1.5, force3D: true}),
    TweenLite.to(_brleg, 0.2, {x: -10, delay: 1.8, ease: Power1.easeIn, force3D: true}),
]);


var tl5 = new TimelineMax({repeat: -1, delay: 0.0, onReverseComplete: function() {this.seek(tl5.duration())}});
var _castle = $('.castle');
tl5.add([
    TweenLite.to(_castle, 1.0, {delay: 0.0, force3D: true}),
    TweenLite.to(_castle, 1.0, {delay: 1.0, force3D: true}),
    
    TweenLite.to(_castle, 0.5, {x: '+=' + 2 * scale, y: '-=' + 4 * scale, delay: 0.0, force3D: true}),
    TweenLite.to(_castle, 0.5, {x: '-=' + 4 * scale, y: '+=' + 4 * scale, delay: 0.5, force3D: true}),
    TweenLite.to(_castle, 0.5, {x: '+=' + 4 * scale, y: '-=' + 5 * scale, delay: 1.0, force3D: true}),
    TweenLite.to(_castle, 0.5, {x: '-=' + 2 * scale, y: '+=' + 5 * scale, delay: 1.5, force3D: true}),
]);
