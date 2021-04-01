<script>
  import Enterprise24 from "carbon-icons-svelte/lib/Enterprise24";

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
  <div class="flex flex-wrap px-3">
    {#if listEmpresas}
      {#each listEmpresas as empresa}
        <div class="w-full p-2 md:w-1/2">
          <div
            class="flex items-center h-full p-4 space-x-3 border border-gray-200 rounded-md"
          >
            <a
              href="/dashboard/{empresa.id}"
              class="p-2 text-white bg-blue-700 rounded-md opacity-70 hover:opacity-100"
            >
              <Enterprise24 />
            </a>
            <div class="flex-grow text-sm leading-tight">
              <h2 class="font-semibold text-gray-700">
                {empresa.razonSocial}
              </h2>
              <p class="text-gray-500">
                {empresa.tipoDoc}
                {empresa.numeroDoc}
              </p>
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</section>
