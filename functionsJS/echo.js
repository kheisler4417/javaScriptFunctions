function echo(str) {
    const upperStr = str.toUpperCase();
    const lowerStr = str.toLowerCase();
    const echoStr = `${upperStr} ... ${str} ... ${lowerStr}`;
    console.log(echoStr);
}


// echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
// echo("hey"); // => prints "HEY ... hey ... hey"
// echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
