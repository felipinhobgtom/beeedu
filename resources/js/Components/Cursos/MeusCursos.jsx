import { router } from "@inertiajs/react";

const MeusCursos = ({ courses }) => {
    const handleClick = (id) => {
        router.visit(`/cursos/${id}`);
    };

    return (
        <section id="courses" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Cursos</h2>
                    <p className="text-gray-500">Meus Cursos</p>
                </div>

                {courses && courses.length > 0 ? (
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {courses.map((course) => (
                            <div
                                key={course._id}
                                onClick={() => handleClick(course._id)}
                                className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={
                                        course.imagem ||
                                        "https://placehold.co/600x400"
                                    }
                                    alt={course.titulo}
                                    className="rounded-md mb-4 object-cover h-48 w-full"
                                />
                                <div className="flex justify-between text-sm text-gray-500 mb-2">
                                    <span className="uppercase">
                                        {course.area_atuacao || "Geral"}
                                    </span>
                                    <span>{course.nivel || "N/A"}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {course.titulo}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {course.descricao}
                                </p>
                                <div className="text-sm text-gray-500 mt-auto">
                                    <p>Duração: {course.duracao || "N/A"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-center">
                        Você ainda não está inscrito em nenhum curso.
                    </p>
                )}
            </div>
        </section>
    );
};

export default MeusCursos;
