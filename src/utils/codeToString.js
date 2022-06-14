const codetostring = (multiLines) => {
    var line = "";
    var lines = multiLines.split("\n");
    console.log("line1", lines);
    for (var i = 0; i < lines.length; i++) {
        line = line + `\n${lines[i]}`;
    }

    console.log("line", line);
    return line;
};

export default codetostring