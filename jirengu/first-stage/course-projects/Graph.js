/**
 * 顶点 vertex
 * 边 edge
 * V(G) = {V0, V1, V2, V3, V4}
 * E(G) = {(V0, V1), (V1, V2), (V0, V2), (V1, V3), (V0, V4)}
 * V0: [V1, V2, V4]
 * V1: [V0, V2, V3]
 * V2: [V0, V1]
 * V3: [V1]
 * V4: [V0]
 [[1, 2, 4], [0, 2, 3], [1, 0], [1], [0]]
 */

class Graph {
  constructor (vCount) {
    this.vertexCount = vCount
    this.adjacencyList = [...Array(vCount)].map(v => [])
    this.verticesStatus = [...Array(vCount)].map(v => false)
  }

  addEdge (v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  showGraph () {
    this.adjacencyList.forEach((adjVertices, v) => {
      console.log(`${v} -> ${adjVertices.toString()}`)
    })
  }

  resetStatus () {
    this.verticesStatus = [...Array(this.vertexCount)].map(v => false)
  }

  dfs (v) {
    this.verticesStatus[v] = true
    console.log(`访问到: ${v}`)
    if (Array.isArray(this.adjacencyList[v])) {
      this.adjacencyList[v].forEach(adjVertex => {
        if (!this.verticesStatus[adjVertex]) this.dfs(adjVertex)
      })
    }
  }

  bfs (v) {
    const queue = []
    queue.push(v)
    while (queue.length > 0) {
      const v = queue.shift()
      if (this.verticesStatus[v]) continue
      this.verticesStatus[v] = true
      console.log(`访问到: ${v}`)
      this.adjacencyList[v].forEach(adjVertex => {
        queue.push(adjVertex)
      })
    }
  }
}

const g = new Graph(5)
g.addEdge(0, 1)
g.addEdge(1, 2)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(0, 4)

g.showGraph()
// console.log('bfs:')
// g.bfs(0)
// g.resetStatus()

// console.log('dfs:')
// g.dfs(0)
