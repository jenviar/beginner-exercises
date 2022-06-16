'use strict'

const _ = require('lodash')

const konigsbergBruteForce = (graph) => {
    let previousEdge = null
    let endVertice = null
    let validEulerianPath = true
    try {
        graph.permutations.forEach(perm => {
            graph.vertices.forEach(startVertice => {
                previousEdge = null
                endVertice = null
                validEulerianPath = true
                perm.forEach((edge) => {
                    if(previousEdge === null && _.includes(graph[edge], startVertice)) {
                        endVertice = graph[edge].find(x => x !== startVertice)
                    } else if (previousEdge !== null && _.includes(graph[edge], endVertice)){
                        endVertice = graph[edge].find(x => x !== endVertice)
                    } else {
                        validEulerianPath = false
                    }
                    previousEdge = edge
                })
                if(validEulerianPath === true) {
                    throw "Valid path found!!"
                }
            })
        })
        validEulerianPath = false
    } catch (ex) {
        console.log(ex)
    }

    return validEulerianPath
}

module.exports = konigsbergBruteForce
