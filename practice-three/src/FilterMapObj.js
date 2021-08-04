const list = [
  { id: 1, name: "Jiraiya", hokage: false },
  { id: 2, name: "Minato", hokage: true },
  { id: 3, name: "Nagato", hokage: false },
  { id: 4, name: "Kakashi", hokage: true },
  { id: 5, name: "Hiruzen", hokage: true },
  { id: 6, name: "Obito", hokage: false },
];
const objSource = {
  value1: "value 1",
  value2: "value 2",
  value3: "value 3",
  value4: "value 4",
};
function Iteration() {
  const [showAll, setShowAll] = useState(true);
  return (
    <section>
      <div>
        <h1>List of Ninjas</h1>
        <ul>
          {list
            .filter((ninja) => (showAll ? true : ninja.hokage))
            .map((item) => (
              <li id={item.id.toString()} key={item.id.toString()}>
                {item.name}
              </li>
            ))}
        </ul>
        <button onClick={() => setShowAll(true)}>Show All</button>
        <button onClick={() => setShowAll(false)}>Hokage Only</button>
      </div>
      <hr />
      <ol>
        {Object.keys(objSource).map((key) => (
          <li>
            {objSource[key]} - {key}
          </li>
        ))}
      </ol>
    </section>
  );
}
