import './App.css';

const styledText = {
  fontSize: "25px",
  textAlign: "center",
  margin: "40px",
  border: "1px solid green"
};

const imageStyle = {
  borderRadius: "60%"
};

 export default function App() {
  return (
    <div style={styledText}>
      <h1> Hello World, we're practicing Inline Styling in React!</h1>
      <img 
      style={imageStyle}
      src="https://placekitten.com/200/300"
      alt="cute kitten"
      />
    </div>
  );
}

