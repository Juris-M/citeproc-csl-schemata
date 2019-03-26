var path = require("path");
var schemaPathsCsl = path.join(__dirname, "schema", "csl.rnc");
var schemaPathsCslm = path.join(__dirname, "schema", "csl-mlz.rnc");
module.exports = {
    csl: schemaPathCsl,
    cslm: schemaPathCslm
};
