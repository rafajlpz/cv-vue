<template>
  <div class="contenedor">
    <header class="header">
      <h2>Header</h2>
    </header>
    <main class="contenido">
      <h1>Contenido</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, omnis.
        Alias est neque repellendus sapiente possimus sed mollitia sequi iure
        officiis non suscipit laboriosam nulla incidunt inventore pariatur, ex
        praesentium a enim consequatur iste, quo perspiciatis? Quisquam
        perspiciatis consequatur nostrum non, architecto est explicabo. Animi
        dolore ullam reiciendis praesentium maxime magnam similique in, sed
        cumque aut. Harum totam quod, tenetur eos asperiores odio eius assumenda
        rem error quisquam id doloremque iste pariatur, consequuntur repellendus
        omnis numquam quo laboriosam dolor. Mollitia, dolor reprehenderit, nobis
        praesentium neque, cupiditate quisquam ratione modi quis officia cum
        ipsum autem blanditiis error aliquam.

        <br /><br />

        Ullam debitis, repellendus saepe amet quod nisi, necessitatibus modi
        possimus impedit rerum officia culpa exercitationem voluptatum magni
        excepturi? Laudantium dolor iure error enim molestias unde sunt eos,
        tenetur deserunt, vitae sed necessitatibus dignissimos magni eaque.
        Aspernatur quas nesciunt ab pariatur, eum iste rem! Perspiciatis facilis
        placeat enim vel numquam voluptatem non ducimus! Maxime laborum
        architecto quae, id dolorum blanditiis voluptatem omnis quisquam
        doloribus veritatis facere minus! Vero dicta facere dolores minus animi
        laudantium aspernatur perferendis soluta veritatis maxime? Dolores natus
        quisquam veritatis iusto quasi vel accusamus quis eos quidem, mollitia
        nihil. Eos impedit velit minima excepturi nam atque neque inventore.
        Perspiciatis, maiores provident.
      </p>
    </main>
    <aside class="sidebar"><h3>Sidebar</h3></aside>
    <div class="experiencia-1"><h3>Adantia</h3></div>
    <div class="experiencia-2"><h3>Cersia</h3></div>
    <footer class="footer"><h3>Footer</h3></footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #e9ecf4;
  color: black;
  font-family: "Crimson Pro";
  font-size: 18px;
}

.contenedor {
  width: 90%;
  max-width: 62.5rem;
  margin: 1.25rem auto;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
}

.contenedor div,
.contenedor .header,
.contenedor .contenido,
.contenedor .sidebar,
.contenedor .footer {
  background: white;
  padding: 1.25rem;
  border-radius: 4px;
}

.contenedor .header{
    background: grey;
    color: white;
    grid-column: 1/4 ;
}
.contenedor .contenido{
    grid-column: span 2;
}
.contenedor .sidebar{
    grid-column: 3 / 4;
    background: orange;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: span 2;
}
.contenedor .experiencia-1,
.contenedor .experiencia-2{
    background: #55a8fd;
    color: white;
    height: 6.25rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.contenedor .footer{
    background: black;
    color: white;
    grid-column: 1/4;
}
@media screen and (max-width: 768px){
    
}
</style>

<script setup>
</script>