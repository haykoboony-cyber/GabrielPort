const projects = [
  { title: "Projeto 1", description: "Descrição do projeto", link: "#" },
  { title: "Projeto 2", description: "Outro projeto", link: "#" }
];

function Projects() {
  return (
    <section>
      <h2>Meus Projetos</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>Ver projeto</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;