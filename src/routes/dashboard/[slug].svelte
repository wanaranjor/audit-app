<script context="module">
  import {
    getEmpresa,
    getEmpresaAuditoria,
  } from "../../components/admin/services/admin.services";
  import ListAuditEmpresa from "../../components/admin/ui/ListAuditEmpresa.svelte";
  import TotalEmpresa from "../../components/admin/ui/TotalEmpresa.svelte";
  import DetailEmpresa from "./../../components/admin/ui/DetailEmpresa.svelte";
  import NavBarLeft from "./../../components/shared/ui/NavBarLeft.svelte";

  export async function preload(page, session) {
    const { slug } = page.params;
    const infoEmpresa = await getEmpresa(slug);
    const infoAuditEmpresa = await getEmpresaAuditoria(infoEmpresa.id);
    return { infoEmpresa, infoAuditEmpresa };
  }
</script>

<script>
  export let infoEmpresa;
  export let infoAuditEmpresa;

  const handleListAuditEmpresa = async () => {
    infoAuditEmpresa = await getEmpresaAuditoria(infoEmpresa.id);
  };
</script>

<section class="flex flex-row flex-grow h-full">
  <div class="flex flex-col items-center justify-start my-3 w-14">
    <NavBarLeft />
  </div>
  <div class="flex flex-col w-full sm:flex-row">
    <div class="flex flex-col my-3 space-y-3 sm:w-2/3 sm:pr-3">
      <DetailEmpresa
        {infoEmpresa}
        on:updateListAudit={handleListAuditEmpresa}
      />
      <ListAuditEmpresa {infoAuditEmpresa} />
    </div>
    <div class="flex flex-row justify-start pr-5 my-3 space-x-3 sm:w-1/3">
      <TotalEmpresa />
      <!-- <CardEmpresas {listEmpresas} /> -->
    </div>
  </div>
</section>
