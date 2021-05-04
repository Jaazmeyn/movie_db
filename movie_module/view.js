module.exports = function render(movies){
    //renderfunktion mit anzuzeigenden daten als argument
    //so wenig logic wie möglich in view verlagern
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Movie list</title>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <table>
            <thead><tr><th>Id</th><th>Title</th></tr></thead>
            <tbody>
                ${ movies
                    .map(movie => //map transformiert jeden eintrag in tabelle
                        `<tr>
                            <td>${movie.id}</td>
                            <td>${movie.title}</td>
                        </tr>`)
                    .join('') //zu einer zeichenkette verbinden
                }
            <tbody>
        </table>
    </body>
    </html>
    `;
};