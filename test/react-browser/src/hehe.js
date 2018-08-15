import logo from './logo.svg'
import './App.css'
// export component
export default {
  name: 'app',
  methods: {
    test () {
      console.log(this)
      console.log(this.$refs.header)
    }
  },
  render () {
    console.log(this.name)
    return (
      <div class="App">
        <header ref="header" class="App-header">
          <h1
            onClick={() => {
              this.test()
            }}
            class="App-title"
          >
            Welcome to React
          </h1>
        </header>
        <p class="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
