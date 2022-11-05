import './main.css';

// function validateOnClick(e) {
//   let input = document.getElementById('input');
//   let btn = document.getElementById('btn');

  

//   btn.addEventListener('click', checkValidation());
// }

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <form className="main__form" id="form" action="#" autocomplete="off">
          <fieldset className="main__form-field">
            <input className="main__form-input" id="input" type="text" placeholder="Введите слово" require/>
            <button className="main__form-btn" id="btn" type="submit">
              Отправить
            </button>
          </fieldset>
          
        </form>
      </div>
    </main>
  )
}

export default Main;