class Graph {
    // en javascript il y a de function overlaying
    // donc il faut faire comme ça pour faire deux constructeurs différents
    constructor(n) {
        if (n == undefined) {
            this.adj = []
        }
        else {
            this.adj = []
            for (var i = 0; i < n; i++) {
                this.adj.push([])
            }
        }
    }

    add_vertex() {
        this.adj.push([])
    }

    // TODO faux
    add_edge(x, y) {
        this.adj[x].push(y)
        this.adj[y].push(x)
    }

    // exemple de gestion d'erreur (ou plutôt de panique)
    degree(x) {
        if (x >= this.adj.length) {
            throw Error("degree: le sommet n'existe pas")
        }
        else {
            return this.adj[x].length
        }

    }
}


/*
exemple d'utilisation :
          g = new Graph(2)
          console.log(g)
          g.add_edge(0,1)
          console.log(g.degree(0))

        */