<script>
  import Enterprise24 from "carbon-icons-svelte/lib/Enterprise24";
  import View24 from "carbon-icons-svelte/lib/View24";
  import { dateTimeAmPm } from "../../../helpers/datetime";

  export let listEmpresas = [];
</script>

<section
  class="w-full px-3 text-gray-600 bg-white border rounded-lg shadow-xl py-7"
>
  <div
    class="flex flex-row items-center w-full px-5 mb-3 space-x-3 text-center"
  >
    <Enterprise24 />
    <h1 class="text-lg font-semibold text-left text-gray-700">Empresas</h1>
    <span
      class="px-2 text-sm font-semibold text-white bg-blue-700 rounded-full "
      >{listEmpresas.length}</span
    >
  </div>
  <div
    class="w-full px-5 mx-auto overflow-auto md:max-h-sm xl:max-h-lg 2xl:max-h-2xl "
  >
    <table class="w-full text-left whitespace-no-wrap table-auto">
      <thead>
        <tr class="">
          <th
            class="px-2 py-3 text-sm font-semibold tracking-wider text-left text-gray-900 bg-gray-100 rounded-tl rounded-bl"
            >Razón Social</th
          >
          <th
            class="px-2 py-3 text-sm font-semibold tracking-wider text-gray-900 bg-gray-100"
            >Documento</th
          >
          <th
            class="px-2 py-3 text-sm font-semibold tracking-wider text-gray-900 bg-gray-100"
            >Segmento</th
          >
          <th
            class="px-2 py-3 text-sm font-semibold tracking-wider text-gray-900 bg-gray-100"
            >Contacto</th
          >
          <th
            class="px-2 py-3 text-sm font-semibold tracking-wider text-gray-900 bg-gray-100"
            >Creación</th
          >
          <th
            class="px-2 py-3 text-sm font-semibold tracking-wider text-gray-900 bg-gray-100"
            >Acción</th
          >
        </tr>
      </thead>
      <tbody class="text-sm">
        {#if listEmpresas}
          {#each listEmpresas as empresa}
            <tr>
              <td class="px-4 py-2">
                {empresa.razonSocial}
              </td>
              <td class="px-4 py-2">
                {empresa.tipoDoc}
                {empresa.numeroDoc}
              </td>
              <td class="px-4 py-2">
                {empresa.segmentoCliente}
              </td>
              <td class="px-4 py-2">
                {empresa.nombreContacto}
              </td>
              <td class="px-4 py-2">
                {dateTimeAmPm(empresa.createdAt)}
              </td>
              <td class="px-4 py-2">
                <div class="flex flex-row space-x-3">
                  <a href="/dashboard/{empresa.id}">
                    <View24 />
                  </a>
                </div>
              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
  <!-- <div class="flex w-full pl-4 mx-auto mt-4 ">
    <a href="/" class="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
      >Learn More
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
    <button
      class="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
      >Button</button
    >
  </div> -->
</section>
