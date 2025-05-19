import { useLoaderData } from "react-router";

interface programType {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const programs = useLoaderData();
  console.log(programs);

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs ? (
          programs.map((program: programType) => (
            <li key={program.id}>{program.title}</li>
          ))
        ) : (
          <p>No programs</p>
        )}
      </ul>
    </div>
  );
}

export default Programs;
