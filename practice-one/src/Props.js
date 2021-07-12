export default function Props() {
  function Welcome({ name }) {
    return <h1>Hello, {name}</h1>;
  }
  return <Welcome name="Rakib" />;
}
