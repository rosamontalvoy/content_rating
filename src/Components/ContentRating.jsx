import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    };
  }
  render() {
    return (
      <>
        <h1>Valoración de Contenido de Texto</h1>
        <div className='content-rating'>
          <p>¿Quién nos iba a decir que empezar de nuevo iba a ser tan rápido? ¿Quién nos iba a decir que avanzar iba a ser tan alucinante? ¿Quién nos iba a decir que la vida nos iba a obligar casi a tirones a avanzar? ¿Quién nos iba a decir que íbamos a cambiar tanto nuestra forma de vivir? 
Dos años después, tres de la pandemia, la vida sigue, avanza, y es una de las esencias de la vida, ¿no? avanzar.
Clotilde no podía creerse todo lo que estaba pasando después de tres años, una nueva vida, así en general y en mayúsculas, UNA VIDA NUEVA, increíble eh, así es, después de todo lo que pasó, aquí está nuestra familia con Clotilde como protagonista, avanzando a pasos agigantados.
Nueva pareja, nuevo trabajo, mudanza, ¡QUÉ RADICAL! Así es, todo iba viento en popa con nuestra Clotilde, estaba feliz y a veces se sentía atropellada por el nuevo cambio tan radical en ella misma, se preocupaba con su estilo de vestir, se preocupaba por no tener el síndrome de Diógenes, se preocupaba por tenerlo todo organizado para sentirse bien, intentaba equilibrar sus relaciones de amistad, familiares, ¡Hasta era capaz de hablar sin tapujos! a veces era tan así, que lo dicho, se sentía atropellada porque no lo podía creer. 
Como era de esperar, si ella empezaba a experimentar esos cambios, los que la rodeaban también, y en consecuencia, empezaban a tratarla como una adulta, haciéndole ver que ya no era una niña pequeña y que se lo tenía que creer contándole problemas demasiado duros que ocurrían en la vida y que a ella jamás se le habían contado anteriormente porque ella se sentía pequeña y los demás la veían pequeña. 
Era alucinante, cada día que pasaba, más se sorprendía de ella misma, y por fin podía decir que era feliz. 
Parece mentira que en tres años de pandemia, la situación haya cambiado tanto, ¿eh?
</p>
          <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike}>
              Me gusta ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
              No me gusta ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </>
    );
  }
}
export default ContentRating;