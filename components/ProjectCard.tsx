import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  desc: string;
  img: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      
      {/* image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-90"
        />
      </div>

      {/* text */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500">
          {project.desc}
        </p>
      </div>

    </Link>
  );
}