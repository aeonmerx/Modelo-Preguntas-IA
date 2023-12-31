  // Notice there is no 'import' statement. 'qna' and 'tf' are
      // available on the index-page because of the script tags above.

      // Solicita al usuario que ingrese la pregunta mediante un prompt.
      const question = prompt("Pregunta: Tell me something about Latin language?");
      
      // Define el contexto como un párrafo con información sobre el latín.
      const context = `
        Latin is a classical language that originated in the Italian Peninsula around the 7th century BC. It went on to become the language of the Roman Empire and had a profound influence on the development of various modern languages, including Spanish, French, Italian, and Portuguese. Latin is known for its complex system of declensions, which include nominative, genitive, dative, accusative, and vocative cases. These declensions are used to indicate the grammatical roles of nouns and pronouns in sentences.

Latin has a rich history and a significant cultural impact. It was not only the language of the Roman Empire but also the language of scholarship, science, religion, and literature in Europe for many centuries. Latin was the language of the Catholic Church, and many scientific and philosophical texts were written in Latin during the Middle Ages. It played a crucial role in the development of various academic disciplines.

Latin literature is renowned for its contributions to poetry, philosophy, and oratory. Prominent Latin authors include Cicero, Virgil, Ovid, Horace, Seneca, and Julius Caesar. Their works continue to be studied and admired for their linguistic and literary qualities.

In addition to its historical significance, Latin is still used today in various contexts. Latin phrases and expressions are commonly found in legal, medical, and scientific terminology. For example, "et cetera" (etc.), "ad hoc," "in vitro," and "per capita" are all Latin phrases used in English. Latin is also the official language of the Vatican City, and it is used in the names of plant and animal species in biological taxonomy.

Latin is often taught in educational institutions worldwide, both as a classical language and for its role in understanding the development of modern languages. Latin enthusiasts and scholars continue to research and study the language, ensuring its enduring legacy.


      `;
   alert("La soluciòn esta cargando danos unos segundos ");
      // Load the model.
      qna.load().then(model => {
        // Find the answers
        model.findAnswers(question, context).then(answers => {
          // Get the first answer if available
          const answer = answers.length > 0 ? answers[0].text : 'No se encontraron respuestas.';
          
          // Display the answer in an h1 tag within a responsive table
          const tableHtml = `
            <div class="table-responsive">
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Respuesta</th>
                  </tr>
                  <tr>
                    <td>${answer}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `;

          document.body.innerHTML += tableHtml;
        }).catch(error => {
          console.error('Error al buscar respuestas:', error);
        });
      }).catch(error => {
        console.error('Error al cargar el modelo:', error);
      });
