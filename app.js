const app = Vue.createApp({})

app.component('graph-validator', {
  data() {
    return {
      input: '',
      msg: ''
    }
  },
  methods: {
    validateGraph() {
      if (!this.input) {
        this.msg = 'No graph provided';
      } else if (this.isSingleNode) {
        this.msg = 'Is a connected graph';
      } else if (!this.isConnectedGraph) {
        this.msg = 'Is not a connected graph';
      } else if (!this.isColorableGraph && this.isConnectedGraph) {
        this.msg = 'Is a connected graph, but not red blue colorable';
      } else if (this.isColorableGraph && this.isConnectedGraph) {
        this.msg = 'Is a connected and red-blue colorable graph';
      } else {
        console.log('Unecpected condition');
      }
    }
  },
  computed: {
    modifiedInput() {
      return this.input
        .replace(/\n/g, ',') // replace new lines for commas
        .replace(/\s+/g, ''); // remove white spaces
    },
    paths() {
      return this.modifiedInput.split(',');
    },
    nodesPerPath() {
      return this.paths.map((path) => {
        return path.split('-');
      })
    },
    hasMultiplePaths() {
      return this.paths.length > 1 ? true : false;
    },
    isConnectedGraph() {
      let isConnected = true;
      let connectedPaths = [];

      if (!this.hasMultiplePaths) {
        return true;
      }

      for (let i = 0; i < this.nodesPerPath.length - 1; i++) {
        if (i === 0) {
          connectedPaths.push(...this.nodesPerPath[i]);
        }

        isConnected = connectedPaths.some(node => this.nodesPerPath[i + 1].includes(node));

        if (isConnected) {
          connectedPaths.push(...this.nodesPerPath[i + 1]);
        } else {
          return isConnected;
        }
      }
      return isConnected;
    },
    isColorableGraph() {
      let hasDuplicates;
      for (let nodes of this.nodesPerPath) {

        const set = new Set(nodes);

        hasDuplicates = set.size < nodes.length;
        
        if (hasDuplicates) {
          break;
        }

      }
      return !hasDuplicates;
    },
    isSinglePath() {
      return this.nodesPerPath.length === 1;
    },
    isSingleNode() {
      if (this.isSinglePath) {
        return this.nodesPerPath[0].length === 1;
      } else {
        return false;
      }
    }
  },
  template: `
    <form @submit.prevent="validateGraph">
      <textarea v-model="input" rows="7"></textarea>
      <button type="submit">Validate</button>
    </form>
    <p class="output">{{ msg }}</p>`
})

app.mount('#app')