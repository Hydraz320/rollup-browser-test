import "./styles.css";
import * as rollup from "rollup";

rollup
  .rollup({
    input: "./src/index.a.js"
  })
  .then(a => a.generate({ format: "cjs" }))
  .then(console.log);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
