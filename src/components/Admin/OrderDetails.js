export default function OrderDetails() {
  return <>
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 lg:max-w-full">
      <div className="flex  justify-between pb-6">
        <div>
          <h1 className="font-bold text-gray-700">Order Details</h1>
        </div>

      </div>
      <div className="overflow-y-hidden rounded-lg  border">
        <div className="overflow-x-auto max-w-screen-xl mx-auto">
          <table className="w-90">
            <thead>
              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Full Name</th>
                <th className="px-5 py-3">User Role</th>
                <th className="px-5 py-3">Created at</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">3</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-full w-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">Besique Monroe</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Administrator</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Sep 28, 2022</p>
                </td>

                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">7</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-full w-full rounded-full" src="/images/ddHJYlQqOzyOKm4CSCY8o.png" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">James Cavier</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Author</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Sep 28, 2022</p>
                </td>

                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">12</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-full w-full rounded-full" src="/images/oPf2b7fqx5xa3mo68dYHo.png" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">Elvis Son</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Editor</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Sep 28, 2022</p>
                </td>

                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Suspended</span>
                </td>
              </tr>
              <tr>
                <td className="bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">66</p>
                </td>
                <td className="bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-full w-full rounded-full" src="/images/fR71TFZIDTv2jhvKsOMhC.png" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">Dana White</p>
                    </div>
                  </div>
                </td>
                <td className="bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Administrator</p>
                </td>
                <td className="bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Sep 28, 2022</p>
                </td>

                <td className="bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">Inactive</span>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">12</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-full w-full rounded-full" src="/images/oPf2b7fqx5xa3mo68dYHo.png" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">Elvis Son</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Editor</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Sep 28, 2022</p>
                </td>

                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Suspended</span>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
            <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>

  </>
}  