import { BsSearch } from "react-icons/bs"
import { Layout } from "../Layout"

export const Users = () => {
  return (
    <Layout>
        <div className="flex items-center justify-between bg-gray-50 px-3 py-4">
          <p className="font-semibold text-[16px] md:text-lg">Data user</p>

          <div className="relative">
            <input type="text" placeholder="Search" name="inputSearch" id="inputSearch" className="rounded-lg w-40 md:w-full px-8 py-2 text-sm border border-[#c7c8cb] focus:outline-none" />
            <BsSearch className="absolute top-2 left-2 w-5 h-5 text-[#c7c8cb]" />
          </div>
        </div>
      <div className="overflow-auto rounded-lg shadow-md">

        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-12 p-3 text-sm font-semibold tracking-wide text-left">No</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Nama Lengkap</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Jenis Kelamin</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Alamat</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Agus Buntung</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Laki-laki</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Siwalan, Gresik</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Lajang</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
