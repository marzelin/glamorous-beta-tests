import { h, render } from "preact"
import glamorous from "glamorous/preact"
const H1 = (glamorous.h1({
  color: "red",
  padding: "20px",
  backgroundColor: "#fafafa"
}) as {}) as preact.ComponentConstructor<any, any>

const App = () => (
  <glamorous.Div backgroundColor="mediumseagreen" borderRadius="5px">
    <H1>Heading 1</H1>
    <glamorous.P padding="20px" backgroundColor="goldenrod">
      paragraph
    </glamorous.P>
  </glamorous.Div>
)

render(<App />, document.body)
