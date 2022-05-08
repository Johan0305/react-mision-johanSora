import "./App.css";

const Title = ({ title }) => <h1>{title}</h1>;

const Subtitle = ({ title2 }) => <h2>{title2}</h2>;

const Button = ({ btn }) => <button>{btn}</button>;

function App() {
  return (
    <div>
      <Title title="¡MAKE IT REAL!" />
      <Subtitle title2="Unete ya a esta gran experiencia" />
      <Button btn="Ingresar!" />
    </div>
  );
}

export default App;
