<script context="module">
  import { getInfoAuditoria } from "../../components/admin/services/admin.services";
  import NavBarLeft from "../../components/shared/ui/NavBarLeft.svelte";
  import HomeAudit from "./../../components/audit/ui/HomeAudit.svelte";

  export async function preload(page, session) {
    const { slug } = page.params;
    const infoAudit = await getInfoAuditoria(slug);
    return { infoAudit };
  }
</script>

<script>
  export let infoAudit;
</script>

<section class="flex flex-row flex-grow h-full ">
  <div class="flex flex-col items-center justify-start my-3 w-14">
    <NavBarLeft />
  </div>
  <div class="flex flex-col w-full sm:flex-row">
    <div class="flex flex-col my-3 space-y-3 sm:w-2/3 sm:pr-3">
      <HomeAudit {infoAudit} />
    </div>
    <div class="flex flex-col justify-start pr-5 my-3 space-x-3 sm:w-1/3">
      <div class="flex flex-col p-5 space-y-10 bg-white border rounded-md">
        <img src="chart1.png" alt="chart1" />
        <img src="chart2.png" alt="chart1" />
      </div>
    </div>
  </div>
</section>
