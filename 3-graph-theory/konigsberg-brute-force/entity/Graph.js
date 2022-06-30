'use strict'

const fp = require("lodash/fp")
require('lodash.permutations')
const _ = require("lodash")

class Graph {
    constructor(...edges) {
        this.vertices = fp.flow(fp.flatten, fp.uniq)(edges.map(fp.values))
        this.edges = fp.range(1, fp.size(edges) + 1)
        this.permutations = _.permutations(this.edges, fp.size(this.edges))
    }
}
module.exports = Graph