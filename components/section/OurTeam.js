import Image from 'next/image';

const OurTeam = ({ fields }) => {
  const { title, teamMembers } = fields;
  return (
    <section className="bg-gray-50" section="TeamBios">
      <div className="mx-auto py-24 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-32">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {teamMembers.map((member, i) => {
              const { name, jobTitle, featuredMedia, description } =
                member.fields;
              return (
                <li key={i}>
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <Image
                        src={`https:${featuredMedia.fields.file.url}`}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="shadow-lg rounded-lg"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{name}</h3>
                          <p className="text-indigo-600">{jobTitle}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
