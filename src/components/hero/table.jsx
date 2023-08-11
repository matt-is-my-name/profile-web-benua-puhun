import Data from "../gallery/table_data";

const Table = () => {
  return (
    <>
      <section className="bg-opacity-70 bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="italic mb-4 text-4xl tracking-tight font-extrabold text-white">
              Data Sembako Benua Puhun
            </h2>
          </div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center text-sm font-semibold">
                    <thead class="border bg-green-500 font-medium text-white border-white">
                      <tr>
                        <th scope="col" class="border px-6 py-4">
                          No
                        </th>
                        <th scope="col" class="border px-6 py-4">
                          Nama
                        </th>
                        <th scope="col" class="border  px-6 py-4">
                          Alamat
                        </th>
                        <th scope="col" class="border  px-6 py-4">
                          Jenis Usaha
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      {Data &&
                        Data.map((item) => (
                          <tr class="border-white-500">
                            <td class="border whitespace-nowrap  px-6 py-4 font-medium">
                              {item.NO}
                            </td>
                            <td class="border whitespace-nowrap  px-6 py-4">
                              {item["NAMA PEDAGANG"]}
                            </td>
                            <td class="border whitespace-nowrap  px-6 py-4">
                              {item["ALAMAT TEMPAT TINGGAL"]}
                            </td>
                            <td class="border whitespace-nowrap  px-6 py-4">
                              {item["JENIS USAHA"]}
                            </td>
                          </tr>
                        ))}
                      {/* <tr class="border-b border-white">
                        <td class="whitespace-nowrap  px-6 py-4 font-medium">
                          2
                        </td>
                        <td class="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                        <td class="whitespace-nowrap  px-6 py-4">Thornton</td>
                        <td class="whitespace-nowrap  px-6 py-4">@fat</td>
                      </tr> */}
                      {/* <tr class="border-b border-white">
                        <td class="whitespace-nowrap  px-6 py-4 font-medium">
                          3
                        </td>
                        <td colspan="2" class="whitespace-nowrap  px-6 py-4">
                          Larry the Bird
                        </td>
                        <td class="whitespace-nowrap  px-6 py-4">@twitter</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
