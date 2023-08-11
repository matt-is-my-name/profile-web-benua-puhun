import structure_img from "../gallery/structure-image";

const Structure = () => {
  return (
    <>
      <section className="bg-opacity-70 bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="italic mb-4 text-4xl tracking-light font-extrabold text-white">
              Struktur Organisasi Desa
            </h2>
          </div>

          <div className="w-full mx-auto">
            {structure_img &&
              structure_img.map((item) => (
                <img src={item.img} alt={item.alt} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Structure;
