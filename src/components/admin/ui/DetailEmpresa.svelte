<script>
  import Enterprise24 from "carbon-icons-svelte/lib/Enterprise24";

  export let infoEmpresa;
</script>

<section
  class="w-full px-3 text-gray-600 bg-white border rounded-lg shadow-xl py-7"
>
  <div
    class="flex flex-row items-center w-full px-5 mb-3 space-x-3 text-center"
  >
    <Enterprise24 />
    <h1 class="text-lg font-semibold text-left text-gray-700">
      {infoEmpresa.razonSocial}
    </h1>
  </div>
</section>
