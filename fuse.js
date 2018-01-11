const {FuseBox} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js"
});

fuse.bundle("server/bundle")
    .watch("src/**") // watch only server related code.. bugs up atm
    .instructions(" > [main.ts]")
    .completed(proc => proc.start());

fuse.run();
