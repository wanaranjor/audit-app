<script>
  import AddFilled24 from "carbon-icons-svelte/lib/AddFilled24";
  import Enterprise24 from "carbon-icons-svelte/lib/Enterprise24";
  import { createEventDispatcher } from "svelte";
  import FormAuditoria from "./FormAuditoria.svelte";

  const dispatch = createEventDispatcher();

  export let infoEmpresa;
  let viewCreateAudit = false;
</script>

<section
  class="w-full px-3 text-gray-600 bg-white border rounded-lg shadow-xl flex-flex-col py-7"
>
  <div
    class="flex flex-row items-center justify-between w-full px-5 text-center"
  >
    <div class="flex flex-row space-x-3">
      <Enterprise24 />
      <h1 class="text-lg font-semibold text-left text-gray-700">
        {infoEmpresa.razonSocial}
      </h1>
    </div>
    <button
      class="flex flex-row items-center p-2 space-x-3 rounded-md hover:bg-blue-100"
      on:click={() => (viewCreateAudit = true)}
    >
      <AddFilled24 class="text-blue-700" />
      <span class="text-gray-700 text-md">Crear auditoría</span>
    </button>
  </div>
  {#if viewCreateAudit}
    <div class="p-5">
      <FormAuditoria
        on:closeBox={() => (viewCreateAudit = false)}
        empresaId={infoEmpresa.id}
        on:updateListAudit={() => dispatch("updateListAudit")}
      />
    </div>
  {/if}
</section>
