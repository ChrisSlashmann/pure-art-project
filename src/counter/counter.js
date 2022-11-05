import '../main/main.css';
import './counter.css';

function Counter() {
  return (
    <main className="main">
      <div className="main__container">
        <p className="main__counter-text">
        <span className="main__counter-text_bold">Слово</span> использовали <span className="main__counter-text_bold">n</span> раз
        </p>
      </div>
    </main>
  )
}
  
export default Counter;