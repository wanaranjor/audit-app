<script>
  import Enterprise24 from "carbon-icons-svelte/lib/Enterprise24";

  export let infoAudit;
</script>

<section class="px-5 py-10 text-gray-700 bg-white border rounded-md">
  <div
    class="flex flex-row items-center justify-between w-full px-5 text-center"
  >
    <div class="flex flex-row space-x-3">
      <Enterprise24 />
      <a
        href="/dashboard/{infoAudit.empresa.id}"
        class="text-lg font-semibold text-left text-gray-700"
      >
        {infoAudit.empresa.razonSocial}
      </a>
    </div>
  </div>
  <div class="py-10 text-center">
    <h1 class="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
      {infoAudit.nameAudit}
    </h1>
    <p
      class="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s"
    >
      {infoAudit.description}
    </p>
    <div class="flex justify-center mt-6">
      <div class="inline-flex w-16 h-1 bg-blue-700 rounded-full" />
    </div>
  </div>
  <div class="grid grid-cols-2 gap-3 space-y-5">
    <div class="flex flex-col items-center justify-center">
      <img src="conocimiento.svg" alt="conocimiento" class="w-1/3" />
      <h2 class="py-3 text-xl font-semibold text-gray-700">Conocimiento</h2>
    </div>
    <div class="flex flex-col items-center justify-center">
      <img src="planeacion.svg" alt="conocimiento" class="w-1/3" />
      <h2 class="py-3 text-xl font-semibold text-gray-700">Planeación</h2>
    </div>
    <div class="flex flex-col items-center justify-center">
      <img src="ejecucion.svg" alt="conocimiento" class="w-1/3" />
      <h2 class="py-3 text-xl font-semibold text-gray-700">Ejecución</h2>
    </div>
    <div class="flex flex-col items-center justify-center">
      <img src="informes.svg" alt="conocimiento" class="w-1/3" />
      <h2 class="py-3 text-xl font-semibold text-gray-700">Informes</h2>
    </div>
  </div>
</section>
