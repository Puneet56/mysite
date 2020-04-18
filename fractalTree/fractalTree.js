var trees = [];
var count = 0;
var leaves = [];
var slider;
var r = 10;
var x = 27;
var c = 0;
var bcolor = [
	"#1a0d00",
	"#1a1a00",
	"#333300",
	"#264d00",
	"#008000",
	"#008000",
	"#008000",
	"#008000",
	"#008000",
	"#008000",
	"#008000",
	"#008000",
];
function setup() {
	createCanvas(700, 700);
	frame = frameCount;
	var slider = createSlider(0, PI / 2, PI / 9, 0.01);
	var angle = slider.value();
	var a = createVector(width / 2, height);
	var b = createVector(width / 2, height - 200);
	var root = new Tree(a, b, angle, x);
	trees.push(root);
}

function draw() {
	background(135, 206, 235);
	stroke(0);
	strokeWeight(0);
	fill("#805500");
	rect(0, height - 80, width, 80);
	for (t of trees) {
		t.show();
	}
	if (frameCount > 350) {
		for (leaf of leaves) {
			fill(255, 0, 100, 50);
			noStroke();
			ellipse(leaf.x, leaf.y, r);
			if (frameCount > 350 && frameCount < 420) {
				if (frameCount % 10 == 0) {
					r += 0.01;
				}
			}
			// if (frameCount > 420 && frameCount < 700) {
			// 	leaf.y += random(0, 5);
			// 	if (leaf.y > height + 300) {
			// 		leaves.splice(leaf);
			// 	}
			// }
		}
	}
	if (frameCount % 40 == 0) {
		if (count != 8) {
			x -= 4;
			c++;
			addBranch();
			console.log(x);
		}
	}
	// if (frameCount > 700) {
	// 	if (leaves.length == 0) {
	// 		if (frameCount > 650) {
	// 			console.log("zero");
	// 			console.log(frameCount);
	// 			for (var i = 0; i < trees.length; i++) {
	// 				if (!trees[i].grown) {
	// 					var leaf = trees[i].end.copy();
	// 					leaves.push(leaf);
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	stroke(0);
	strokeWeight(0);
	fill("#805500");
	rect(0, height - 80, width, 80);
}
function addBranch() {
	for (var i = trees.length - 1; i >= 0; i--) {
		if (!trees[i].grown) {
			trees.push(trees[i].branchA());
			trees.push(trees[i].branchB());
			trees[i].grown = true;
		}
	}
	count++;
	if (count === 8) {
		console.log(frameCount);
		for (var i = 0; i < trees.length; i++) {
			if (!trees[i].grown) {
				var leaf = trees[i].end.copy();
				leaves.push(leaf);
			}
		}
	}
}
