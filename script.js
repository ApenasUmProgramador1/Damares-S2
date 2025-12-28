const senhaCorreta = "Victor";
const texto =
    "Todavía no sé a dónde va esto, pero sé que me gusta el camino que estamos creando juntos. Me gustan las conversaciones que hablamos todos los días. Cuando nosotros salimos solos, que aparecen de repente, la idea, jaja, me Gusta mucho la sensación de silencio, que me conecta a ti, como si tú tuvieras un poco más de cerca a cada uno de los mensajes cambia. Me parece muy interesante conversación contigo. Me gusta saber cómo ha sido su día, se despertó muy bien, si hay algo que te hizo sonreír, ni de pensar en los demás. Me gusta saber a dónde vas, qué andas haciendo, qué amas y qué evitas. Me gusta conocer sus sueños, sus planes, hasta aquellos en los que todavía no se me ha dicho que tengo la esperanza de un dia escuchar que sólo de ti. Me gusta compartir con los míos, ya que cuando hablo contigo, siento que mis palabras se encuentran en un lugar seguro para estar. Me gusta reírme contigo, incluso cuando son risas tontas, de las que no necesitan razón. Me encanta escuchar sus historias, la misma que se extiende, pues, a la voz de la misma escritura, que tiene la forma de sostenerme. Me gusta esa forma ligera e intensa que tienes de existir en mi día. Me gustas. Y eso es algo que realmente quería decirte, porque a veces guardamos estas cosas para ti, y no quiero hacer eso. Quiero que sepas que me gustas, a tu manera, a tu sonrisa, a tu mirada, a tu mente. Me gusta todo lo que eres, y todo lo que aún descubriremos juntos. Me gusta reírme contigo, incluso cuando son risas tontas, de las que no necesitan razón. Me gusta escuchar sus historias, incluso cuando se extienden, porque su voz, incluso escrita, tiene una forma de atraparme. Me gusta esa forma ligera e intensa que tienes de existir en mi día. me gusta sentir su presencia, incluso cuando viene solo en mensajes, en palabras, en pequeñas señales que dicen más de lo que parecen. Tal vez esto es lo más bonito no es realmente? Gracias por existir como tú existes, Damares. ❤️ ";

let i = 0;

function verificar() {
    const valor = document.getElementById("senha").value;
    if (valor === senhaCorreta) {
        document.getElementById("tela-senha").classList.add("fade");
    } else {
        document.getElementById("erro").innerText = "Senha incorreta...";
    }
}

function abrir() {
    document.getElementById("tela-inicial").classList.add("fade");
    document.getElementById("conteudo").classList.add("mostrar");
    escrever();
}

function escrever() {
    if (i < texto.length) {
        document.getElementById("texto-digitado").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 50);
    }
}